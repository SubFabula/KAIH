function calculate(result) {
  const coal = parseFloat(document.getElementById("coalInput").value) || 0;
  const electric = parseFloat(document.getElementById("electricInput").value) || 0;
  const flight = parseFloat(document.getElementById("flightInput").value) || 0;
  const fuel = parseFloat(document.getElementById("fuelInput").value) || 0;
  const gas = parseFloat(document.getElementById("gasInput").value) || 0;

  const flightUnit = document.getElementById("flightUnit").value;
  const fuelType = document.getElementById("fuelType").value;

  // CO₂ Factors
  const coalFactor = 2.45;           // kg CO₂ / kg coal (Turkey/IPCC avg)
  const electricFactor = 0.41;       // kg CO₂ / kWh
  const flightFactorPerTrip = 145;   // kg CO₂ / round trip
  const flightFactorPerKm = 0.18;    // kg CO₂ / km
  const fuelFactor = fuelType === "diesel" ? 2.68 : 2.33;
  const gasFactor = 2.05;            // kg CO₂ / m³

  const flightResult = (flightUnit === "trip")
    ? (flight * flightFactorPerTrip)
    : (flight * flightFactorPerKm);

  const globalResult =
    (coal * coalFactor) +
    (electric * electricFactor) +
    flightResult +
    (fuel * fuelFactor) +
    (gas * gasFactor);

  document.getElementById("result").innerText =
    `Tahmini Karbon Ayak İzi: ${globalResult.toFixed(2)} kg CO₂/yıl`;

  reward(globalResult);
}
