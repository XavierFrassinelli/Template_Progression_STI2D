# Guide des Extensions VSCode pour la Production de Cours STI2D

## 🎯 Objectif

Ce document explique les extensions installées dans VSCode pour optimiser la production de supports pédagogiques en STI2D (Sciences et Technologies de l'Industrie et du Développement Durable).

---

## 📦 Extensions Installées

### 1. **Quarto** (`quarto.quarto`)

#### Pourquoi ?
Quarto est l'outil principal pour créer des documents pédagogiques riches combinant texte, code, équations et visualisations.

#### Utilité pour STI2D :
- Créer des TP avec du code interactif (Python, JavaScript)
- Intégrer des schémas techniques et des graphiques
- Produire des documents PDF, HTML ou PowerPoint à partir d'une seule source
- Gérer des ressources multimédias (vidéos, animations)

#### Comment l'utiliser ?
- Créer un fichier `.qmd`
- Utiliser `Ctrl+Shift+P` → "Quarto: Preview" pour prévisualiser
- Clic droit → "Quarto: Render" pour générer le document final

---

### 2. **Markdown All in One** (`yzhang.markdown-all-in-one`)

#### Pourquoi ?
Facilite l'écriture en Markdown avec de nombreux raccourcis et automatisations.

#### Utilité pour STI2D :
- Créer rapidement des listes à puces pour des consignes
- Générer automatiquement des tables des matières
- Formater du texte sans quitter le clavier
- Prévisualiser en temps réel

#### Raccourcis utiles :
- `Ctrl+B` : **Gras**
- `Ctrl+I` : *Italique*
- `Ctrl+Shift+]` : Créer un titre
- `Alt+C` : Cocher/décocher une case dans une liste de tâches

---

### 3. **Markdown Preview Enhanced** (`shd101wyy.markdown-preview-enhanced`)

#### Pourquoi ?
Prévisualisation avancée avec support des diagrammes, équations mathématiques et exports multiples.

#### Utilité pour STI2D :
- Visualiser les équations LaTeX en temps réel
- Créer des diagrammes de flux, schémas fonctionnels (Mermaid, PlantUML)
- Exporter vers PDF avec mise en page professionnelle
- Intégrer des graphiques scientifiques

#### Comment l'utiliser ?
- Clic droit dans un fichier Markdown → "Markdown Preview Enhanced: Open Preview"
- Les équations entre `$$` s'affichent automatiquement
- Les diagrammes en code se transforment en images

---

### 4. **Paste Image** (`mushan.vscode-paste-image`)

#### Pourquoi ?
Insérer des images dans vos documents en un clic depuis le presse-papiers.

#### Utilité pour STI2D :
- Capturer un schéma depuis un logiciel de CAO et l'insérer directement
- Ajouter des photos de maquettes ou prototypes
- Intégrer des captures d'écran de simulations
- Gagner un temps considérable

#### Comment l'utiliser ?
1. Copier une image (capture d'écran, photo...)
2. Dans votre fichier Markdown/Quarto : `Ctrl+Alt+V`
3. L'image est automatiquement sauvegardée et le lien inséré

---

### 5. **LaTeX Workshop** (`James-Yu.latex-workshop`)

#### Pourquoi ?
Pour créer des documents scientifiques et techniques avancés avec LaTeX.

#### Utilité pour STI2D :
- Rédiger des évaluations avec mise en page professionnelle
- Créer des fiches de révision avec équations complexes
- Produire des schémas techniques avec TikZ
- Générer des documents conformes aux normes académiques

#### Comment l'utiliser ?
- Créer un fichier `.tex`
- L'extension compile automatiquement à chaque sauvegarde
- Prévisualisation PDF intégrée
- Autocomplétion des commandes LaTeX

---

### 6. **Draw.io Integration** (`hediet.vscode-drawio`)

#### Pourquoi ?
Créer des schémas techniques directement dans VSCode sans logiciel externe.

#### Utilité pour STI2D :
- Dessiner des schémas fonctionnels (FAST, SADT)
- Créer des diagrammes de chaînes d'information/d'énergie
- Illustrer des circuits électriques ou pneumatiques
- Produire des organigrammes pour les algorithmes

#### Comment l'utiliser ?
1. Créer un fichier `.drawio` ou `.drawio.svg`
2. Double-cliquer pour ouvrir l'éditeur graphique
3. Les modifications sont sauvegardées automatiquement
4. Export facile en PNG/SVG pour intégration dans vos cours

---

### 7. **Project Manager** (`alefragnani.project-manager`)

#### Pourquoi ?
Gérer facilement plusieurs progressions, classes et années.

#### Utilité pour STI2D :
- Basculer rapidement entre différentes progressions (2I2D, IT, EE, AC...)
- Conserver l'historique de vos projets pédagogiques
- Ouvrir plusieurs espaces de travail simultanément
- Organiser par niveau (Première/Terminale) ou par thème

#### Comment l'utiliser ?
- `Ctrl+Shift+P` → "Project Manager: Save Project"
- Icône Project Manager dans la barre latérale
- Cliquer sur un projet pour y accéder instantanément

---

### 8. **TODO Highlight** (`wayou.vscode-todo-highlight`)

#### Pourquoi ?
Mettre en évidence les tâches en cours dans vos documents.

#### Utilité pour STI2D :
- Marquer les sections de cours à compléter
- Identifier les exercices à corriger
- Repérer les ressources à ajouter
- Suivre l'avancement de vos progressions

#### Marqueurs disponibles :
- `TODO:` → Points à faire
- `FIXME:` → Corrections nécessaires
- `NOTE:` → Remarques importantes
- `ATTENTION:` → Points de vigilance

---

### 9. **Code Spell Checker** + **French** (`streetsidesoftware.code-spell-checker`)

#### Pourquoi ?
Vérification orthographique en français dans tous vos documents.

#### Utilité pour STI2D :
- Éviter les fautes dans les supports élèves
- Vérifier les consignes et corrections
- Maintenir une qualité professionnelle
- Inclut le vocabulaire technique

#### Comment l'utiliser ?
- Les mots mal orthographiés sont soulignés en bleu
- Clic droit → Suggestions de correction
- Ajouter des mots techniques au dictionnaire personnel

---

### 10. **Path Intellisense** (`christian-kohler.path-intellisense`)

#### Pourquoi ?
Autocomplétion intelligente des chemins de fichiers.

#### Utilité pour STI2D :
- Lier facilement des ressources (images, PDF, vidéos)
- Éviter les erreurs de chemin
- Référencer des fichiers de corrigés ou d'exercices
- Naviguer rapidement dans les répertoires

#### Comment l'utiliser ?
- Taper `./` ou `../` dans un lien
- Les chemins disponibles s'affichent automatiquement
- Sélectionner avec les flèches et valider avec Entrée

---

### 11. **File Utils** (`sleistner.vscode-fileutils`)

#### Pourquoi ?
Manipuler les fichiers rapidement sans quitter l'éditeur.

#### Utilité pour STI2D :
- Renommer des séquences ou des TP
- Dupliquer un template pour créer une nouvelle activité
- Déplacer des ressources entre dossiers
- Supprimer proprement des fichiers obsolètes

#### Comment l'utiliser ?
- `Ctrl+Shift+P` → "File: "
  - "Duplicate File" : Dupliquer
  - "Move File" : Déplacer
  - "Rename File" : Renommer
  - "Delete File" : Supprimer

---

### 12. **Better Comments** (`aaron-bond.better-comments`)

#### Pourquoi ?
Organiser vos notes et commentaires avec des couleurs.

#### Utilité pour STI2D :
- Annoter les documents sources avec des codes couleur
- Distinguer les remarques pour les élèves des notes personnelles
- Hiérarchiser les informations
- Améliorer la lisibilité du code dans les TP

#### Types de commentaires :
```markdown
<!-- ! Attention importante -->
<!-- ? Question à développer -->
<!-- TODO: À faire -->
<!-- * Information importante -->
```

---

## ⚙️ Configuration Recommandée

Ajouter dans vos paramètres VSCode (`Ctrl+,` ou File > Preferences > Settings) :

### Sauvegarde automatique
- Rechercher "Auto Save"
- Choisir "afterDelay"
- Délai : 5000ms (5 secondes)

### Prévisualisation Markdown
- "Markdown > Preview: Breaks" → ☑️ Activé
- "Markdown > Preview: Font Size" → 14

### Correcteur orthographique
- "CSpell: Language" → Ajouter "fr" et "fr-FR"
- "CSpell: Enabled Language Ids" → Inclure "markdown", "quarto"

---

## 🚀 Workflow Recommandé

### Pour créer un nouveau TP :

1. **Dupliquer** un template avec File Utils
2. **Renommer** le fichier
3. **Écrire** le contenu en Markdown/Quarto
4. **Insérer** des images avec Paste Image (`Ctrl+Alt+V`)
5. **Créer** des schémas avec Draw.io si nécessaire
6. **Prévisualiser** avec Quarto Preview
7. **Corriger** l'orthographe avec Code Spell Checker
8. **Générer** le PDF/HTML final avec Quarto Render

### Pour gérer plusieurs progressions :

1. **Sauvegarder** chaque progression comme projet avec Project Manager
2. **Basculer** entre projets selon les besoins
3. **Marquer** les TODO pour suivre l'avancement
4. **Organiser** les fichiers avec File Utils

---

## 📚 Ressources Complémentaires

- [Documentation Quarto](https://quarto.org/docs/guide/)
- [Guide Markdown](https://www.markdownguide.org/)
- [Syntaxe Mermaid (diagrammes)](https://mermaid.js.org/)
- [LaTeX Wikibook](https://en.wikibooks.org/wiki/LaTeX)

---

## 💡 Astuces

- **Raccourci universel** : `Ctrl+Shift+P` ouvre la palette de commandes (accès à toutes les fonctionnalités)
- **Multi-curseurs** : `Alt+Clic` pour éditer plusieurs lignes simultanément
- **Rechercher/Remplacer** : `Ctrl+H` pour modifier rapidement du texte répété
- **Zen Mode** : `Ctrl+K Z` pour se concentrer sans distraction

---

**Dernière mise à jour** : 11 février 2026
**Auteur** : Configuration VSCode pour enseignement STI2D
