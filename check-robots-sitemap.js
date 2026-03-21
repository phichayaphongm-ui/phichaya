const https = require('https');

// Function to check if URL is accessible
function checkUrl(url) {
  return new Promise((resolve, reject) => {
    const request = https.get(url, (response) => {
      resolve({
        status: response.statusCode,
        headers: response.headers,
        url: url
      });
    });

    request.on('error', (error) => {
      resolve({
        status: 'ERROR',
        error: error.message,
        url: url
      });
    });

    request.setTimeout(10000, () => {
      request.destroy();
      resolve({
        status: 'TIMEOUT',
        url: url
      });
    });
  });
}

// Function to validate robots.txt
function validateRobots(content) {
  const issues = [];
  const recommendations = [];

  // Check for User-agent *
  if (!content.includes('User-agent: *')) {
    issues.push('❌ ไม่มี User-agent: *');
    recommendations.push('✅ เพิ่ม User-agent: * สำหรับทุก bots');
  }

  // Check for Allow
  if (!content.includes('Allow:')) {
    issues.push('❌ ไม่มี Allow directive');
    recommendations.push('✅ เพิ่ม Allow: / สำหรับให้ bots เข้าถึงทุกหน้า');
  }

  // Check for Disallow
  if (!content.includes('Disallow:')) {
    recommendations.push('✅ เพิ่ม Disallow: สำหรับป้องกันหน้าที่ไม่ต้องการให้ index');
  }

  // Check for Sitemap
  if (!content.includes('Sitemap:')) {
    issues.push('❌ ไม่มี Sitemap reference');
    recommendations.push('✅ เพิ่ม Sitemap: https://phichaya.com/sitemap.xml');
  }

  // Check for Crawl-delay
  if (!content.includes('Crawl-delay')) {
    recommendations.push('✅ พิจารณาเพิ่ม Crawl-delay: 1 สำหรับจำกัดอัตราการ crawl');
  }

  return { issues, recommendations };
}

// Function to validate sitemap.xml
function validateSitemap(content) {
  const issues = [];
  const recommendations = [];

  // Check XML structure
  if (!content.includes('<?xml')) {
    issues.push('❌ ไม่มี XML declaration');
    recommendations.push('✅ เพิ่ม <?xml version="1.0" encoding="UTF-8"?>');
  }

  if (!content.includes('<urlset')) {
    issues.push('❌ ไม่มี <urlset> tag');
    recommendations.push('✅ เพิ่ม <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">');
  }

  if (!content.includes('</urlset>')) {
    issues.push('❌ ไม่มี </urlset> closing tag');
    recommendations.push('✅ เพิ่ม </urlset> closing tag');
  }

  // Count URLs
  const urlMatches = content.match(/<url>/g);
  const urlCount = urlMatches ? urlMatches.length : 0;
  
  if (urlCount === 0) {
    issues.push('❌ ไม่มี URLs ใน sitemap');
    recommendations.push('✅ เพิ่ม <url> entries สำหรับทุกหน้าที่ต้องการให้ index');
  }

  // Check for required elements
  if (!content.includes('<loc>')) {
    issues.push('❌ ไม่มี <loc> tags');
    recommendations.push('✅ เพิ่ม <loc> สำหรับ URL ของแต่ละหน้า');
  }

  if (!content.includes('<lastmod>')) {
    recommendations.push('✅ เพิ่ม <lastmod> สำหรับบอกวันที่แก้ไขล่าสุด');
  }

  if (!content.includes('<priority>')) {
    recommendations.push('✅ เพิ่ม <priority> สำหรับระบุความสำคัญของหน้า');
  }

  if (!content.includes('<changefreq>')) {
    recommendations.push('✅ เพิ่ม <changefreq> สำหรับบอกความถี่ในการอัปเดต');
  }

  return { issues, recommendations, urlCount };
}

