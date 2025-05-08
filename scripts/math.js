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

  const coalResult = coal * coalFactor;
  const electricResult = electric * electricFactor;
  const fuelResult = fuel * fuelFactor;
  const gasResult = gas * gasFactor;

  const globalResult =
    coalResult +
    electricResult +
    flightResult +
    fuelResult +
    gasResult;

  const resultDiv = document.getElementById("result")
  const chartDiv = document.getElementById("chart-container")
  resultDiv.style.display = `block`;
  chartDiv.style.display = `flex`;

  const ctx = document.getElementById('carbonChart').getContext('2d');
  if (window.pieChart) {
      window.pieChart.destroy();
  }
  window.pieChart = new Chart(ctx, {
      type: 'pie',
      data: {
          labels: ['Kömür', 'Elektrik', 'Ulaşım(Hava/Uçak)', 'Yakıt', 'Doğalgaz'],
          datasets: [{
              data: [coalResult, electricResult, flightResult, fuelResult, gasResult],
              backgroundColor: [
                '#3b3b3b',
                '#a8e100',
                '#a2e3ff',
                '#903700',
                '#1500ff',
              ],
              borderWidth: 1
          }]
      },
      options: {
          responsive: true,
          plugins: {
              legend: {
                  position: 'right',
              },
              tooltip: {
                  callbacks: {
                      label: function(context) {
                          const label = context.label || '';
                          const value = context.raw || 0;
                          const total = context.dataset.data.reduce((a, b) => a + b, 0);
                          const percentage = Math.round((value / total) * 100);
                          return `${label}: ${value} kg CO₂ (${percentage}%)`;
                      }
                  }
              }
          }
      }
  });

  const totalCF = (globalResult).toFixed(2);
  const turkeyAvg = 4500;
  const unAvg = 7000;
  const annualCF = (globalResult * 12);
  const treesNeeded = Math.ceil((annualCF / 21));

  document.getElementById("result").innerHTML =
    isEnglish
      ? `null`
      : `<h3>Toplam Aylık Karbon Ayak İzi: <strong>${totalCF} kg CO₂</strong></h3>
        <h4>Yıllık Tahmini Karbon Ayak İzi: <strong>${annualCF} kg CO₂</strong></h4>`;
      
  document.getElementById("infoBox").innerHTML = 
    isEnglish
      ? `null`
      : `
          <p><strong>Türkiye ortalaması:</strong> ${turkeyAvg} kg CO₂/yıl</p>
          <p><strong>BM kişi başı ortalaması:</strong> ${unAvg} kg CO₂/yıl</p>
          <p><strong>Sizin ortalamanız:</strong> ${annualCF} kg CO₂/yıl</p>
          <p><strong>Karbon ayak izinizi dengelemek için yaklaşık:</strong> ${treesNeeded} ağaç dikmeniz gerekir.</p>
         <p>${annualCF < turkeyAvg ? "✅ Türkiye ortalamasının altındasınız." : "⚠️ Türkiye ortalamasının üzerindesiniz."}</p>
        `;

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