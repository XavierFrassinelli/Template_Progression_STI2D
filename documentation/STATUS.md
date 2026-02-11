# Status — Progression STI2D Template

**Derniere mise a jour :** 11 fevrier 2026

## Etat du projet

- Phase A terminee (audit + structure)
- Phase B en cours, fusion du repo public 2025 avancee
- Build OK via `npm run build`

## Ce qui est fait

### Structure et base
- Dossier template cree : `Progression_STI2D_Template/`
- Build script migre : `scripts/build.js` (ROOT corrige)
- `package.json` ajuste (CommonJS)
- `.gitignore` protege RGPD, secrets, `_imports/`

### Firebase (export + securite)
- Export JSON : `audit/firebase-export.json`
- Secrets isoles : `audit/firebase-secrets.json` (gitignored)
- Export normalise : `audit/firebase-export-normalized.json`

### Fusion repo public (Progression-STI2D-2025)
- Repo clone dans `_sources/Progression-STI2D-2025`
- Contenu stage dans `_imports/Progression-STI2D-2025`
- Assets importes vers `assets/imports/2025/`

#### Contenus importes
- Bienvenue :
  - `content/ressources/bienvenue/accueil.md`
  - `content/ressources/bienvenue/faits.md`
  - `content/ressources/bienvenue/citations.md`
  - `content/ressources/bienvenue/implications.md`

- Premiere :
  - `content/activites/premiere/programme-premiere.md`
  - `content/activites/premiere/maison-positive.md`
  - `content/activites/premiere/bras-manipulateur.md`
  - `content/activites/premiere/robobrole.md`
  - `content/activites/premiere/mobilite.md` (stub, a completer)
  - `content/ressources/premiere/carte-mentale.md`
  - `content/ressources/premiere/competences.md`
  - `content/ressources/premiere/statut-competences.md`

- Chaine info :
  - `content/ressources/chaine_info/index.md`
  - `content/ressources/chaine_info/quiz.md`
  - `content/ressources/chaine_info/app.md`
  - `content/ressources/chaine_info/geogebra.md`
  - `content/ressources/chaine_info/frottement.md`
  - `content/ressources/chaine_info/palet.md`
  - `content/ressources/chaine_info/frein.md`
  - `content/ressources/chaine_info/mechanics.md`

- Ressources / Terminale :
  - `content/ressources/ressources.md`
  - `content/ressources/apprendre.md`
  - `content/ressources/terminale/terminale.md`

## Ce qui reste a faire (prochaines etapes)

### Phase B (finir fusion)
1. Verifier que tous les assets references existent dans `assets/imports/2025/`
2. Ajouter les liens vers ces nouvelles pages dans `content/index.md`
3. Rebuild et valider la navigation

### Phase C (apps interactives)
4. Decider integration des apps JS (quiz, energychain, mechanics)
5. Creer dossier `apps/` et structurer les apps
6. Migrer Firebase vers Supabase (si souhait)

## Notes techniques
- Le repo public utilise MkDocs Material, contenu adapte en Markdown simple.
- Les liens d'assets ont ete re-ecrits vers `/assets/imports/2025/...`
- Certaines pages avaient un mot de passe : contenu retire et remplace par stub.

## Comment reprendre

- Ouvrir `documentation/STATUS.md`
- Dire : "reprendre a partir de STATUS.md"
- Prochaine action conseillee : mettre a jour `content/index.md` avec les nouvelles sections.
