# Inventaire — Dépôt Public avec Firebase

**Date :** 11 février 2026  
**Auditeur :** GitHub Copilot + Xavier  
**Repo :** https://github.com/lidlkidjoe/Progression-STI2D-2025  
**Site :** https://lidlkidjoe.github.io/Progression-STI2D-2025/

---

## ✅ INFORMATIONS COLLECTÉES

### 1. URL du dépôt GitHub public
**Repository :** https://github.com/lidlkidjoe/Progression-STI2D-2025  
**Site déployé :** https://lidlkidjoe.github.io/Progression-STI2D-2025/  
**Framework :** MkDocs Material

### 2. Applications Interactives Identifiées

#### 🎯 **Application 1 : Suivi de Compétences**
- **URL :** https://lidlkidjoe.github.io/Progression-STI2D-2025/premiere_competence/
- **Fonctionnalités :**
  - Tableau des compétences O1-O7 avec checkboxes
  - Système de connexion (🔑 Connexion)
  - Autoriser l'édition (✏️)
  - Stockage progression élève
- **Firebase :** ✅ Probablement utilisé pour authentification + stockage progression

#### 🧩 **Application 2 : Exercice Chaîne d'Information & d'Énergie**
- **URL :** https://lidlkidjoe.github.io/Progression-STI2D-2025/chaine_info/app/
- **Fonctionnalités :**
  - Drag & Drop interactif
  - Placement des fonctions (Acquérir, Traiter, Communiquer, etc.)
  - Vérification des réponses
  - Modes : Théorique, Store Banne Auto, Ventilateur Intelligent
- **Firebase :** ⚠️ Possiblement pour sauvegarder résultats

#### 📝 **Application 3 : Quiz STI2D**
- **URL :** https://lidlkidjoe.github.io/Progression-STI2D-2025/chaine_info/quiz/
- **Fonctionnalités :**
  - Quiz à choix multiples (26 questions)
  - Score en temps réel
  - Navigation questions
  - Images dans questions
- **Firebase :** ⚠️ Possiblement pour stocker scores

### 3. Pages Protégées Identifiées
Plusieurs pages marquées [Protected] :
- Accueil, Idées et faits, Citations, Implications
- Introduction, Maison positive, Bras manipulateur, Robobrole, Mobilité
- Terminale

→ **Authentification Firebase probablement active**

---

## 📋 Checklist d'Audit

### 1. Informations Générales

- [ ] URL du repository
- [ ] Dernière mise à jour
- [ ] Nombre de commits
- [ ] Nombre de contributeurs
- [ ] Licence

### 2. Structure du Projet

- [ ] Framework utilisé (React, Vue, Vanilla JS ?)
- [ ] Build system (Webpack, Vite, Parcel ?)
- [ ] Hébergement (GitHub Pages, Firebase Hosting ?)
- [ ] CI/CD configuré ?

### 3. Applications Firebase

#### 3.1 Base de Données
- [x] Type : Realtime Database
- [x] Collections/Tables utilisées
- [ ] Règles de sécurité configurées
- [x] Schéma de données

**Export JSON effectue :**
- Export complet : `audit/firebase-export.json`
- Secrets isoles : `audit/firebase-secrets.json` (gitignored)
- Export normalise (migration) : `audit/firebase-export-normalized.json`

**Détails techniques détectés :**
- **SDK utilisé :** `firebase-database`
- **Project ID :** `sauvegarde-donnees-9dd15`
- **Database URL :** `https://sauvegarde-donnees-9dd15-default-rtdb.europe-west1.firebasedatabase.app/`

**Chemins de données observés :**
- `states/password` : mot de passe pour activer le mode edition
- `states/{userId}` : etat des cases a cocher par utilisateur

#### 3.2 Authentification
- [x] Méthodes actives : GitHub OAuth (popup)
- [ ] Nombre d'utilisateurs actifs
- [ ] Gestion des rôles (élève, prof, admin ?)

**Fichiers impliqués :**
- `docs/js/firebase.js`
- `docs/js/auth.js`

#### 3.3 Hosting
- [ ] URL de production
- [ ] Configuration domaine custom ?
- [ ] Certificat SSL

