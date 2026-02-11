const fs = require('fs');
const path = require('path');

const CONTENT_DIR = path.resolve(__dirname, '..', 'content');

function unindentHTML(content) {
  // Regex pour trouver les blocs <div> indentés et les dés-indenter
  // Pattern : cherche les lignes qui commencent par des espaces + <tag
  const lines = content.split('\n');
  const result = [];
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    // Si la ligne commence par 4+ espaces ET contient du HTML
    if (/^    </.test(line)) {
      // Retirer les 4 espaces
      result.push(line.replace(/^    /, ''));
    } else if (/^        </.test(line)) {
      // Retirer les 8 espaces
      result.push(line.replace(/^        /, ''));
    } else {
      result.push(line);
    }
  }
  
  return result.join('\n');
}

function processMarkdownFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  const original = content;
  
  content = unindentHTML(content);
  
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
  console.log('🧹 Cleaning HTML indentation in all MD files...\n');

  const mdFiles = walkDir(CONTENT_DIR);
  let fixedCount = 0;

  mdFiles.forEach(file => {
    if (processMarkdownFile(file)) {
      console.log(`✅ Cleaned: ${path.relative(CONTENT_DIR, file)}`);
      fixedCount++;
    }
  });

  console.log(`\n✅ Complete: ${fixedCount}/${mdFiles.length} files cleaned`);
}

main();
