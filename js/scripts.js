const apiUrl = "https://api.coalitiontechnologies.com/patients";

async function fetchPatientData() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log('API Response:', data); // Debug log

    const jessica = data.find(patient => patient.name === "Jessica Taylor");
    if (jessica) {
      populateUI(jessica);
    } else {
      console.log("Jessica Taylor data not found.");
    }
  } catch (error) {
    console.error("Error fetching patient data:", error);
  }
}

function populateUI(patient) {
  console.log('Populating UI with:', patient); // Debug log
  document.querySelector('#age').textContent = patient.age || 'N/A';
  document.querySelector('#gender').textContent = patient.gender || 'N/A';
  renderChart(patient.bloodPressureData || []);
}

function renderChart(data) {
  const ctx = document.getElementById('bloodPressureChart').getContext('2d');
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: data.map(item => item.year),
      datasets: [{
        label: 'Blood Pressure',
        data: data.map(item => item.value),
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 2,
        fill: false,
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          display: true,
          position: 'top',
        },
      },
    },
  });
}

fetchPatientData();
