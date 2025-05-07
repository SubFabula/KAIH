document.addEventListener("DOMContentLoaded", () => {
  const switchMathDiv = document.getElementById("switch-math-type-div");
  const byCount = document.getElementById("byCount");
  const byBill = document.getElementById("byBill");
  byCount.addEventListener("click", switchToCount);
  byBill.addEventListener("click", switchToBill);
});

function calculate() {
  const coal = parseFloat(document.getElementById("coalInput").value) || 0;
  const electric = parseFloat(document.getElementById("electricInput").value) || 0;
  const flight = parseFloat(document.getElementById("flightInput").value) || 0;
  const fuel = parseFloat(document.getElementById("fuelInput").value) || 0;
  const gas = parseFloat(document.getElementById("gasInput").value) || 0;

  const flightUnit = document.getElementById("flightUnit").value;
  const fuelType = document.getElementById("fuelType").value;
  const gasUnit = document.getElementById("gasUnit").value;

  // CO₂ Factors
  const coalFactor = 2.45;           // kg CO₂ / kg coal (Turkey/IPCC avg)
  const electricFactor = 0.41;       // kg CO₂ / kWh
  const flightFactorPerTrip = 145;   // kg CO₂ / round trip
  const flightFactorPerKm = 0.18;    // kg CO₂ / km
  const fuelFactor = fuelType === "diesel" ? 2.68 : 2.33; // kg CO₂ / by diesel or fuel
  const gasFactor = gasUnit === "per-tank" ? 23.5 : 2.05; // kg CO₂ / per tank or m³

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
    isEnglish
      ? `Supposed Carbon Foot Print: ${globalResult.toFixed(2)} kg CO₂/year`
      : `Tahmini Karbon Ayak İzi: ${globalResult.toFixed(2)} kg CO₂/yıl`;

  reward(globalResult);
}

/*
// WIP - Math Type Switch (byCount / byBill!new)
function calculate(TEST) {
  if (mathType == byCount) {
    // --byCount START--
    const coal = parseFloat(document.getElementById("coalInput").value) || 0;
    const electric = parseFloat(document.getElementById("electricInput").value) || 0;
    const flight = parseFloat(document.getElementById("flightInput").value) || 0;
    const fuel = parseFloat(document.getElementById("fuelInput").value) || 0;
    const gas = parseFloat(document.getElementById("gasInput").value) || 0;
  
    const flightUnit = document.getElementById("flightUnit").value;
    const fuelType = document.getElementById("fuelType").value;
    const gasUnit = document.getElementById("gasUnit").value;
  
    // CO₂ Factors
    const coalFactor = 2.45;           // kg CO₂ / kg coal (Turkey/IPCC avg)
    const electricFactor = 0.41;       // kg CO₂ / kWh
    const flightFactorPerTrip = 145;   // kg CO₂ / round trip
    const flightFactorPerKm = 0.18;    // kg CO₂ / km
    const fuelFactor = fuelType === "diesel" ? 2.68 : 2.33; // kg CO₂ / by diesel or fuel
    const gasFactor = gasUnit === "per-tank" ? 23.5 : 2.05; // kg CO₂ / per tank or m³
  
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
      isEnglish
        ? `Supposed Carbon Foot Print: ${globalResult.toFixed(2)} kg CO₂/year`
        : `Tahmini Karbon Ayak İzi: ${globalResult.toFixed(2)} kg CO₂/yıl`;
  
    reward(globalResult);
    // --byCount END--
  } else if (condition) {
    // --byBill START--
    const coal = parseFloat(document.getElementById("coalBillInput").value) || 0;
    const electric = parseFloat(document.getElementById("electricBillInput").value) || 0;
    const flight = parseFloat(document.getElementById("flightBillInput").value) || 0;
    const fuel = parseFloat(document.getElementById("fuelBillInput").value) || 0;
    const gas = parseFloat(document.getElementById("gasBillInput").value) || 0;

    const flightUnit = document.getElementById("flightBillUnit").value;
    const fuelType = document.getElementById("fuelBillType").value;
    const gasUnit = document.getElementById("gasBillUnit").value;

    // TL Factors // THE EQUATIONS ARE NEEDED!!! DON'T FORGET ALL OF THEM ARE BILLED DIFFERENTLY AND HAVE TAX
    const coalFactor = 0;           // kg CO₂ / TL
    const electricFactor = 0;       // kg CO₂ / TL
    const flightFactorPerTrip = 0;   // kg CO₂ / TL
    const flightFactorPerKm = 0;    // kg CO₂ / TL
    const fuelFactor = fuelType === "diesel" ? 0 : 0; // kg CO₂ / TL
    const gasFactor = gasUnit === "per-tank" ? 0 : 0; // kg CO₂ / TL

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
      isEnglish
        ? `Supposed Carbon Foot Print: ${globalResult.toFixed(2)} kg CO₂/year`
        : `Tahmini Karbon Ayak İzi: ${globalResult.toFixed(2)} kg CO₂/yıl`;

    reward(globalResult);
    // --byBill END--
  }
} */