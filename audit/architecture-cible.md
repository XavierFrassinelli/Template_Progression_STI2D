# Architecture Cible — Template STI2D Master

**Date :** 11 février 2026  
**Version :** 1.0.0-alpha  
**Principes :** Simplicité, Modularité, Scalabilité

---

## 🎯 Vision Globale

Template **clé en main** permettant à tout enseignant STI2D de :

1. **Démarrer** une nouvelle progression en < 30min
2. **Ajouter** du contenu facilement (Markdown)
3. **Publier** automatiquement (GitHub Pages)
4. **Suivre** la progression élèves (apps interactives)
5. **Réutiliser** d'année en année

---

## 📐 Principes de Design

### 1. **Séparation des Préoccupations**

```
┌─────────────────────────────────────┐
│  CONTENUS (Markdown)                │  ← Enseignants éditent ici
│  - Objectifs, compétences, TP       │
│  - Ressources, fiches               │
└─────────────────────────────────────┘
         ↓ Build Pipeline
┌─────────────────────────────────────┐
│  PRÉSENTATION (HTML/CSS)            │  ← Templates réutilisables
│  - Layout, header, footer           │
└─────────────────────────────────────┘
         ↓ Déploiement
┌─────────────────────────────────────┐
│  APPLICATIONS (JS + Supabase)       │  ← Interactivité
│  - Jauge compétences, quiz          │
└─────────────────────────────────────┘
```

### 2. **Configuration Over Hard-Coding**

Tout ce qui varie d'une progression à l'autre :

```yaml
# config/progression.yml
annee_scolaire: "2026-27"
etablissement: "Lycée Victor Hugo"
enseignant: "M. Xavier"
email_contact: "xavier@lycee.fr"
classes:
  - nom: "1STI2D-1"
    effectif: 24
    specialites: ["2I2D", "IT"]
  - nom: "TSTI2D-2"
    effectif: 18
    specialites: ["EE", "AC"]
branding:
  logo: "assets/logos/logo-lycee.png"
  couleur_primaire: "#0066CC"
  couleur_secondaire: "#FF6600"
```

→ Variables injectées automatiquement dans templates

### 3. **Markdown-First**

- **Tout le contenu** en Markdown (lisible, éditable, versionnable)
- **Frontmatter YAML** pour métadonnées
- **Build automatique** → HTML
- **Quarto** pour documents avancés (équations, code)

### 4. **Progressive Enhancement**

- **Niveau 1 :** Site statique (fonctionne partout)
- **Niveau 2 :** Apps JavaScript (si JS activé)
- **Niveau 3 :** Supabase sync (si online)
- **Niveau 4 :** LocalStorage fallback (si offline)

---

## 🗂️ Architecture des Dossiers

