# Inventaire — Projet Actuel (Progression_2026_27)

**Date :** 11 février 2026  
**Auditeur :** GitHub Copilot + Xavier  
**Projet source :** `c:\Users\xavie\Documents\Lycée Victor Hugo\Progression_2026_27`

---

## 📊 Statistiques Globales

| Métrique | Valeur | Notes |
|----------|--------|-------|
| **Dossiers principaux** | 8 | content, docs, pedagogie, assets, templates, etc. |
| **Fichiers Markdown** | ~30 | À compter précisément |
| **Build system** | ✅ Fonctionnel | build.js + package.json |
| **Templates HTML** | 3 | header, footer, layout |
| **Applications** | 0 | Jauge planifiée, non implémentée |

---

## 📁 Structure Détaillée

### 1. `/content/` — Contenus Pédagogiques

#### 1.1 Objectifs (O1-O7)
```
content/objectifs/
├── O1.md - Caractériser (CO1.1, CO1.2, CO1.3)
├── O2.md - Identifier (CO2.1, CO2.2)
├── O3.md - Analyser (CO3.1→CO3.4)
├── O4.md - Communiquer (CO4.1→CO4.3)
├── O5.md - Expérimenter (CO5.1→CO5.4)
├── O6.md - Concevoir (CO6.1→CO6.3)
└── O7.md - Respecter contraintes (CO7.1, CO7.2)
```

**État :** ✅ Complets, alignés BO  
**Qualité :** 🟢 Excellente structure  
**Action :** Migrer tel quel

#### 1.2 Compétences Détaillées
```
content/competences/
├── concevoir.md
├── implanter.md
├── verifier.md
└── sii_sti2d_example.md
```

**État :** ⚠️ Exemples, pas exhaustif  
**Qualité :** 🟡 À compléter  
**Action :** Enrichir avec détails BO

#### 1.3 Activités (TP/TD)
```
content/activites/
├── TP_O1.md
└── TP_O2_O7.md
```

**État :** ⚠️ Seulement 2 activités  
**Qualité :** 🟢 Bien structurées  
**Action :** Migrer + ajouter nouvelles activités

#### 1.4 Fiches Élèves
```
content/fiches-eleves/
├── Fiche_Analyse_Produit.md
├── Fiche_Journal_Projet.md
└── Fiche_Protocole_Essais.md
```

**État :** ✅ Templates réutilisables  
**Qualité :** 🟢 Excellentes ressources  
**Action :** Migrer tel quel

#### 1.5 Ressources
```
content/ressources/
├── Quiz_O1_O7.md
└── Ressources_Videos.md
```

**État :** ✅ Utiles  
**Qualité :** 🟢 Bonne base  
**Action :** Migrer + enrichir

---

### 2. `/pedagogie/` — Ressources Professeur (PRIVÉ)

```
pedagogie/
├── templates-quarto/
│   ├── template-2i2d.qmd
│   ├── template-i2d.qmd
│   ├── template-it.qmd
│   ├── _quarto.yml
│   └── latex-header.tex
├── plans-seance/ (vide)
├── evaluations/ (vide)
├── coriges/ (vide)
└── ressources-prof/ (vide)
```

**État :** 🟡 Templates Quarto existants, dossiers vides  
**Qualité :** 🟢 Templates bien faits  
**Action :** 
- Migrer templates Quarto
- Conserver structure dossiers vides
- Ajouter au .gitignore

---

### 3. `/docs/` — Site Généré (Output)

```
docs/
├── index.html
├── objectifs/ (7 HTML)
├── competences/ (4 HTML)
├── activites/ (2 HTML)
├── fiches-eleves/ (3 HTML)
├── ressources/ (2 HTML)
└── assets/logos/
```

**État :** ✅ Build fonctionnel  
**Qualité :** 🟢 HTML propre  
**Action :** Reproduire pipeline de build

---

### 4. `/assets/` — Médias

```
assets/
└── logos/
    ├── logo-victor-hugo.png
    └── autres logos...
```

