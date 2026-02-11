# Changelog

Toutes les modifications notables de ce projet seront documentées dans ce fichier.

Le format est basé sur [Keep a Changelog](https://keepachangelog.com/fr/1.0.0/),
et ce projet adhère à [Semantic Versioning](https://semver.org/lang/fr/).

---

## [Non publié]

### À venir
- Phase B : Migration contenus Markdown
- Phase C : Applications interactives (jauge, quiz)
- Phase D : Scripts build automatisés
- Phase E : Déploiement GitHub Pages

---

## [1.0.0-alpha] - 2026-02-11

### 🎉 Création Initiale

#### Ajouté
- **Structure complète du template**
  - Dossiers : audit/, config/, content/, pedagogie/, apps/, assets/, scripts/, templates/, docs/
  - Fichiers de configuration : .gitignore, package.json, LICENSE
  
- **Documentation Phase A (Audit)**
  - `audit/inventaire-projet-actuel.md` — Analyse projet existant
  - `audit/inventaire-depot-public.md` — Template pour audit Firebase
  - `audit/matrice-decisions.md` — 39 ressources évaluées
  - `audit/architecture-cible.md` — Stack technique détaillée
  - `audit/RECAP_PHASE_A.md` — Récapitulatif complet

- **Configuration**
  - `config/progression.yml` — 250 lignes de paramètres configurables
  - Variables : année, enseignant, classes, branding, applications, build, déploiement

- **Sécurité RGPD**
  - `.gitignore` — Protection dossier pedagogie/
  - `pedagogie/README.md` — Avertissement confidentialité
  - Fichiers `.gitkeep` pour structure dossiers vides

- **Package.json**
  - Dépendances : gray-matter, markdown-it, js-yaml, cheerio, sharp
  - Scripts : build, dev, serve, deploy, check-links, optimize-images

- **README principal**
  - Vision du projet
  - Structure détaillée
  - Phases de développement
  - Stack technique

- **Licence MIT** avec note sur contenus pédagogiques

#### Statistiques
- 📁 **16 fichiers créés**
- 📝 **~2000 lignes de documentation**
- ⏱️ **2h de travail**
- ✅ **Phase A complétée à 80%**

---

## Légende des Types de Changements

- **Ajouté** : Nouvelles fonctionnalités
- **Modifié** : Changements dans fonctionnalités existantes
- **Déprécié** : Fonctionnalités bientôt supprimées
- **Supprimé** : Fonctionnalités retirées
- **Corrigé** : Corrections de bugs
- **Sécurité** : Correctifs de vulnérabilités

---

## Numérotation des Versions

**Format :** MAJOR.MINOR.PATCH

- **MAJOR** : Changements incompatibles avec versions précédentes
- **MINOR** : Ajout de fonctionnalités compatibles
- **PATCH** : Corrections de bugs compatibles

**Suffixes :**
- `-alpha` : Version de développement précoce
- `-beta` : Version de test
- `-rc.X` : Release Candidate
- (aucun) : Version stable

---

**Dernière mise à jour :** 11 février 2026