```
Progression_STI2D_Template/
│
├── 📋 audit/                           # Phase A (peut être supprimé après)
│   ├── inventaire-projet-actuel.md
│   ├── inventaire-depot-public.md
│   ├── matrice-decisions.md
│   └── architecture-cible.md           # Ce fichier
│
├── 📘 documentation/                   # Guides utilisateurs
│   ├── README.md                       # Index documentation
│   ├── GUIDE_DEMARRAGE.md              # Quick start (30min)
│   ├── GUIDE_CONTRIBUTION.md           # Ajouter contenus
│   ├── GUIDE_DEPLOYMENT.md             # Publier sur GH Pages
│   ├── GUIDE_APPLICATIONS.md           # Setup Supabase
│   ├── ARCHITECTURE.md                 # Tech stack (ce fichier)
│   ├── FAQ.md                          # Questions fréquentes
│   └── CHANGELOG.md                    # Versions
│
├── 🎯 config/                          # Configuration globale
│   ├── progression.yml                 # Méta-données (année, prof, classes)
│   ├── competences.json                # Référentiel BO complet
│   ├── build-config.js                 # Options build
│   └── supabase-config.example.js      # Template config Supabase
│
├── 📝 content/                         # Contenus Markdown
│   ├── index.md                        # Page d'accueil
│   │
│   ├── objectifs/                      # 7 objectifs BO
│   │   ├── O1.md                       # Caractériser
│   │   ├── O2.md                       # Identifier
│   │   ├── O3.md                       # Analyser
│   │   ├── O4.md                       # Communiquer
│   │   ├── O5.md                       # Expérimenter
│   │   ├── O6.md                       # Concevoir
│   │   └── O7.md                       # Respecter contraintes
│   │
│   ├── competences/                    # Compétences détaillées
│   │   ├── CO1.1.md
│   │   ├── CO1.2.md
│   │   ├── ...
│   │   └── CO7.2.md
│   │
│   ├── activites/                      # TP/TD/Projets
│   │   ├── TP_O1_Caracteriser_Produit.md
│   │   ├── TP_O2_Analyse_Marche.md
│   │   ├── TP_O3_Modelisation_3D.md
│   │   ├── TD_O4_Communication_EN.md
│   │   ├── Projet_O5_Banc_Essais.md
│   │   └── ...
│   │
│   ├── ressources/                     # Ressources complémentaires
│   │   ├── videos/
│   │   │   ├── index.md               # Liste vidéos
│   │   │   └── tutos/
│   │   ├── quiz/
│   │   │   ├── Quiz_O1.md
│   │   │   └── ...
│   │   ├── liens-utiles.md
│   │   └── bibliographie.md
│   │
│   └── fiches-eleves/                  # Templates élèves
│       ├── Fiche_Analyse_Produit.md
│       ├── Fiche_Journal_Projet.md
│       ├── Fiche_Protocole_Essais.md
│       ├── Fiche_Rapport_TP.md
│       └── Fiche_Revue_Projet.md
│
├── 🎓 pedagogie/                       # PRIVÉ (gitignored)
│   ├── .gitkeep                        # Force dossier vide dans Git
│   ├── README.md                       # Avertissement confidentialité
│   │
│   ├── plans-seance/                   # Préparations cours
│   │   ├── Sequence_01.md
│   │   └── ...
│   │
│   ├── evaluations/                    # Contrôles, examens
│   │   ├── DS_O1_Caracterisation.pdf
│   │   ├── Grille_Eval_Projet.xlsx
│   │   └── ...
│   │
│   ├── coriges/                        # Solutions TP
│   │   ├── Corrige_TP_O1.md
│   │   └── ...
│   │
│   ├── ressources-prof/                # Slides, docs prof
│   │   ├── Slides_Sequence_01.pptx
│   │   └── ...
│   │
│   └── templates-quarto/               # Templates documents
│       ├── _quarto.yml                 # Config Quarto globale
│       ├── latex-header.tex            # Headers LaTeX
│       ├── template-2i2d.qmd           # Spécialité 2I2D
│       ├── template-i2d.qmd            # Innovation
│       ├── template-it.qmd             # IT
│       ├── template-ee.qmd             # EE (à créer)
│       ├── template-ac.qmd             # AC (à créer)
│       └── assets/logos/
│
├── 🚀 apps/                            # Applications interactives
│   ├── shared/                         # Composants communs
│   │   ├── supabase-client.js          # Client Supabase
│   │   ├── auth.js                     # Authentification
│   │   ├── utils.js                    # Fonctions utilitaires
│   │   └── styles.css                  # Styles communs
│   │
│   ├── jauge-competences/              # Suivi progression
│   │   ├── index.html
│   │   ├── jauge.js                    # Logique jauge
│   │   ├── styles.css
│   │   ├── README.md                   # Doc installation
│   │   └── database/
│   │       └── schema.sql              # Schéma Supabase
│   │
│   ├── quiz/                           # Quiz interactifs
│   │   ├── index.html
│   │   ├── quiz-engine.js              # Moteur quiz
│   │   ├── quiz-data.json              # Questions
│   │   ├── styles.css
│   │   └── database/
│   │       └── schema.sql
│   │
│   └── [futures-apps]/                 # Extensions futures
│
├── 🎨 assets/                          # Médias statiques
│   ├── logos/
│   │   ├── logo-lycee.png
│   │   ├── logo-sti2d.svg
│   │   └── favicon.ico
│   │
│   ├── images/                         # Images contenus
│   │   ├── objectifs/
│   │   ├── tp/
│   │   └── schemas/
│   │
│   ├── videos/                         # Vidéos locales (si petites)
│   │   └── tutos/
│   │
│   ├── docs/                           # PDFs, docs
│   │   ├── BO_STI2D.pdf
│   │   └── normes/
│   │
│   └── fonts/                          # Polices custom (optionnel)
│
├── 🔧 scripts/                         # Automation
│   ├── build.js                        # Build Markdown → HTML
│   ├── watch.js                        # Dev server + hot reload
│   ├── deploy.js                       # Déploiement GH Pages
│   ├── migrate-firebase.js             # Migration Firebase → Supabase
│   ├── init-progression.js             # CLI nouvelle progression
│   ├── generate-competences.js         # Parser BO.txt → JSON
│   ├── check-links.js                  # Vérifier liens cassés
│   └── optimize-images.js              # Compression images
│
├── 🌐 templates/                       # Templates HTML
│   ├── layout.html                     # Structure page
│   ├── header.html                     # Navigation
│   ├── footer.html                     # Footer
│   ├── card-objectif.html              # Composant objectif
│   ├── card-competence.html            # Composant compétence
│   └── partials/                       # Fragments réutilisables
│       ├── breadcrumb.html
│       └── sidebar.html
│
├── 📦 docs/                            # OUTPUT build (GH Pages)
│   ├── index.html                      # (généré)
│   ├── objectifs/                      # (généré)
│   ├── competences/                    # (généré)
│   ├── activites/                      # (généré)
│   ├── ressources/                     # (généré)
│   ├── fiches-eleves/                  # (généré)
│   ├── apps/                           # (copié)
│   ├── assets/                         # (copié + optimisé)
│   └── CNAME                           # Domaine custom (optionnel)
│
├── .github/                            # CI/CD GitHub Actions
│   └── workflows/
│       ├── build-and-deploy.yml        # Auto-déploiement
│       └── check-links.yml             # Vérif liens hebdo
│
├── .gitignore                          # Fichiers ignorés
├── .editorconfig                       # Config éditeur
├── package.json                        # Dépendances NPM
├── package-lock.json                   # Versions lockées
├── LICENSE                             # Licence (MIT ?)
└── README.md                           # Documentation principale
```

