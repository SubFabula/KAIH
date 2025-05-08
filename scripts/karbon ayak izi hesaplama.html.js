function calculateCarbonFootprint() {
  const electricity = parseFloat(document.getElementById("electricity").value) || 0;
  const naturalGas = parseFloat(document.getElementById("naturalGas").value) || 0;
  const water = parseFloat(document.getElementById("water").value) || 0;
  const transport = parseFloat(document.getElementById("transport").value) || 0;

  // Basit çarpanlar (yaklaşık değerler)
  const electricityCF = electricity * 0.43; // kg CO2e
  const naturalGasCF = naturalGas * 2.2;
  const waterCF = water * 0.3;
  const transportCF = transport * 0.21;

  const totalCF = (electricityCF + naturalGasCF + waterCF + transportCF).toFixed(2);
  const turkeyAvg = 4500;
  const unAvg = 7000;
  const annualCF = (totalCF * 12).toFixed(2);
  const treesNeeded = Math.ceil((annualCF / 21));

  document.getElementById("result").innerHTML = `
      <h3>Toplam Aylık Karbon Ayak İzi: <strong>${totalCF} kg CO₂</strong></h3>
      <h4>Yıllık Tahmini Karbon Ayak İzi: <strong>${annualCF} kg CO₂</strong></h4>
  `;

  document.getElementById("infoBox").innerHTML = `
      <p><strong>Türkiye ortalaması:</strong> ${turkeyAvg} kg CO₂/yıl</p>
      <p><strong>BM kişi başı ortalaması:</strong> ${unAvg} kg CO₂/yıl</p>
      <p><strong>Sizin ortalamanız:</strong> ${annualCF} kg CO₂/yıl</p>
      <p><strong>Karbon ayak izinizi dengelemek için yaklaşık:</strong> ${treesNeeded} ağaç dikmeniz gerekir.</p>
      <p>${annualCF < turkeyAvg ? "✅ Türkiye ortalamasının altındasınız." : "⚠️ Türkiye ortalamasının üzerindesiniz."}</p>
  `;

  const ctx = document.getElementById('carbonChart').getContext('2d');
  if (window.pieChart) {
      window.pieChart.destroy();
  }
  window.pieChart = new Chart(ctx, {
      type: 'pie',
      data: {
          labels: ['Elektrik', 'Doğalgaz', 'Su', 'Ulaşım'],
          datasets: [{
              data: [electricityCF, naturalGasCF, waterCF, transportCF],
              backgroundColor: [
                  '#2ecc71',
                  '#3498db',
                  '#9b59b6',
                  '#e67e22'
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
}