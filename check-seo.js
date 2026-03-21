const fs = require('fs');
const path = require('path');

// Function to check if file exists
function fileExists(filePath) {
  try {
    return fs.existsSync(filePath);
  } catch (error) {
    return false;
  }
}

// Function to extract SEO metadata from files
function extractSEOMetadata(content, filePath) {
  const metadata = {};
  
  // Extract title
  const titleMatch = content.match(/title:\s*["']([^"']+)["']/);
  if (titleMatch) metadata.title = titleMatch[1];
  
  // Extract description
  const descMatch = content.match(/description:\s*["']([^"']+)["']/);
  if (descMatch) metadata.description = descMatch[1];
  
  // Extract keywords
  const keywordsMatch = content.match(/keywords:\s*["']([^"']+)["']/);
  if (keywordsMatch) metadata.keywords = keywordsMatch[1];
  
  // Extract canonical URL
  const canonicalMatch = content.match(/canonical:\s*["']([^"']+)["']/);
  if (canonicalMatch) metadata.canonical = canonicalMatch[1];
  
  // Extract structured data
  const structuredDataMatch = content.match(/<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/);
  if (structuredDataMatch) metadata.structuredData = structuredDataMatch[1];
  
  // Extract Open Graph tags
  const ogTitleMatch = content.match(/property=["']og:title["']\s+content=["']([^"']+)["']/);
  if (ogTitleMatch) metadata.ogTitle = ogTitleMatch[1];
  
  const ogDescMatch = content.match(/property=["']og:description["']\s+content=["']([^"']+)["']/);
  if (ogDescMatch) metadata.ogDescription = ogDescMatch[1];
  
  const ogImageMatch = content.match(/property=["']og:image["']\s+content=["']([^"']+)["']/);
  if (ogImageMatch) metadata.ogImage = ogImageMatch[1];
  
  // Extract Twitter Card tags
  const twitterCardMatch = content.match(/name=["']twitter:card["']\s+content=["']([^"']+)["']/);
  if (twitterCardMatch) metadata.twitterCard = twitterCardMatch[1];
  
  const twitterTitleMatch = content.match(/name=["']twitter:title["']\s+content=["']([^"']+)["']/);
  if (twitterTitleMatch) metadata.twitterTitle = twitterTitleMatch[1];
  
  // Extract robots meta
  const robotsMatch = content.match(/name=["']robots["']\s+content=["']([^"']+)["']/);
  if (robotsMatch) metadata.robots = robotsMatch[1];
  
  return metadata;
}

// Function to check GEO structured data
function checkGEOStructuredData(metadata) {
  const issues = [];
  const recommendations = [];
  
  if (!metadata.structuredData) {
    issues.push("❌ ไม่พบ Structured Data (JSON-LD)");
    recommendations.push("✅ เพิ่ม Structured Data สำหรับ LocalBusiness/Organization");
  } else {
    try {
      const structuredData = JSON.parse(metadata.structuredData);
      
      // Check for GEO specific data
      if (structuredData['@type'] === 'LocalBusiness' || structuredData['@type'] === 'Organization') {
        if (structuredData.address) {
          recommendations.push("✅ มีข้อมูลที่อยู่");
        } else {
          issues.push("❌ ไม่มีข้อมูลที่อยู่");
          recommendations.push("✅ เพิ่ม address ใน Structured Data");
        }
        
        if (structuredData.telephone) {
          recommendations.push("✅ มีข้อมูลเบอร์โทรศัพท์");
        } else {
          issues.push("❌ ไม่มีข้อมูลเบอร์โทรศัพท์");
          recommendations.push("✅ เพิ่ม telephone ใน Structured Data");
        }
        
        if (structuredData.geo) {
          recommendations.push("✅ มีข้อมูลพิกัดภูมิศาสตร์");
        } else {
          issues.push("❌ ไม่มีข้อมูลพิกัดภูมิศาสตร์");
          recommendations.push("✅ เพิ่ม geo (latitude, longitude) ใน Structured Data");
        }
        
        if (structuredData.areaServed) {
          recommendations.push("✅ มีข้อมูลพื้นที่ให้บริการ");
        } else {
          issues.push("❌ ไม่มีข้อมูลพื้นที่ให้บริการ");
          recommendations.push("✅ เพิ่ม areaServed ใน Structured Data");
        }
      }
    } catch (e) {
      issues.push("❌ Structured Data รูปแบบไม่ถูกต้อง");
    }
  }
  
  return { issues, recommendations };
}

// Function to check AEO (Answer Engine Optimization)
function checkAEO(metadata, filePath) {
  const issues = [];
  const recommendations = [];
  
  // Check for FAQ structured data
  if (metadata.structuredData && metadata.structuredData.includes('"@type": "FAQPage"')) {
    recommendations.push("✅ มี FAQ Structured Data");
  } else {
    issues.push("❌ ไม่มี FAQ Structured Data");
    recommendations.push("✅ เพิ่ม FAQ Structured Data สำหรับ AEO");
  }
  
  // Check for How-To structured data
  if (metadata.structuredData && metadata.structuredData.includes('"@type": "HowTo"')) {
    recommendations.push("✅ มี How-To Structured Data");
  } else {
    recommendations.push("✅ เพิ่ม How-To Structured Data สำหรับ AEO");
  }
  
  // Check for Q&A structured data
  if (metadata.structuredData && metadata.structuredData.includes('"@type": "Question"')) {
    recommendations.push("✅ มี Q&A Structured Data");
  } else {
    recommendations.push("✅ เพิ่ม Q&A Structured Data สำหรับ AEO");
  }
  
  return { issues, recommendations };
}

// Function to check basic SEO
function checkBasicSEO(metadata, filePath) {
  const issues = [];
  const recommendations = [];
  
  // Title check
  if (!metadata.title) {
    issues.push("❌ ไม่มี Title");
    recommendations.push("✅ เพิ่ม Title (50-60 ตัวอักษร)");
  } else if (metadata.title.length < 30) {
    issues.push("❌ Title สั้นเกินไป");
    recommendations.push("✅ Title ควรมี 30-60 ตัวอักษร");
  } else if (metadata.title.length > 60) {
    issues.push("❌ Title ยาวเกินไป");
    recommendations.push("✅ Title ควรมี 30-60 ตัวอักษร");
  } else {
    recommendations.push("✅ Title มีขนาดเหมาะสม");
  }
  
  // Description check
  if (!metadata.description) {
    issues.push("❌ ไม่มี Description");
    recommendations.push("✅ เพิ่ม Description (150-160 ตัวอักษร)");
  } else if (metadata.description.length < 120) {
    issues.push("❌ Description สั้นเกินไป");
    recommendations.push("✅ Description ควรมี 120-160 ตัวอักษร");
  } else if (metadata.description.length > 160) {
    issues.push("❌ Description ยาวเกินไป");
    recommendations.push("✅ Description ควรมี 120-160 ตัวอักษร");
  } else {
    recommendations.push("✅ Description มีขนาดเหมาะสม");
  }
  
  // Keywords check
  if (!metadata.keywords) {
    recommendations.push("✅ เพิ่ม Keywords (5-8 คำ)");
  } else {
    const keywordCount = metadata.keywords.split(',').length;
    if (keywordCount > 10) {
      issues.push("❌ Keywords มากเกินไป");
      recommendations.push("✅ Keywords ควรมี 5-8 คำ");
    } else {
      recommendations.push("✅ Keywords มีจำนวนเหมาะสม");
    }
  }
  
  // Open Graph check
  if (!metadata.ogTitle) {
    issues.push("❌ ไม่มี OG Title");
    recommendations.push("✅ เพิ่ม OG Title");
  }
  
  if (!metadata.ogDescription) {
    issues.push("❌ ไม่มี OG Description");
    recommendations.push("✅ เพิ่ม OG Description");
  }
  
  if (!metadata.ogImage) {
    issues.push("❌ ไม่มี OG Image");
    recommendations.push("✅ เพิ่ม OG Image (1200x630px)");
  }
  
  // Twitter Card check
  if (!metadata.twitterCard) {
    issues.push("❌ ไม่มี Twitter Card");
    recommendations.push("✅ เพิ่ม Twitter Card");
  }
  
  // Robots check
  if (!metadata.robots) {
    issues.push("❌ ไม่มี Robots Meta");
    recommendations.push("✅ เพิ่ม Robots Meta (index, follow)");
  }
  
  return { issues, recommendations };
}

// Function to scan directory for SEO files
function scanDirectoryForSEO(dirPath) {
  const results = [];
  
  function traverse(currentPath) {
    const files = fs.readdirSync(currentPath);
    
    for (const file of files) {
      const filePath = path.join(currentPath, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        // Skip node_modules and other common directories
        if (!['node_modules', '.git', '.next', 'out', '.vercel'].includes(file)) {
          traverse(filePath);
        }
      } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.js')) {
        const content = fs.readFileSync(filePath, 'utf8');
        
        // Check if file contains SEO metadata
        if (content.includes('title:') || content.includes('description:') || content.includes('metadata:')) {
          const metadata = extractSEOMetadata(content, filePath);
          
          const basicSEO = checkBasicSEO(metadata, filePath);
          const geoCheck = checkGEOStructuredData(metadata);
          const aeoCheck = checkAEO(metadata, filePath);
          
          results.push({
            file: filePath,
            metadata,
            basicSEO,
            geoCheck,
            aeoCheck
          });
        }
      }
    }
  }
  
  traverse(dirPath);
  return results;
}

// Main function
function main() {
  console.log('🔍 ตรวจสอบ SEO, GEO, AEO และ Indexed Pages...\n');
  
  const appDir = path.join(__dirname, 'app');
  if (!fileExists(appDir)) {
    console.log('❌ ไม่พบโฟลเดอร์ app');
    return;
  }
  
  const results = scanDirectoryForSEO(appDir);
  
  if (results.length === 0) {
    console.log('❌ ไม่พบไฟล์ที่มี SEO metadata');
    return;
  }
  
  console.log('📊 ผลการตรวจสอบ SEO:\n');
  
  results.forEach((result, index) => {
    console.log(`📄 ${index + 1}. ${result.file}`);
    console.log(`   Title: ${result.metadata.title || 'ไม่มี'}`);
    console.log(`   Description: ${result.metadata.description ? result.metadata.description.substring(0, 100) + '...' : 'ไม่มี'}`);
    
    // Basic SEO issues
    if (result.basicSEO.issues.length > 0) {
      console.log('\n   🔴 ปัญหา SEO พื้นฐาน:');
      result.basicSEO.issues.forEach(issue => console.log(`      ${issue}`));
    }
    
    if (result.basicSEO.recommendations.length > 0) {
      console.log('\n   ✅ แนะนำ SEO พื้นฐาน:');
      result.basicSEO.recommendations.forEach(rec => console.log(`      ${rec}`));
    }
    
    // GEO issues
    if (result.geoCheck.issues.length > 0) {
      console.log('\n   🌍 ปัญหา GEO Structured Data:');
      result.geoCheck.issues.forEach(issue => console.log(`      ${issue}`));
    }
    
    if (result.geoCheck.recommendations.length > 0) {
      console.log('\n   🗺️ แนะนำ GEO Structured Data:');
      result.geoCheck.recommendations.forEach(rec => console.log(`      ${rec}`));
    }
    
    // AEO issues
    if (result.aeoCheck.issues.length > 0) {
      console.log('\n   🤖 ปัญหา AEO:');
      result.aeoCheck.issues.forEach(issue => console.log(`      ${issue}`));
    }
    
    if (result.aeoCheck.recommendations.length > 0) {
      console.log('\n   🎯 แนะนำ AEO:');
      result.aeoCheck.recommendations.forEach(rec => console.log(`      ${rec}`));
    }
    
    console.log('\n' + '='.repeat(80) + '\n');
  });
  
  // Summary
  const totalIssues = results.reduce((sum, result) => 
    sum + result.basicSEO.issues.length + result.geoCheck.issues.length + result.aeoCheck.issues.length, 0
  );
  
  const totalRecommendations = results.reduce((sum, result) => 
    sum + result.basicSEO.recommendations.length + result.geoCheck.recommendations.length + result.aeoCheck.recommendations.length, 0
  );
  
  console.log('📈 สรุปผล:');
  console.log(`   📁 ตรวจสอบทั้งหมด: ${results.length} ไฟล์`);
  console.log(`   🔴 พบปัญหาทั้งหมด: ${totalIssues} ข้อ`);
  console.log(`   ✅ คำแนะนำทั้งหมด: ${totalRecommendations} ข้อ`);
  
  if (totalIssues > 0) {
    console.log('\n⚠️  มีปัญหา SEO ที่ต้องแก้ไข');
  } else {
    console.log('\n✅ SEO ดูดีแล้ว');
  }
}

// Run the check
main();