---

## 🔌 Stack Technique Détaillée

### Frontend — Génération Statique

```javascript
// scripts/build.js - Pipeline de build

1. Lire config/progression.yml
   ↓
2. Parser tous les .md de content/
   ↓ (gray-matter pour frontmatter)
3. Convertir Markdown → HTML
   ↓ (markdown-it + plugins)
4. Injecter dans templates/
   ↓ (remplacement variables {{var}})
5. Copier assets + apps
   ↓ (optimisation images)
6. Générer docs/
   ↓
7. ✅ Site prêt pour GH Pages
```

**Dépendances :**
```json
{
  "dependencies": {
    "gray-matter": "^4.0.3",
    "markdown-it": "^14.0.0",
    "markdown-it-anchor": "^8.6.7",
    "markdown-it-toc-done-right": "^4.2.0",
    "js-yaml": "^4.1.0",
    "cheerio": "^1.0.0-rc.12",
    "sharp": "^0.33.0"
  },
  "devDependencies": {
    "http-server": "^14.1.1",
    "chokidar": "^3.5.3"
  }
}
```

### Backend — Base de Données

**Supabase (PostgreSQL)**

```sql
-- Schema complet

-- Table users (élèves)
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  code_eleve TEXT UNIQUE NOT NULL,  -- "2026-001"
  nom TEXT,
  prenom TEXT,
  classe TEXT,  -- "1STI2D-1"
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Table competence_progress
CREATE TABLE competence_progress (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  competence_id TEXT NOT NULL,  -- "CO1.1"
  check_count INT DEFAULT 0 CHECK (check_count BETWEEN 0 AND 3),
  last_updated TIMESTAMPTZ DEFAULT now(),
  notes TEXT,  -- Commentaires élève
  CONSTRAINT unique_user_comp UNIQUE(user_id, competence_id)
);

-- Table quiz_results
CREATE TABLE quiz_results (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  quiz_id TEXT NOT NULL,  -- "Quiz_O1"
  score INT NOT NULL,
  max_score INT NOT NULL,
  time_spent INT,  -- secondes
  answers JSONB,  -- Détails réponses
  completed_at TIMESTAMPTZ DEFAULT now()
);

-- Row Level Security
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE competence_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE quiz_results ENABLE ROW LEVEL SECURITY;

-- Policies (élèves ne voient que leurs données)
CREATE POLICY "Users see own data" ON users
  USING (code_eleve = current_setting('app.code_eleve', true));

CREATE POLICY "Users see own progress" ON competence_progress
  USING (user_id IN (
    SELECT id FROM users WHERE code_eleve = current_setting('app.code_eleve', true)
  ));

CREATE POLICY "Users see own results" ON quiz_results
  USING (user_id IN (
    SELECT id FROM users WHERE code_eleve = current_setting('app.code_eleve', true)
  ));
```

### Applications — Architecture

```
apps/jauge-competences/
├── index.html              # UI principale
├── jauge.js                # Logique métier
│   ├── initGauge()
│   ├── onCheckboxChange()
│   ├── syncToSupabase()
│   ├── updateGaugeVisual()
│   └── calculateGlobalProgress()
├── styles.css              # Design jauge
└── database/
    └── schema.sql          # À importer dans Supabase
```

**Flux de données :**

```
User coche checkbox
    ↓
Event listener (jauge.js)
    ↓
Check LocalStorage (offline ?)
    ↓
    ├── Online → Supabase API
    │       ↓
    │   UPDATE competence_progress SET check_count = X
    │       ↓
    │   Réponse Supabase
    │       ↓
    │   Sync LocalStorage
    │
    └── Offline → LocalStorage only
            ↓
        Queue pour sync ultérieur
    ↓
Recalculer % global
    ↓
Animer jauge (couleur + largeur)
```

