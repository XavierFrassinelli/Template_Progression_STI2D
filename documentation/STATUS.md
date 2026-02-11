# Status — Progression STI2D Template

**Derniere mise a jour :** 11 fevrier 2026

## Etat du projet

- ✅ Phase A TERMINEE (audit + structure)
- ✅ Phase B TERMINEE (fusion du repo public 2025)
- ✅ GitHub PUBLISH (branche main)
- Build OK via `npm run build`
- Serveur actif : http://localhost:8080

## Ce qui est fait

### GitHub Publication
- Repository initialise et commité localement (399 objets, 57.73 MiB)
- Poussé vers https://github.com/XavierFrassinelli/Template_Progression_STI2D (branche main)
- Tous les fichiers inclus : content/, assets/, templates/, docs/, scripts/, pedagogie/, audit/, documentation/

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

### Verification immediates (Phase B.2)
1. ✅ Verifier tous assets references dans `assets/imports/2025/` — COMPLETÉ
   - 17 références d'images trouvées et vérifiées
   - 5 fichiers HTML (convoyeur, frein, quiz, energychain, mechanics) présents
   - Tous les files/ et img/ subdirectories présents
2. ✅ Navigation mise a jour dans `content/index.md` et `templates/header.html` — FAIT
3. ✅ Rebuild final et test en local — COMPLETÉ
   - npm run build : 38 pages HTML générées
   - Corrected asset paths from relative to absolute (/assets/...)
   - Server test : http://localhost:8080 ✓
   - All critical pages tested and loading correctly

### Phase C (apps interactives)
4. Decider integration des apps JS (quiz, energychain, mechanics)
5. Creer dossier `apps/` et structurer les apps
6. Migrer Firebase vers Supabase (si souhait)

## GitHub Repository

**URL publique :** https://github.com/XavierFrassinelli/Template_Progression_STI2D

**Contenu pushé :**
- Commit initial : "feat: template STI2D complet avec Phase A et Phase B"
- Branch : main
- Tag : (à créer si besoin version officielle)

**Pour cloner :**
```bash
git clone https://github.com/XavierFrassinelli/Template_Progression_STI2D.git
cd Template_Progression_STI2D
npm install
npm run build
npm run serve
```

## Phase C — Prochaines actions

### Apps interactives a migrer
- Quiz (assets/imports/2025/quiz/) — Utilise Firebase
- EnergyChain (assets/imports/2025/energychain/) — Interaction dynamique
- Mechanics Sim (assets/imports/2025/mechanics/) — Simulation physique

### Supabase migration
- Creer compte Supabase si pas deja fait
- Importer `audit/firebase-export-normalized.json`
- Metttre a jour JS pour client Supabase au lieu de Firebase

### Testing et polish
- Verifier tous les liens dans Phase B content
- Test des assets sur GitHub Pages  
- Documentation complete du template
- FAQ pour futures adaptations

## Notes techniques
- Le repo public utilise MkDocs Material, contenu adapte en Markdown simple.
- Les liens d'assets ont ete re-ecrits vers `/assets/imports/2025/...`
- Certaines pages avaient un mot de passe : contenu retire et remplace par stub.

## Comment reprendre

- Ouvrir `documentation/STATUS.md`
- Dire : "reprendre a partir de STATUS.md"
- Prochaine action conseillee : mettre a jour `content/index.md` avec les nouvelles sections.
