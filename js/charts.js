function renderChart(data) {
    const ctx = document.getElementById('bloodPressureChart').getContext('2d');
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: data.map(d => d.year),
        datasets: [{
          label: 'Blood Pressure',
          data: data.map(d => d.value),
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 2,
        }],
      },
      options: {
        responsive: true,
      },
    });
  }
  