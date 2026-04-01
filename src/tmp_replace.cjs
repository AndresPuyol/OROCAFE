const fs = require('fs');

const files = [
  'C:/Users/Imaginamos/Documents/orocafe-cacao-colombia/src/pages/Home.tsx',
  'C:/Users/Imaginamos/Documents/orocafe-cacao-colombia/src/pages/Sustainability.tsx',
  'C:/Users/Imaginamos/Documents/orocafe-cacao-colombia/src/pages/Products.tsx',
  'C:/Users/Imaginamos/Documents/orocafe-cacao-colombia/src/pages/Cooperative.tsx',
  'C:/Users/Imaginamos/Documents/orocafe-cacao-colombia/src/pages/Contact.tsx'
];

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  if (!content.includes('import SectionTitle')) {
    content = 'import SectionTitle from \'../components/SectionTitle\';\n' + content;
    content = content.replace(/<h2/g, '<SectionTitle');
    content = content.replace(/<\/h2>/g, '</SectionTitle>');
    fs.writeFileSync(file, content);
    console.log(`Updated ${file}`);
  }
});
