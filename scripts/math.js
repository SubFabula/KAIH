document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("calculateButton");
  button.addEventListener("click", calculate);
});

function calculate() {
  const coal = parseFloat(document.getElementById("coalInput").value) || 0;
  const electric = parseFloat(document.getElementById("electricInput").value) || 0;
  const flight = parseFloat(document.getElementById("flightInput").value) || 0;
  const fuel = parseFloat(document.getElementById("fuelInput").value) || 0;

  // Basic conversion factors (placeholders — update these later as needed)
  const coalFactor = 2.5;       // kg CO₂ per kg coal
  const electricFactor = 0.475; // kg CO₂ per kWh electricity
  const flightFactor = 145;     // kg CO₂ per round trip
  const fuelFactor = 3.6;       // kg CO₂ per liter gasoline

  globalResult =
    (coal * coalFactor) +
    (electric * electricFactor) +
    (flight * flightFactor) +
    (fuel * fuelFactor);

  document.getElementById("result").innerText =
    `Tahmini Karbon Ayak İzi: ${globalResult.toFixed(2)} kg CO₂/yıl`;

  reward();
}