---

## 🔐 Sécurité & RGPD

### Données Élèves

- **Anonymisation :** Codes élèves (pas de noms si possible)
- **Chiffrement :** HTTPS obligatoire (GH Pages + Supabase)
- **RLS :** Row Level Security Supabase (isolation données)
- **Pas d'email :** Auth simple par code fourni par prof
- **Export :** Fonctionnalité export données perso (RGPD)

### Fichiers Sensibles

```gitignore
# .gitignore
pedagogie/plans-seance/
pedagogie/evaluations/
pedagogie/coriges/
pedagogie/ressources-prof/

config/supabase-config.js
.env
.env.local

*.key
*.pem
```

---

## 🚀 Déploiement

### Option 1 : GitHub Pages (Recommandée)

```yaml
# .github/workflows/build-and-deploy.yml
name: Build and Deploy

on:
  push:
    branches: [main]

jobs:
  build-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
      - run: npm ci
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./docs
```

**Setup :**
1. Push vers GitHub
2. Settings → Pages → Source: gh-pages branch
3. URL : `https://[username].github.io/[repo]`

### Option 2 : Domaine Custom

```
# docs/CNAME
progression-sti2d.lycee-victor-hugo.fr
```

→ Configurer DNS chez registrar

### Option 3 : Autres Hosts

- **Netlify :** Drag & drop `docs/`
- **Vercel :** Import GitHub repo
- **Firebase Hosting :** `firebase deploy`

---

## 🔄 Workflow Développement

### Démarrage Projet

```bash
# Cloner template
git clone https://github.com/[user]/Progression_STI2D_Template.git ma-progression-2027

cd ma-progression-2027

# Installation
npm install

# Configuration
node scripts/init-progression.js
# → Prompt interactif pour remplir config/progression.yml

# Premier build
npm run build

# Dev server avec hot reload
npm run dev
# → Ouvre http://localhost:8080
# → Recompile auto à chaque modification .md
```

### Ajout de Contenu

```bash
# Créer nouveau TP
cp content/activites/_TEMPLATE_TP.md content/activites/TP_O3_Mon_Nouveau_TP.md

# Éditer
code content/activites/TP_O3_Mon_Nouveau_TP.md

# Build
npm run build

# Vérifier
npm run serve
# → http://localhost:8080/activites/TP_O3_Mon_Nouveau_TP.html
```

### Vérifications

```bash
# Check liens cassés
npm run check-links

# Optimiser images
npm run optimize-images

# Valider configuration
npm run validate-config
```

### Publication

```bash
# Commit
git add .
git commit -m "Ajout TP O3 - Modélisation 3D"
git push origin main

# GitHub Actions déploie automatiquement
# → https://[user].github.io/[repo] mis à jour en ~2min
```

---

## 📊 Métriques & Analytics

### Option 1 : GitHub Stats (Gratuit)

- Vues pages (GitHub Insights)
- Stars/Forks
- Trafic

### Option 2 : Plausible Analytics (RGPD-friendly)

```html
<!-- templates/footer.html -->
<script defer data-domain="progression-sti2d.fr" src="https://plausible.io/js/script.js"></script>
```

**Pas de cookies, pas de tracking perso**

### Option 3 : Supabase Queries

```sql
-- Stats utilisation jauge
SELECT 
  competence_id,
  COUNT(DISTINCT user_id) as nb_eleves,
  AVG(check_count) as moy_maitrise
FROM competence_progress
GROUP BY competence_id
ORDER BY moy_maitrise DESC;
```

---

## 🔮 Évolutions Futures

### Version 1.1 (Mars 2026)
- [ ] Multi-langue (FR/EN)
- [ ] Thèmes (clair/sombre)
- [ ] Export PDF progression élève

### Version 1.2 (Septembre 2026)
- [ ] Intégration Pronote API
- [ ] Notifications push (nouveaux contenus)
- [ ] Mode hors-ligne complet (PWA)

### Version 2.0 (2027)
- [ ] Éditeur WYSIWYG pour profs
- [ ] Marketplace ressources communautaires
- [ ] Analytics avancés (ML pour recommandations)

---

## 📚 Références Techniques

- [Markdown Spec](https://commonmark.org/)
- [Quarto Documentation](https://quarto.org/)
- [Supabase Docs](https://supabase.com/docs)
- [GitHub Pages](https://pages.github.com/)
- [Row Level Security](https://supabase.com/docs/guides/auth/row-level-security)

---

**Version :** 1.0.0-alpha  
**Dernière mise à jour :** 11 février 2026  
**Statut :** 📐 Architecture définie, prête pour implémentation
