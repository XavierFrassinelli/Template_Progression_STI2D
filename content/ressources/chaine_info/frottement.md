---
title: "Etude du frottement"
source: "Progression-STI2D-2025/docs/chaine_info/frottement.md"
---

# Etude du frottement : Le convoyeur

Voici une simulation interactive pour comprendre l'influence de l'angle sur l'adherence.

<iframe
    src="/assets/imports/2025/convoyeur.html"
    width="100%"
    height="600px"
    frameborder="0"
    style="border: 1px solid #eee; border-radius: 8px;"
></iframe>

## Analyse
Comme vu dans le TD, lorsque l'angle $\alpha$ augmente :

1. La composante tangentielle du poids (qui tire vers le bas) augmente.
2. La composante normale (qui plaque l'objet) diminue.

Le decrochage se produit lorsque la tangente sort du cone de frottement defini par le coefficient $\mu$.

## Attention "Le piege de la masse"

Avez-vous remarque ? Si vous changez la masse, la boite ne se met pas a glisser davantage.

**Pourquoi ?**
Si on double la masse, le poids double.

- La force qui tire vers le bas $F_T$ double.
- MAIS la force qui plaque au sol $F_N$ double aussi, ce qui double l'adherence disponible.

Les deux effets s'annulent. L'angle de glissement limite ne depend **que** des materiaux $\mu$, pas de la masse.
