# Templates Quarto  Édition de documents pédagogiques

Bienvenue ! Ce dossier contient des templates Quarto pour générer des fiches de TP, ressources pédagogiques et documents PDF professionnels sous VS Code.

##  Fichiers disponibles

### Templates disciplinaires

- **`template-2i2d.qmd`**  Innovation, Ingénierie et Développement Durable
  - Structure : Analyse  Conception  Implémentation

- **`template-i2d.qmd`**  Ingénierie et Innovation pour le Développement
  - Structure : Objectifs  Cours  Travail pratique

- **`template-it.qmd`**  Ingénierie Technologique
  - Structure : Préparation  Réalisation  Analyse

### Fichiers de configuration

- **`_quarto.yml`**  Configuration Quarto (A4, LuaLaTeX, en-têtes/pieds)
- **`latex-header.tex`**  Mise en forme LaTeX (logos, marges, numérotation)
- **`assets/logos/`**  Logos disciplinaires

##  Utilisation rapide

### Étape 1 : Adapter un template

1. Ouvre le template correspondant à ta discipline.
2. Modifie le frontmatter YAML (title, competence, author).
3. Remplace les sections par ton contenu réel.

### Étape 2 : Générer le PDF

**Option A  VS Code**
- Clique sur le bouton "Render" en haut du fichier `.qmd`
- Ou raccourci Ctrl+Shift+K

**Option B  Terminal**
```powershell
cd pedagogie/templates-quarto
quarto render template-2i2d.qmd --to pdf
```

##  Exemple de contenu

Les templates supportent :
- Sections Markdown standard
- Équations LaTeX : $E = mc^2$ et $$\sum_{i=1}^n i = \frac{n(n+1)}{2}$$
- Tableaux | de | validation |
- Images et diagrammes

##  Personnalisation

- En-tête/pied : modifier `latex-header.tex`
- Configuration globale : éditer `_quarto.yml`
- Logos : remplacer PNG dans `assets/logos/`

---

**Crée pour la progression 2026-27 du Lycée Victor Hugo.**
