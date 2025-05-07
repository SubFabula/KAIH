document.addEventListener("DOMContentLoaded", () => {
  const calculateButton = document.getElementById("calculateButton");
  const numberInput = document.getElementById("numberInput");
  // SCRIPT
  calculateButton.addEventListener("click", requiredInputValidation);
  // STYLE
  numberInput.addEventListener("focusin", vIOVforFields); // "vIOV = visibleIndicatorOfValidation"
  numberInput.addEventListener("focusout", vIOVforFieldsStop);
  numberInput.addEventListener("input", vIOVforFields);
  calculateButton.addEventListener("pointerover", visibleIndicatorOfValidation);
  calculateButton.addEventListener("pointerout", visibleIndicatorOfValidationStop);
  numberInput.addEventListener("input", () => {
    if (isHovering) {
      visibleIndicatorOfValidation();
    }
  });

  calculationFields = document.querySelectorAll('#numberInput input[type="number"]'); // turned this to global
});

// STYLE // Visible validation by style
function visibleIndicatorOfValidation() {
  isHovering = true;
  let allFilled = true;

  calculationFields.forEach(input => {
    if (input.value.trim() === "") {
      allFilled = false;
    }
  });

  if (!allFilled) {
    calculateButton.style.backgroundColor = '#ff0000' ;
    calculateButton.style.border = '2px solid #ff0000';
    calculateButton.style.color = 'black';
  } else {
    calculateButton.style.backgroundColor = '#22ff00';
    calculateButton.style.border = '2px solid #22ff00';
    calculateButton.style.color = 'black';
  }
}

// STYLE // Validate visible fields
function vIOVforFields(event) {
  const field = event.target;
  if (field.matches('input[type="number"]')) {
    if (field.value.trim() === "") {
      field.style.border = '2px solid #ff0000';
    } else {
      field.style.border = '2px solid #22ff00';
    }
  }
}

// STYLE
function visibleIndicatorOfValidationStop() { // to stop the color from being stuck and change back to its original one
  isHovering = false;
  calculateButton.style.transition = 'background-color 0.5s, border 0.5s, color 0.5s';
  calculateButton.style.backgroundColor = '';
  calculateButton.style.border = '';
  calculateButton.style.color = '';
}

// STYLE // Clear validation styles
function vIOVforFieldsStop(event) {
  const field = event.target;
  if (field.matches('input[type="number"]')) {
    field.style.transition = 'border 0.5s';
    field.style.border = '';
  }
}

// SCRIPT // The actual validation stuff
function requiredInputValidation(e) { e.preventDefault();
  let allFilled = true;

  calculationFields.forEach(input => {  
    if (input.value.trim() === "") {
      allFilled = false;
    }
  });

  if (!allFilled) {
    if (isEnglish) {
      alert("Please fill all empty queries!");
    } else {
      alert("Lütfen boş alanları doldurun!");
    }
  } else {
    calculate();
  }
}