// Main function
async function main() {
  console.log('🔍 ตรวจสอบ robots.txt และ sitemap.xml...\n');

  try {
    // Check robots.txt
    console.log('📄 ตรวจสอบ robots.txt');
    const robotsResponse = await checkUrl('https://phichaya.com/robots.txt');
    
    if (robotsResponse.status === 200) {
      console.log(`✅ robots.txt accessible (Status: ${robotsResponse.status})`);
      
      // Get robots.txt content
      const robotsContent = await new Promise((resolve) => {
        https.get('https://phichaya.com/robots.txt', (res) => {
          let data = '';
          res.on('data', (chunk) => data += chunk);
          res.on('end', () => resolve(data));
        });
      });

      const robotsValidation = validateRobots(robotsContent);
      
      console.log('\n📋 ผลการตรวจสอบ robots.txt:');
      if (robotsValidation.issues.length > 0) {
        robotsValidation.issues.forEach(issue => console.log(`   ${issue}`));
      }
      
      if (robotsValidation.recommendations.length > 0) {
        console.log('\n💡 คำแนะนำ robots.txt:');
        robotsValidation.recommendations.forEach(rec => console.log(`   ${rec}`));
      }
      
    } else {
      console.log(`❌ robots.txt ไม่สามารถเข้าถึงได้ (Status: ${robotsResponse.status})`);
    }

    console.log('\n' + '='.repeat(60) + '\n');

    // Check sitemap.xml
    console.log('🗺️ ตรวจสอบ sitemap.xml');
    const sitemapResponse = await checkUrl('https://phichaya.com/sitemap.xml');
    
    if (sitemapResponse.status === 200) {
      console.log(`✅ sitemap.xml accessible (Status: ${sitemapResponse.status})`);
      
      // Get sitemap.xml content
      const sitemapContent = await new Promise((resolve) => {
        https.get('https://phichaya.com/sitemap.xml', (res) => {
          let data = '';
          res.on('data', (chunk) => data += chunk);
          res.on('end', () => resolve(data));
        });
      });

      const sitemapValidation = validateSitemap(sitemapContent);
      
      console.log('\n📋 ผลการตรวจสอบ sitemap.xml:');
      console.log(`   📊 จำนวน URLs: ${sitemapValidation.urlCount}`);
      
      if (sitemapValidation.issues.length > 0) {
        sitemapValidation.issues.forEach(issue => console.log(`   ${issue}`));
      }
      
      if (sitemapValidation.recommendations.length > 0) {
        console.log('\n💡 คำแนะนำ sitemap.xml:');
        sitemapValidation.recommendations.forEach(rec => console.log(`   ${rec}`));
      }
      
    } else {
      console.log(`❌ sitemap.xml ไม่สามารถเข้าถึงได้ (Status: ${sitemapResponse.status})`);
    }

    console.log('\n' + '='.repeat(60) + '\n');

    // Check local files
    console.log('📁 ตรวจสอบไฟล์ใน project:');
    
    const fs = require('fs');
    const path = require('path');
    
    const robotsPath = path.join(__dirname, 'public', 'robots.txt');
    const sitemapPath = path.join(__dirname, 'public', 'sitemap.xml');
    
    if (fs.existsSync(robotsPath)) {
      console.log('✅ robots.txt มีอยู่ใน public folder');
    } else {
      console.log('❌ robots.txt ไม่มีใน public folder');
    }
    
    if (fs.existsSync(sitemapPath)) {
      console.log('✅ sitemap.xml มีอยู่ใน public folder');
    } else {
      console.log('❌ sitemap.xml ไม่มีใน public folder');
    }

    console.log('\n📈 สรุปผล:');
    console.log('   🔍 ตรวจสอบ robots.txt และ sitemap.xml เสร็จสิ้น');
    console.log('   🌐 ตรวจสอบ accessibility ที่ https://phichaya.com');
    console.log('   📁 ตรวจสอบไฟล์ใน project');

  } catch (error) {
    console.error('❌ เกิดข้อผิดพลาด:', error.message);
  }
}

// Run the check
main();
