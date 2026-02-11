---
title: "Apprendre en s'amusant"
source: "Progression-STI2D-2025/docs/apprendre.md"
---

# Apprendre en s'amusant

<script src="https://cdnjs.cloudflare.com/ajax/libs/brython/3.11.0/brython.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/brython/3.11.0/brython_stdlib.min.js"></script>

**Question :** Quelle est la valeur de 3 * 7 ?

<div style="margin: 20px 0;">
    <input id="reponse_eleve" placeholder="Votre reponse ici" style="padding: 5px;">
    <button id="bouton_valider" style="padding: 5px; cursor: pointer;">Valider</button>
</div>

<div id="resultat" style="font-weight:bold; min-height: 20px;"></div>

<script type="text/python">
from browser import document, alert

def verifier(ev):
    reponse = document["reponse_eleve"].value

    if reponse.strip() == "21":
        document["resultat"].text = "✅ Bravo ! C'est la bonne reponse."
        document["resultat"].style.color = "green"
    else:
        document["resultat"].text = "❌ Faux, c'est incorrect."
        document["resultat"].style.color = "red"

# On attache le clic du bouton a la fonction
document["bouton_valider"].bind("click", verifier)
</script>

<script>
    brython();
</script>