**État :** ⚠️ Peu de contenu  
**Qualité :** 🟡 À enrichir  
**Action :** 
- Migrer logos existants
- Prévoir structure images/videos

---

### 5. `/templates/` — HTML Layouts

```
templates/
├── header.html - Navigation, branding
├── footer.html - Credits, liens
└── layout.html - Structure page
```

**État :** ✅ Fonctionnels  
**Qualité :** 🟢 Bien codés  
**Action :** 
- Migrer tel quel
- Ajouter variables config dynamiques

---

### 6. Scripts & Configuration

#### 6.1 `build.js`
```javascript
// Pipeline Markdown → HTML
// - gray-matter pour frontmatter
// - markdown-it pour rendering
// - Copie assets automatique
```

**État :** ✅ Fonctionnel  
**Qualité :** 🟢 Code propre  
**Action :** Migrer + améliorer avec config.yml

#### 6.2 `package.json`
```json
{
  "scripts": {
    "build": "node build.js",
    "serve": "npx http-server docs -o"
  },
  "dependencies": {
    "gray-matter": "^4.0.3",
    "markdown-it": "^13.0.1"
  }
}
```

**État :** ✅ Minimal mais suffisant  
**Qualité :** 🟢 OK  
**Action :** Enrichir avec scripts migration

---

## 🎯 Documents de Référence

### `FEATURE_JAUGE_COMPETENCES.md`
- Analyse Supabase vs Firebase
- Architecture jauge de progression
- Estimation temps : 2h30-3h30
- **Action :** Implémenter dans `/apps/jauge-competences/`

### `BO.txt`
- Référentiel complet du BO
- **Action :** Parser → `config/competences.json`

### `README_INTERFACE.md`
- Guide extensions VSCode
- **Action :** Migrer vers `documentation/`

---

## ✅ Points Forts

1. **Structure cohérente** et logique
2. **Alignement BO** excellent
3. **Build automatisé** fonctionnel
4. **Templates Quarto** professionnels
5. **Séparation** contenu public/privé

---

## ⚠️ Points à Améliorer

1. **Peu d'activités TP/TD** (seulement 2)
2. **Applications interactives** absentes
3. **Configuration hard-codée** (pas de variables)
4. **Documentation** éparpillée
5. **Assets limités** (images, vidéos)

---

## 🔄 Décisions de Migration

| Élément | Action | Priorité | Notes |
|---------|--------|----------|-------|
| `content/objectifs/` | ✅ MIGRER | P0 | Tel quel |
| `content/activites/` | ✅ MIGRER | P0 | Base à enrichir |
| `content/fiches-eleves/` | ✅ MIGRER | P0 | Excellentes |
| `content/ressources/` | ✅ MIGRER | P1 | À compléter |
| `content/competences/` | 🔄 ENRICHIR | P1 | Parser BO.txt |
| `pedagogie/templates-quarto/` | ✅ MIGRER | P0 | Essentiels |
| `templates/*.html` | ✅ MIGRER | P0 | + variables |
| `build.js` | 🔄 AMÉLIORER | P0 | + config.yml |
| `assets/` | ✅ MIGRER | P1 | Structure vide OK |
| `BO.txt` | 🔄 PARSER | P1 | → JSON |
| `FEATURE_JAUGE_*` | 🚀 IMPLÉMENTER | P2 | Nouvelle feature |

---

## 📈 Taux de Réutilisation

- **Contenus Markdown :** ~80% réutilisables
- **Structure dossiers :** 90% OK
- **Build system :** 70% OK (à enrichir)
- **Templates :** 95% OK
- **Applications :** 0% (à créer)

**Moyenne :** ~67% de réutilisation directe

---

## 🚀 Prochaines Étapes

1. ✅ Inventaire terminé
2. ⏭️ Inventaire dépôt public Firebase
3. ⏭️ Matrice de décisions finale
4. ⏭️ Migration Phase B

---

**Audit complété le :** 11 février 2026  
**Temps estimé :** 1h30  
**Conclusion :** Base solide, migration viable
