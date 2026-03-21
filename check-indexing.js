const https = require('https');

// Function to check Google indexing status
async function checkGoogleIndexing(url) {
  return new Promise((resolve) => {
    // Check if page is accessible
    const request = https.get(url, (response) => {
      let data = '';
      response.on('data', (chunk) => data += chunk);
      response.on('end', () => {
        resolve({
          url: url,
          status: response.statusCode,
          headers: response.headers,
          content: data.substring(0, 5000) // First 5KB
        });
      });
    });

    request.on('error', (error) => {
      resolve({
        url: url,
        status: 'ERROR',
        error: error.message
      });
    });

    request.setTimeout(10000, () => {
      request.destroy();
      resolve({
        url: url,
        status: 'TIMEOUT'
      });
    });
  });
}

// Function to analyze page for indexing issues
function analyzeIndexingIssues(pageData) {
  const issues = [];
  const recommendations = [];

  // Check status code
  if (pageData.status !== 200) {
    issues.push(`❌ HTTP Status: ${pageData.status} (ควรเป็น 200)`);
    recommendations.push('✅ แก้ไขให้หน้าแสดงผลได้ปกติ');
  }

  // Check content
  if (!pageData.content) {
    issues.push('❌ ไม่มีเนื้อหาในหน้า');
    recommendations.push('✅ เพิ่มเนื้อหาในหน้า');
  }

  // Check for noindex meta tag
  if (pageData.content.includes('noindex')) {
    issues.push('❌ พบ noindex meta tag');
    recommendations.push('✅ ลบหรือแก้ไข noindex meta tag');
  }

  // Check for canonical issues
  if (!pageData.content.includes('canonical')) {
    recommendations.push('✅ เพิ่ม canonical URL');
  }

  // Check for title
  if (!pageData.content.includes('<title>') || !pageData.content.match(/<title[^>]*>([^<]+)<\/title>/)) {
    issues.push('❌ ไม่มี title tag');
    recommendations.push('✅ เพิ่ม title tag');
  }

  // Check for description
  if (!pageData.content.includes('description') || !pageData.content.includes('name="description"')) {
    issues.push('❌ ไม่มี meta description');
    recommendations.push('✅ เพิ่ม meta description');
  }

  // Check for structured data
  if (!pageData.content.includes('application/ld+json')) {
    recommendations.push('✅ เพิ่ม structured data (JSON-LD)');
  }

  // Check for robots.txt blocking
  if (pageData.content.includes('robots.txt') && pageData.content.includes('Disallow')) {
    recommendations.push('✅ ตรวจสอบว่า robots.txt ไม่ได้บล็อคหน้านี้');
  }

  // Check for JavaScript rendering issues
  if (pageData.content.includes('react') || pageData.content.includes('next')) {
    recommendations.push('✅ ตรวจสอบว่าหน้าถูก render ถูกต้อง (SSR/SSG)');
  }

  // Check for duplicate content
  if (pageData.content.includes('rel="canonical"') && pageData.content.match(/rel="canonical"[^>]*href="([^"]+)"/)) {
    const canonical = pageData.content.match(/rel="canonical"[^>]*href="([^"]+)"/)[1];
    if (canonical !== pageData.url) {
      recommendations.push(`✅ ตรวจสอบ canonical URL: ${canonical}`);
    }
  }

  return { issues, recommendations };
}

// Function to check specific pages
async function checkPages() {
  console.log('🔍 ตรวจสอบสถานะการ Index...\n');

  const pages = [
    'https://phichaya.com/',
    'https://phichaya.com/about',
    'https://phichaya.com/blog',
    'https://phichaya.com/portfolio/gallery',
    'https://phichaya.com/portfolio/recruitment-solution',
    'https://phichaya.com/portfolio/training-game',
    'https://phichaya.com/faq',
    'https://phichaya.com/privacy-policy',
    'https://phichaya.com/terms-of-use'
  ];

  const results = [];

  for (const page of pages) {
    console.log(`📄 ตรวจสอบ: ${page}`);
    
    const pageData = await checkGoogleIndexing(page);
    const analysis = analyzeIndexingIssues(pageData);
    
    results.push({
      page: page,
      status: pageData.status,
      issues: analysis.issues,
      recommendations: analysis.recommendations
    });

    console.log(`   Status: ${pageData.status}`);
    
    if (analysis.issues.length > 0) {
      console.log('   🔴 ปัญหา:');
      analysis.issues.forEach(issue => console.log(`      ${issue}`));
    }
    
    if (analysis.recommendations.length > 0) {
      console.log('   💡 คำแนะนำ:');
      analysis.recommendations.forEach(rec => console.log(`      ${rec}`));
    }
    
    console.log('');
  }

  // Summary
  console.log('📊 สรุปผลการตรวจสอบ:');
  console.log('=' .repeat(50));
  
  let totalIssues = 0;
  let totalRecommendations = 0;
  
  results.forEach(result => {
    console.log(`\n📄 ${result.page}`);
    console.log(`   Status: ${result.status}`);
    console.log(`   ปัญหา: ${result.issues.length} ข้อ`);
    console.log(`   คำแนะนำ: ${result.recommendations.length} ข้อ`);
    
    totalIssues += result.issues.length;
    totalRecommendations += result.recommendations.length;
  });
  
  console.log('\n' + '=' .repeat(50));
  console.log(`📈 สรุปทั้งหมด:`);
  console.log(`   🔴 ปัญหาทั้งหมด: ${totalIssues} ข้อ`);
  console.log(`   💡 คำแนะนำทั้งหมด: ${totalRecommendations} ข้อ`);
  
  if (totalIssues > 0) {
    console.log('\n⚠️  มีปัญหาที่ต้องแก้ไขก่อนจะถูก index');
  } else {
    console.log('\n✅ ทุกหน้าพร้อมสำหรับการ index');
  }

  // Check robots.txt and sitemap
  console.log('\n🔍 ตรวจสอบ robots.txt และ sitemap...');
  
  try {
    const robotsResponse = await checkGoogleIndexing('https://phichaya.com/robots.txt');
    const sitemapResponse = await checkGoogleIndexing('https://phichaya.com/sitemap.xml');
    
    console.log(`   robots.txt: ${robotsResponse.status === 200 ? '✅' : '❌'} (${robotsResponse.status})`);
    console.log(`   sitemap.xml: ${sitemapResponse.status === 200 ? '✅' : '❌'} (${sitemapResponse.status})`);
  } catch (error) {
    console.log(`   ❌ ไม่สามารถตรวจสอบ robots.txt/sitemap: ${error.message}`);
  }
}

// Run the check
checkPages().catch(console.error);
