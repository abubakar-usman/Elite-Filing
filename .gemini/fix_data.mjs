import { readFileSync, writeFileSync } from 'fs';

// 1. UPDATE INDUSTRIES
let industriesContent = readFileSync('lib/data/industries.ts', 'utf8');

const industryImages = {
  'ecommerce': 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2070&auto=format&fit=crop',
  'technology': 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop',
  'professional-services': 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop',
  'import-export': 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2070&auto=format&fit=crop',
  'real-estate': 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop',
  'financial-services': 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
  'healthcare': 'https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2070&auto=format&fit=crop',
  'fintech': 'https://images.unsplash.com/photo-1601597111158-2fceff292cdc?q=80&w=2070&auto=format&fit=crop',
  'logistics': 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?q=80&w=2070&auto=format&fit=crop',
  'manufacturing': 'https://images.unsplash.com/photo-1565514020179-026b92b2d701?q=80&w=2070&auto=format&fit=crop',
  'enterprise-technology': 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2070&auto=format&fit=crop',
  'enterprise-professional-services': 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop',
};

for (const [slug, img] of Object.entries(industryImages)) {
  const pattern = `slug: "${slug}",\n    title:`;
  if (industriesContent.includes(pattern)) {
    industriesContent = industriesContent.replace(
      pattern,
      `slug: "${slug}",\n    image: "${img}",\n    title:`
    );
    console.log(`✓ industries: ${slug}`);
  } else {
    console.log(`✗ industries: ${slug} NOT FOUND`);
  }
}

writeFileSync('lib/data/industries.ts', industriesContent);

// 2. UPDATE SERVICES
let servicesContent = readFileSync('lib/data/services.ts', 'utf8');

const serviceImages = {
  'company-formation': 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop',
  'tax-compliance': 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2070&auto=format&fit=crop',
  'trademark-ip': 'https://images.unsplash.com/photo-1629749168453-9f5b24bdfb77?q=80&w=2070&auto=format&fit=crop',
  'registered-agent': 'https://images.unsplash.com/photo-1570126618953-d437176e8c79?q=80&w=2070&auto=format&fit=crop',
  'banking-payments': 'https://images.unsplash.com/photo-1601597111158-2fceff292cdc?q=80&w=2070&auto=format&fit=crop',
  'accounting': 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop',
  'ecommerce-setup': 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2070&auto=format&fit=crop',
  'growth-marketing': 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=2074&auto=format&fit=crop',
  'business-consultancy': 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop',
  'corporate-advisory': 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop',
  'business-solutions': 'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop',
  'regulatory-compliance': 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=2070&auto=format&fit=crop',
  'digital-transformation': 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2070&auto=format&fit=crop',
  'growth-expansion': 'https://images.unsplash.com/photo-1512758117926-0e96472df342?q=80&w=2065&auto=format&fit=crop',
};

for (const [slug, img] of Object.entries(serviceImages)) {
  const pattern = `slug: "${slug}",\n    title:`;
  if (servicesContent.includes(pattern)) {
    servicesContent = servicesContent.replace(
      pattern,
      `slug: "${slug}",\n    image: "${img}",\n    title:`
    );
    console.log(`✓ services: ${slug}`);
  } else {
    console.log(`✗ services: ${slug} NOT FOUND`);
  }
}

writeFileSync('lib/data/services.ts', servicesContent);
console.log('\nDone!');
