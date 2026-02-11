# Matrice de Décisions — Fusion des Ressources

**Date :** 11 février 2026  
**Objectif :** Décider pour chaque ressource : GARDER / FUSIONNER / ARCHIVER / SUPPRIMER

---

## 🎨 Légende

| Décision | Icône | Description |
|----------|-------|-------------|
| **MIGRER** | ✅ | Garder tel quel dans template |
| **FUSIONNER** | 🔀 | Combiner avec ressource similaire |
| **ENRICHIR** | 📈 | Garder + compléter |
| **ARCHIVER** | 📦 | Garder historique, ne pas publier |
| **SUPPRIMER** | ❌ | Ne pas conserver |
| **CRÉER** | 🆕 | Nouveau contenu à produire |

---

## 📊 Matrice Complète

### 1. CONTENUS MARKDOWN

| Ressource | Source | Décision | Priorité | Destination | Notes |
|-----------|--------|----------|----------|-------------|-------|
| **Objectifs O1-O7** | Actuel | ✅ MIGRER | P0 | `content/objectifs/` | Alignés BO, parfaits |
| Objectifs (dépôt public) | Public | 🔀 FUSIONNER | P1 | Merge si différences | Comparer versions |
| **Compétences CO*.*** | Actuel | 📈 ENRICHIR | P1 | `content/competences/` | Parser BO.txt |
| Compétences (public) | Public | 🔀 FUSIONNER | P1 | Merge détails | Idem objectifs |
| **TP_O1** | Actuel | ✅ MIGRER | P0 | `content/activites/` | Base solide |
| **TP_O2_O7** | Actuel | ✅ MIGRER | P0 | `content/activites/` | Idem |
| Autres TP (public) | Public | ✅ MIGRER | P1 | Enrichir collection | Si pertinents |
| **Fiches élèves (3)** | Actuel | ✅ MIGRER | P0 | `content/fiches-eleves/` | Templates réutilisables |
| Fiches élèves (public) | Public | 🔀 FUSIONNER | P1 | Compléter collection | Éviter doublons |
| **Quiz O1-O7** | Actuel | 📈 ENRICHIR | P2 | `content/ressources/` | Statique → interactif |
| **Ressources Vidéos** | Actuel | ✅ MIGRER | P1 | `content/ressources/` | Liste utile |
| `index.md` | Actuel | ✅ MIGRER | P0 | `content/` | Page accueil |
| `index.md` (public) | Public | 🔀 FUSIONNER | P0 | Merger infos | Best of both |

---

### 2. APPLICATIONS INTERACTIVES

| Application | Source | Décision | Priorité | Destination | Notes |
|-------------|--------|----------|----------|-------------|-------|
| **Jauge compétences** | Spécifié | 🆕 CRÉER | P1 | `apps/jauge-competences/` | Supabase + JS |
| Quiz interactifs | Public | 🔀 MIGRER+ADAPTER | P2 | `apps/quiz/` | Firebase → Supabase |
| Autres apps (public) | Public | ⏳ À ÉVALUER | P2 | TBD | Dépend audit |

---

### 3. TEMPLATES & BUILD

| Ressource | Source | Décision | Priorité | Destination | Notes |
|-----------|--------|----------|----------|-------------|-------|
| **header.html** | Actuel | ✅ MIGRER | P0 | `templates/` | + variables config |
| **footer.html** | Actuel | ✅ MIGRER | P0 | `templates/` | Idem |
| **layout.html** | Actuel | ✅ MIGRER | P0 | `templates/` | Idem |
| Templates (public) | Public | 🔀 COMPARER | P1 | Best features | Design moderne ? |
| **build.js** | Actuel | 📈 ENRICHIR | P0 | `scripts/` | + config.yml |
| Build system (public) | Public | 🔀 COMPARER | P1 | Best approach | Framework ? |
| **package.json** | Actuel | 📈 ENRICHIR | P0 | Root | + scripts migration |

---

### 4. TEMPLATES QUARTO

| Ressource | Source | Décision | Priorité | Destination | Notes |
|-----------|--------|----------|----------|-------------|-------|
| **template-2i2d.qmd** | Actuel | ✅ MIGRER | P0 | `pedagogie/templates-quarto/` | 2I2D spécialité |
| **template-i2d.qmd** | Actuel | ✅ MIGRER | P0 | Idem | I2D générique |
| **template-it.qmd** | Actuel | ✅ MIGRER | P0 | Idem | IT spécialité |
| **_quarto.yml** | Actuel | ✅ MIGRER | P0 | Idem | Config Quarto |
| **latex-header.tex** | Actuel | ✅ MIGRER | P0 | Idem | Headers LaTeX |
| Templates (public) | Public | 🔀 COMPARER | P2 | Compléter | Si nouveaux |

---

### 5. ASSETS (Médias)

