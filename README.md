# 🎓 Template Progression STI2D — Master

**Version :** 1.0.0  
**Date de création :** 11 février 2026  
**Statut :** 🚧 En construction (Phase A - Audit)

---

## 🎯 Objectif du Projet

Template **universel et réutilisable** pour créer des progressions pédagogiques STI2D, intégrant :

- ✅ Contenus alignés BO (Bulletin Officiel)
- ✅ Activités (TP/TD) clés en main
- ✅ Applications interactives (jauge compétences, quiz)
- ✅ Fiches élèves et ressources prof
- ✅ Build automatisé → Site statique GitHub Pages
- ✅ Gestion multi-classes et multi-années

---

## 📁 Structure du Projet

```
Progression_STI2D_Template/
├── 📋 audit/                    # Phase A - Inventaires et analyses
│   ├── inventaire-projet-actuel.md
│   ├── inventaire-depot-public.md
│   ├── matrice-decisions.xlsx
│   └── architecture-cible.md
│
├── 🎯 config/                   # Configuration template
│   ├── progression.yml          # Méta (année, prof, classes)
│   ├── competences.json         # Référentiel BO complet
│   └── build-config.js          # Paramètres build
│
├── 📝 content/                  # Contenus Markdown
│   ├── index.md
│   ├── objectifs/               # O1-O7
│   ├── competences/             # CO*.* détaillées
│   ├── activites/               # TP/TD
│   ├── ressources/              # Vidéos, quiz, docs
│   └── fiches-eleves/           # Protocoles, analyses
│
├── 🎓 pedagogie/                # PRIVÉ (gitignored)
│   ├── plans-seance/
│   ├── evaluations/
│   ├── coriges/
│   └── templates-quarto/
│
├── 🚀 apps/                     # Applications interactives
│   ├── jauge-competences/       # Supabase + JS
│   ├── quiz/                    # Migration Firebase
│   └── shared/                  # Composants réutilisables
│
├── 🎨 assets/                   # Médias statiques
│   ├── logos/
│   ├── images/
│   └── videos/
│
├── 🔧 scripts/                  # Automation
│   ├── build.js                 # Build Markdown → HTML
│   ├── migrate-firebase.js      # Migration données
│   └── init-progression.js      # CLI nouvelle année
│
├── 🌐 templates/                # Templates HTML
│   ├── layout.html
│   ├── header.html
│   └── footer.html
│
├── 📦 docs/                     # Output build (GH Pages)
│
├── 📚 documentation/             # Guides utilisateurs
│   ├── GUIDE_DEMARRAGE.md
│   ├── GUIDE_CONTRIBUTION.md
│   ├── ARCHITECTURE.md
│   └── FAQ.md
│
├── .gitignore
├── package.json
└── README.md                    # Ce fichier
```

---

## 🔄 Phases du Projet

### ✅ Phase 0 : Préparation
- [x] Installation extensions VSCode
- [x] Documentation interface

### 🔄 Phase A : Audit & Cartographie (EN COURS)
- [ ] Inventaire projet actuel (`Progression_2026_27`)
- [ ] Inventaire dépôt public avec Firebase
- [ ] Matrice de décision (garder/fusionner/archiver)
- [ ] Architecture cible détaillée

### ⏳ Phase B : Architecture Unifiée
- [ ] Migration contenus Markdown
- [ ] Harmonisation frontmatter
- [ ] Déduplication assets
- [ ] Standardisation nommage

### ⏳ Phase C : Applications Interactives
- [ ] Migration Firebase → Supabase
- [ ] Jauge de compétences finalisée
- [ ] Quiz interactifs
- [ ] Authentification élèves

### ⏳ Phase D : Templateisation
- [ ] Variables dynamiques config
- [ ] Script init-progression CLI
- [ ] Documentation complète
- [ ] Tests validation

### ⏳ Phase E : Déploiement
- [ ] GitHub Pages configuré
- [ ] CI/CD automatisé
- [ ] Partage communauté

---

## 🛠️ Stack Technique

| Composant | Technologie | Raison |
|-----------|-------------|--------|
| **Contenus** | Markdown + Frontmatter | Simplicité, portabilité |
| **Documents avancés** | Quarto | Équations, code interactif |
| **Build** | Node.js + markdown-it | Léger, rapide |
| **Backend** | Supabase (PostgreSQL) | RGPD, open-source, RLS |
| **Frontend apps** | Vanilla JS | Pas de dépendance framework |
| **Hosting** | GitHub Pages | Gratuit, intégration Git |
| **Auth** | Codes élèves (simple) | Pas d'email requis |

---

## 📊 Métriques de Succès

✅ **Temps démarrage nouvelle progression :** < 30 minutes  
✅ **Ajout nouveau TP :** 1 fichier Markdown + build  
✅ **Migration annuelle :** Modification config.yml  
✅ **Zéro doublon** de contenu  
✅ **Documentation** claire pour non-techniciens  

---

## 🚀 Démarrage Rapide (à venir)

```bash
# Cloner le template
git clone [URL] ma-progression-2027

# Configurer
cd ma-progression-2027
npm install
node scripts/init-progression.js

# Servir en local
npm run dev

# Publier
npm run build
git push origin main
```

---

## 📞 Support

- **Documentation :** `documentation/`
- **Issues :** GitHub Issues
- **Contact :** [À définir]

---

**🏗️ Projet en construction active — Phase A en cours**
