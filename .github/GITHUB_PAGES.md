# GitHub Pages — Configuration Guide

## ✅ Activation automatique (recommandé)

Un workflow GitHub Actions a été créé (`/.github/workflows/build-and-deploy.yml`) qui :
1. Construit le site à chaque push sur `main`
2. Déploie automatiquement sur GitHub Pages

**Tout fonctionne automatiquement !** ✨

### URL du site une fois activé :
👉 **https://xaviersfelli.github.io/Template_Progression_STI2D/**

---

## 🔧 Configuration manuelle (alternative)

Si tu veux vérifier/modifier manuellement :

1. Accéder auxSettings du repo :
   - https://github.com/XavierFrassinelli/Template_Progression_STI2D/settings

2. Dans le menu gauche : **Pages**

3. Configuration :
   - **Source** : Deploy from a branch
   - **Branch** : `main` (folder: `/docs`)
   - Cliquer "Save"

4. Attendre 1-2 minutes
   - GitHub crée automatiquement un workflow
   - Site déployé sur GitHub Pages

---

## 📊 Vérifier le statut

### Actions
- Voir les builds : https://github.com/XavierFrassinelli/Template_Progression_STI2D/actions

### Deployments
- Voir les déploiements : https://github.com/XavierFrassinelli/Template_Progression_STI2D/deployments

---

## 🚀 Après l'activation

Chaque push sur `main` :
1. Trigger le workflow
2. Build le site (`npm run build`)
3. Deploy dans `/docs`
4. Site live ~30-60 secondes après le push

Plus besoin de build manuel ! 🎉

---

## Troubleshooting

**404 sur assets ?**
- Les chemins doivent être absolus : `/assets/...`
- Déjà corrigé dans la version actuelle ✅

**Pages n'apparaît pas dans Settings ?**
- Attendre 5-10 minutes après le premier push
- Vérifier que le repo est public
- Voir les logs du workflow : Actions tab

**Site vide après déploiement ?**
- Vérifier que `/docs/index.html` existe
- Vérifier les logs du workflow pour errors
