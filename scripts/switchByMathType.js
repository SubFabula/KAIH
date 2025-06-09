document.addEventListener("DOMContentLoaded", () => {
  calculationFieldsbyCount = document.querySelectorAll('#countInputs input', '#countInputs select');
  calculationFieldsbyBill = document.querySelectorAll('#billInputs input', '#billInputs select');

  document.getElementById("byCount").addEventListener("click", () => {
    calculationMode = "byCount";

    document.getElementById("byCount").classList.remove("not-selected");
    document.getElementById("byCount").classList.add("selected");
    document.getElementById("byBill").classList.remove("selected");
    document.getElementById("byBill").classList.add("not-selected");
    
    document.getElementById("countInputs").style.display = "block";
    calculationFieldsbyCount.disabled = false;
    document.getElementById("billInputs").style.display = "none";
    calculationFieldsbyBill.disabled = true;
  });

  document.getElementById("byBill").addEventListener("click", () => {
    calculationMode = "byBill";

    document.getElementById("byBill").classList.remove("not-selected");
    document.getElementById("byBill").classList.add("selected");
    document.getElementById("byCount").classList.remove("selected");
    document.getElementById("byCount").classList.add("not-selected");

    document.getElementById("countInputs").style.display = "none";
    calculationFieldsbyCount.disabled = true;
    document.getElementById("billInputs").style.display = "block";
    calculationFieldsbyBill.disabled = false;
  });
});