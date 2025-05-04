document.addEventListener("DOMContentLoaded", () => {
  const calculateButton = document.getElementById("calculateButton");
  const submitCalculation = document.getElementById("calculateButton");
  const styleCalculation = document.getElementById("calculateButton");
  const styleCalculationStop = document.getElementById("calculateButton");
  submitCalculation.addEventListener("click", requiredInputValidation);
  styleCalculation.addEventListener("pointerover", visibleIndicatorOfValidation);
  styleCalculationStop.addEventListener("pointerout", visibleIndicatorOfValidationStop);

  calculationFields = document.querySelectorAll('#numberInput input[type="number"]'); // turned this to global
});

// Visible validation by style
function visibleIndicatorOfValidation() {
  let allFilled = true;

  calculationFields.forEach(input => {
    if (input.value.trim() === "") {
      allFilled = false;
    }
  });

  if (!allFilled) {
    calculateButton.style.backgroundColor = '#ff0000' ;
    calculateButton.style.color = 'black';
  } else {
    calculateButton.style.backgroundColor = '#22ff00';
    calculateButton.style.color = 'black';
  }
}

function visibleIndicatorOfValidationStop() { // to stop the color from being stuck and change back to its original one
  calculateButton.style.transition = 'background-color 0.5s, color 0.5s';
  calculateButton.style.backgroundColor = '';
  calculateButton.style.color = '';
}

// The actual validation stuff
function requiredInputValidation(e) { e.preventDefault();
  let allFilled = true;

  calculationFields.forEach(input => {
    if (input.value.trim() === "") {
      allFilled = false;
    }
  });

  if (!allFilled) {
    alert("Lütfen boş alanları doldurun!");
  } else {
    calculate(result);
  }
}