#### 3.4 Functions
- [ ] Cloud Functions déployées ?
- [ ] API endpoints exposés

#### 3.5 Storage
- [ ] Fichiers hébergés (images, PDFs, vidéos ?)
- [ ] Taille totale utilisée

### 4. Fonctionnalités Identifiées

- [ ] **Quiz interactifs**
  - Technologies utilisées
  - Format des questions
  - Système de scoring
  - Persistance des résultats

- [ ] **Suivi de progression**
  - Métriques trackées
  - Visualisations (graphiques, jauges)
  - Export de données

- [ ] **Ressources pédagogiques**
  - Types de contenus (vidéos, docs, liens)
  - Organisation/catégorisation
  - Système de recherche

- [ ] **Autres applications**
  - [À identifier lors de l'audit]

### 5. Dépendances NPM

```json
// À extraire de package.json
{
  "dependencies": {},
  "devDependencies": {}
}
```

### 6. Configuration Firebase

```javascript
// À extraire de firebase-config.js ou .env
{
  "apiKey": "***",
  "authDomain": "***",
  "projectId": "***",
  "databaseURL": "***"
}
```

---

## 🔄 Plan d'Extraction des Données

### Étape 1 : Export Firebase

```bash
# Installer Firebase CLI
npm install -g firebase-tools

# Login
firebase login

# Lister les projets
firebase projects:list

# Export Firestore (si utilisé)
firebase firestore:export export-folder

# Export Realtime Database (si utilisé)
firebase database:get / > database-export.json
```

### Étape 2 : Clone du Repo

```bash
# Cloner le dépôt public
git clone [URL] analyse-repo-public

# Analyser la structure
tree -L 3 > structure.txt

# Compter fichiers par type
find . -type f | sed 's/.*\.//' | sort | uniq -c
```

### Étape 3 : Analyse du Code

- [ ] Identifier composants réutilisables
- [ ] Extraire logique métier
- [ ] Repérer hard-coded values à paramétrer
- [ ] Lister assets (images, fonts, etc.)

---

## 📊 Tableaux d'Analyse (à remplir)

### Applications Identifiées

| App | Description | Technologies | Utilisateurs | Migration Difficulté |
|-----|-------------|--------------|--------------|----------------------|
| Quiz O1-O7 | ? | ? | ? | ? |
| Jauge compétences | ? | ? | ? | ? |
| ... | ... | ... | ... | ... |

### Données Firebase

| Collection | Documents | Champs | Taille | Export OK ? |
|------------|-----------|--------|--------|-------------|
| users | ? | ? | ? | ⏳ |
| progress | ? | ? | ? | ⏳ |
| quiz_results | ? | ? | ? | ⏳ |

### Ressources Statiques

| Type | Nombre | Taille Totale | Chemin |
|------|--------|---------------|--------|
| Images | ? | ? | ? |
| Vidéos | ? | ? | ? |
| PDFs | ? | ? | ? |
| Autres | ? | ? | ? |

---

## 🎯 Décisions de Migration

### Stratégie Retenue

**Option 1 : Migration Complète**
- Tout migrer vers Supabase
- Réécrire applications si nécessaire
- **Effort :** Élevé (10-15h)
- **Risque :** Moyen

**Option 2 : Migration Sélective**
- Garder Firebase pour certaines apps
- Nouveau = Supabase
- **Effort :** Moyen (5-8h)
- **Risque :** Faible

**Option 3 : Réarchitecture Complète**
- Reprendre de zéro avec vision unifiée
- Meilleure cohérence
- **Effort :** Très élevé (20-30h)
- **Risque :** Élevé

**✅ Recommandation :** [À décider après audit complet]

---

## 🚀 Actions Immédiates Requises

1. **Fournir URL du dépôt public**
2. **Donner accès aux données Firebase** (export JSON si possible)
3. **Lister fonctionnalités critiques** à absolument conserver
4. **Identifier utilisateurs actifs** (combien d'élèves utilisent le système ?)

---

## 📝 Notes de Terrain

[Espace pour notes pendant l'audit]

- 
- 
- 

---

**Audit en attente de :** URL du repository + accès Firebase  
**Prochaine étape :** Remplir cet inventaire avec les vraies données
