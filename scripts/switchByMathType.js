document.addEventListener("DOMContentLoaded", () => {
  globalThis.calculationMode = "byCount";

  globalThis.calculationFieldsbyCount = document.querySelectorAll('#countInputs input[type="number"]');
  globalThis.calculationFieldsbyBill = document.querySelectorAll('#billInputs input[type="number"]');

  document.getElementById("byCount").addEventListener("click", () => {
    calculationMode = "byCount";

    document.getElementById("byCount").classList.remove("not-selected");
    document.getElementById("byCount").classList.add("selected");
    document.getElementById("byBill").classList.remove("selected");
    document.getElementById("byBill").classList.add("not-selected");
    
    document.getElementById("countInputs").style.display = "block";
    /* setDisabled(window.calculationFieldsbyCount, false); */
    document.getElementById("billInputs").style.display = "none";
    /* setDisabled(window.calculationFieldsbyBill, true); */

    calculateButton.classList.add("byCountCB");
    calculateButton.classList.remove("byBillCB");
  });

  document.getElementById("byBill").addEventListener("click", () => {
    calculationMode = "byBill";

    document.getElementById("byBill").classList.remove("not-selected");
    document.getElementById("byBill").classList.add("selected");
    document.getElementById("byCount").classList.remove("selected");
    document.getElementById("byCount").classList.add("not-selected");

    document.getElementById("countInputs").style.display = "none";
    /* setDisabled(window.calculationFieldsbyCount, true); */
    document.getElementById("billInputs").style.display = "block";
    /* setDisabled(window.calculationFieldsbyBill, false); */

    calculateButton.classList.remove("byCountCB");
    calculateButton.classList.add("byBillCB");
  });
});