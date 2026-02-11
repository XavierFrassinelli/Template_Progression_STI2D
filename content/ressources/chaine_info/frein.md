---
title: "Frein a disque"
source: "Progression-STI2D-2025/docs/chaine_info/frein.md"
---

# Application : Le frein a disque (couple de freinage)

Pour arreter le vehicule, nous devons creer un **couple de freinage** $C_f$ qui s'oppose a la rotation de la roue. Cette simulation illustre l'exercice de la page 4.

**Parametres cles :**

* Force de serrage $F_N$ : l'effort hydraulique des pistons sur les plaquettes.
* Coefficient $\mu$ : depend de la qualite des plaquettes.
* Rayon $r$ : la distance entre l'axe de la roue et l'etrier.

<iframe
    src="/assets/imports/2025/frein.html"
    width="100%"
    height="650px"
    frameborder="0"
    style="border: 1px solid #eee; border-radius: 8px;"
></iframe>

### Analyse mecanique
Le freinage est une transformation d'effort :

1. On serre le disque : $F_N$ (force normale).
2. Le frottement cree une force tangentielle : $F_f = \mu \cdot F_N$ (multiplie par 2 car il y a 2 plaquettes).
3. Cette force cree un couple par rapport au centre : $C_f = F_f \cdot r$.

> **Note :** Pour augmenter le freinage, on peut soit appuyer plus fort $F_N$, soit augmenter la taille du disque $r$.
