const fs = require('fs');
const path = require('path');

const CONTENT_DIR = path.resolve(__dirname, '..', 'content');

function fixHtmlIndentation(content) {
  // Dés-indenter les blocs HTML qui sont à l'intérieur de listes
  const lines = content.split('\n');
  const fixed = lines.map(line => {
    // Si ligne a 4+ espaces ET commence par <, retirer 4 espaces
    // Mais ne pas toucher les vraies indentations obligatoires
    if (/^        </.test(line)) {  // 8 espaces (2 niveaux de liste)
      return line.replace(/^    /, '');
    }
    if (/^    </.test(line)) {  // 4 espaces (1 niveau)
      return line.replace(/^    /, '');
    }
    return line;
  }).join('\n');
  return fixed;
}

function fixAssetPaths(content) {
  // Remplacer les chemins cassés d'images
  content = content.replace(/\/Progression-STI2D-2025\/assets\//g, '/assets/imports/2025/');
  return content;
}

function convertMaterialTabs(content) {
  // Convertir === "Title" en ## Title (headers)
  const tabRegex = /=== "([^"]+)"/g;
  return content.replace(tabRegex, (match, title) => `## ${title}`);
}

function fixMarkdownFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  const original = content;

  content = fixHtmlIndentation(content);
  content = fixAssetPaths(content);
  content = convertMaterialTabs(content);

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    return true;
  }
  return false;
}

function walkDir(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      results = results.concat(walkDir(filePath));
    } else if (file.endsWith('.md')) {
      results.push(filePath);
    }
  });
  return results;
}

function main() {
  console.log('🔧 Fixing HTML indentation and asset paths in all MD files...\n');

  const mdFiles = walkDir(CONTENT_DIR);
  let fixedCount = 0;

  mdFiles.forEach(file => {
    if (fixMarkdownFile(file)) {
      console.log(`✅ Fixed: ${path.relative(CONTENT_DIR, file)}`);
      fixedCount++;
    }
  });

  console.log(`\n✅ Complete: ${fixedCount}/${mdFiles.length} files fixed`);
}

main();
