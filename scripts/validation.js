document.addEventListener("DOMContentLoaded", () => {
  const submitCalculation = document.getElementById("calculateButton");
  submitCalculation.addEventListener("click", requiredInputValidation);
});

function requiredInputValidation(e) {
  e.preventDefault();

  const inputFields = document.querySelectorAll('#numberInput input[type="number"]');
  let allFilled = true;

  inputFields.forEach(input => {
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
