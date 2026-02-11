# Plan de Fusion — Repo Public Progression-STI2D-2025

**Date :** 11 février 2026  
**Source :** `_imports/Progression-STI2D-2025` (repo clone et stage)

---

## Objectif

Intégrer progressivement les contenus du repo public dans le template, en conservant une structure claire et sans publier les contenus avant validation.

---

## 1. Contenus a evaluer (docs/*.md)

### Section "Bienvenue"
- `accueil.md`
- `faits.md`
- `citations.md`
- `implications.md`

**Destination proposee :** `content/ressources/bienvenue/`

### Section "Premiere"
- `premiere.md`
- `premiere_maison.md`
- `premiere_bras.md`
- `premiere_robobrole.md`
- `premiere_mobilite.md`
- `premiere_mind_map.md`
- `premiere_competence.md`
- `premiere_statut_comp.md`

**Destination proposee :** `content/activites/premiere/` (ou `content/ressources/premiere/` selon usage)

### Section "Chaine info"
- `chaine_info/index.md`
- `chaine_info/frottement.md`
- `chaine_info/palet.md`
- `chaine_info/frein.md`
- `chaine_info/quiz.md`
- `chaine_info/geogebra.md`
- `chaine_info/app.md`
- `chaine_info/Mechanics.md`

**Destination proposee :** `content/ressources/chaine_info/`

### Section "Terminale"
- `Terminale.md`

**Destination proposee :** `content/ressources/terminale/`

### Section "Ressources"
- `Ressources.md`
- `apprendre.md`

**Destination proposee :** `content/ressources/`

---

## 2. Assets a trier

**Source :** `_imports/Progression-STI2D-2025/docs/assets/`

### Types detectes
- Images : `.png`, `.jpg`, `.jpeg`
- Bundles JS : `bundle.energychain.js`, `bundle.mechanics.js`
- HTML exportes : `quiz_sti2d.html`, `energychain.html`, `Mechanics.html`
- Dossiers : `img/`, `fichiers/`, `Progression_STI2D_2024_25.html_files/`

**Destination proposee :** `assets/imports/2025/`

---

## 3. Applications JS

**Source :** `_imports/Progression-STI2D-2025/docs/js/`
- `firebase.js`
- `auth.js`

**Destination proposee :** `apps/` (a reecrire ou adapter avant integration)

---

## 4. Regles de fusion

- Ne pas publier directement les pages importees
- Copier d'abord en staging puis valider une par une
- Nettoyer le HTML inline et harmoniser avec le template
- Remplacer les chemins absolus MkDocs
- Ajouter frontmatter YAML

---

## 5. Etape suivante proposee

**Valider ensemble la destination des contenus** avant copie definitive.
