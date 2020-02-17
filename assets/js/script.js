// Declaration des elements
const stepElems = document.getElementsByClassName("step");
const roundStepElems = document.getElementsByClassName("tunnel_rond");
const buttonElems = document.getElementsByClassName("bouton_confirmation");
const stepTitle = document.getElementById("stepTitle");

const stepTitles = ["Mode de retrait", "Récapitulatif", "Confirmation","Home"];

// Fonction déclenchée au clic
function clickHandler(e) {
  const target = e.target;
  const intent = parseInt(target.dataset.intent, 10);

  stepTitle.innerHTML = stepTitles[intent];

  // On parcourt toutes les pages
  for (const step of stepElems) {
    const stepIndex = parseInt(step.dataset.step, 10);
    
    if (stepIndex === intent) {
      step.classList.add("step-active");
    } else {
      step.classList.remove("step-active");
    }
  }

  // Avancement dans le tunnel (rond)
  for (const roundStep of roundStepElems) {
    const stepIndex1 = parseInt(roundStep.dataset.step, 10);

    if (stepIndex1 === intent) {
      roundStep.classList.add("tunnel_rond_active");
    } else {
      roundStep.classList.remove("tunnel_rond_active");
    }
  }

}

for (const buttonElem of buttonElems) {
  buttonElem.addEventListener("click", clickHandler);
}

// Activation du boutton pour la réservation
var retraitCarte = document.getElementsByClassName("retrait_carte");

// gestion de la sélection du mode de retrait
for (var l = 0; l < retraitCarte.length; l++) {
  retraitCarte[l].addEventListener("click", function() {
  var selected = document.getElementsByClassName("selected");

  // Si on a sélectionné
  if (selected.length > 0) { 
    selected[0].className = selected[0].className.replace(" selected", "");
  }
  this.className += " selected";
  buttonElems[0].classList.remove("disabled")
  buttonElems[0].disabled = false;

}
  )
}