| Ressource | Source | Décision | Priorité | Destination | Notes |
|-----------|--------|----------|----------|-------------|-------|
| **Logos Lycée** | Actuel | ✅ MIGRER | P0 | `assets/logos/` | Branding |
| Logos (public) | Public | 🔀 DÉDUPLICATER | P1 | Idem | Garder meilleure qualité |
| Images (actuel) | Actuel | ✅ MIGRER | P1 | `assets/images/` | Si existantes |
| Images (public) | Public | ✅ MIGRER | P1 | Idem | Schémas, photos |
| Vidéos | Public | ✅ MIGRER | P2 | `assets/videos/` | Si hébergées localement |
| PDFs | Les deux | 🔀 FUSIONNER | P2 | `assets/docs/` | Ressources |

---

### 6. CONFIGURATION & DOCUMENTATION

| Ressource | Source | Décision | Priorité | Destination | Notes |
|-----------|--------|----------|----------|-------------|-------|
| **README.md** (actuel) | Actuel | 📦 ARCHIVER | P1 | Archive | Créer nouveau |
| README (public) | Public | 📦 ARCHIVER | P1 | Archive | Idem |
| **Nouveau README** | À créer | 🆕 CRÉER | P0 | Root | Template master |
| **BO.txt** | Actuel | 🔄 PARSER | P1 | `config/competences.json` | Format JSON |
| **FEATURE_JAUGE** | Actuel | ✅ MIGRER | P1 | `documentation/` | Spécifications |
| **README_INTERFACE** | Actuel | ✅ MIGRER | P0 | `documentation/` | Guide VSCode |
| .gitignore | Actuel | 📈 ENRICHIR | P0 | Root | + pedagogie/ |

---

## 🔢 Compteurs

| Catégorie | ✅ Migrer | 🔀 Fusionner | 📈 Enrichir | 🆕 Créer | Total |
|-----------|----------|--------------|-------------|----------|-------|
| Contenus MD | 7 | 4 | 3 | 0 | 14 |
| Applications | 0 | 1 | 0 | 1 | 2 |
| Templates/Build | 3 | 2 | 3 | 0 | 8 |
| Quarto | 5 | 1 | 0 | 0 | 6 |
| Assets | 2 | 2 | 0 | 0 | 4 |
| Config/Docs | 3 | 0 | 1 | 1 | 5 |
| **TOTAL** | **20** | **10** | **7** | **2** | **39** |

---

## 🎯 Priorités d'Exécution

### P0 — CRITIQUE (Semaine 1)
- Migrer contenus MD essentiels (objectifs, TP, fiches)
- Migrer templates HTML + build.js
- Créer nouveau README master
- Migrer templates Quarto

**Temps estimé :** 5-7h

### P1 — IMPORTANT (Semaine 2)
- Fusionner contenus doublons (objectifs, compétences)
- Parser BO.txt → JSON
- Comparer templates public/actuel
- Migrer assets + déduplication
- Créer jauge compétences

**Temps estimé :** 8-12h

### P2 — CONFORT (Semaine 3+)
- Migrer applications interactives
- Enrichir ressources (vidéos, quiz)
- Documentation complète
- Tests validation

**Temps estimé :** 5-8h

---

## ⚠️ Zones de Risque

| Risque | Probabilité | Impact | Mitigation |
|--------|-------------|--------|------------|
| **Doublons non détectés** | 🟡 Moyenne | 🟡 Moyen | Scripts de comparaison MD5 |
| **Données Firebase perdues** | 🟡 Moyenne | 🔴 Élevé | Export JSON AVANT toute action |
| **Chemins cassés post-migration** | 🟢 Faible | 🟡 Moyen | Tests automatisés des liens |
| **Incompatibilité templates** | 🟢 Faible | 🟢 Faible | Tests render avant commit |
| **Surcharge cognitive** | 🔴 Élevée | 🟡 Moyen | Travailler par petits lots |

---

## ✅ Checklist de Validation

Avant de valider chaque migration :

- [ ] Fichier source identifié et localisé
- [ ] Destination cible confirmée
- [ ] Format compatible (ou conversion planifiée)
- [ ] Doublons vérifiés
- [ ] Métadonnées préservées (dates, auteurs)
- [ ] Liens internes vérifiés
- [ ] Test de rendu OK
- [ ] Commit Git avec message descriptif

---

## 📅 Timeline Globale

```
11 fév  ──┬── Audit terminé
          │
15 fév  ──┼── P0 Migration complétée
          │   (Contenus + Templates core)
          │
22 fév  ──┼── P1 Fusion/Enrichissement
          │   (Doublons traités + Jauge)
          │
01 mar  ──┼── P2 Apps interactives
          │   (Quiz + Optimisations)
          │
08 mar  ──┴── 🚀 TEMPLATE READY
              (Documentation + Tests)
```

---

**Dernière mise à jour :** 11 février 2026  
**Statut :** 🔄 En cours de remplissage  
**Complétion :** ~60% (manque audit dépôt public)
