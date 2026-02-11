const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const SOURCES_DIR = path.join(ROOT, '_imports/Progression-STI2D-2025/docs');
const CONTENT_DIR = path.join(ROOT, 'content');

// Mapping : fichiers source → destination avec transformations
const MIGRATION_MAP = [
  {
    source: 'premiere_bras.md',
    dest: 'activites/premiere/bras-manipulateur.md',
    title: 'Bras manipulateur - Projet Première'
  },
  {
    source: 'premiere_maison.md',
    dest: 'activites/premiere/maison-positive.md',
    title: 'Maison positive - Projet Première'
  },
  {
    source: 'premiere_robobrole.md',
    dest: 'activites/premiere/robobrole.md',
    title: 'RoboBrole - Projet Première'
  },
  {
    source: 'premiere_competence.md',
    dest: 'ressources/premiere/competences-projet.md',
    title: 'Compétences - Projets Première'
  },
  {
    source: 'premiere_mind_map.md',
    dest: 'ressources/premiere/mind-map.md',
    title: 'Carte mentale Première'
  },
  {
    source: 'comp_statut.html',
    dest: 'ressources/premiere/comp-statut.html',
    title: 'Statut des compétences'
  }
];

function fixAssetPaths(content) {
  // Remplacer les chemins cassés d'images
  content = content.replace(/\/Progression-STI2D-2025\/assets\//g, '/assets/imports/2025/');
  return content;
}

function convertMaterialTabs(content) {
  // Convertir === "Title" en HTML simple avec details/summary
  // C'est une approximation simple pour les tabs
  const tabRegex = /=== "([^"]+)"/g;
  let converted = content.replace(tabRegex, (match, title) => {
    return `## ${title}`;
  });
  return converted;
}

function fixHtmlIndentation(content) {
  // Dés-indenter les blocs HTML qui sont à l'intérieur de listes
  // Cela empêche Markdown de les traiter comme du code
  const lines = content.split('\n');
  const fixed = lines.map(line => {
    // Si ligne a 4+ espaces et commence par <, retirer les espaces
    if (/^    </.test(line)) {
      return line.replace(/^    /, '');
    }
    return line;
  }).join('\n');
  return fixed;
}

function migrateFile(mapping) {
  const sourcePath = path.join(SOURCES_DIR, mapping.source);
  if (!fs.existsSync(sourcePath)) {
    console.warn(`⚠️  Source not found: ${mapping.source}`);
    return false;
  }

  const destPath = path.join(CONTENT_DIR, mapping.dest);
  const destDir = path.dirname(destPath);

  // Créer le dossier destination
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
  }

  // Lire le contenu source
  let content = fs.readFileSync(sourcePath, 'utf8');

  // Transformer le contenu
  content = fixAssetPaths(content);
  content = convertMaterialTabs(content);
  content = fixHtmlIndentation(content);

  // Pour les fichiers HTML, les copier directement
  if (mapping.dest.endsWith('.html')) {
    fs.copyFileSync(sourcePath, destPath);
    console.log(`✅ Copied HTML: ${mapping.dest}`);
    return true;
  }

  // Ajouter le frontmatter si absent
  if (!content.startsWith('---')) {
    content = `---
title: "${mapping.title}"
source: "Progression-STI2D-2025/docs/${mapping.source}"
---

${content}`;
  }

  // Écrire le fichier migré
  fs.writeFileSync(destPath, content, 'utf8');
  console.log(`✅ Migrated: ${mapping.dest}`);
  return true;
}

function main() {
  console.log('🔄 Migrating missing content from Progression-STI2D-2025...\n');
  
  if (!fs.existsSync(SOURCES_DIR)) {
    console.error(`❌ Source directory not found: ${SOURCES_DIR}`);
    process.exit(1);
  }

  let migratedCount = 0;
  MIGRATION_MAP.forEach(mapping => {
    if (migrateFile(mapping)) {
      migratedCount++;
    }
  });

  console.log(`\n✅ Migration complete: ${migratedCount}/${MIGRATION_MAP.length} files migrated`);
}

main();
