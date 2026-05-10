function loadImage(event) {
  document.getElementById("avatarPreview").src =
    URL.createObjectURL(event.target.files[0]);
}

function buyBook(btn) {
  btn.innerText = "Purchased ✅";
  btn.disabled = true;
}

function toggleDarkMode() {
  document.body.classList.toggle("dark");
}
const ctx = document.getElementById('statsChart');

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Books', 'Pages'],
    datasets: [{
      data: [20, 250],
      backgroundColor: ['#541308', '#7b2d26'],
      borderRadius: 6
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false, /*  مهم */
    plugins: {
      legend: { display: false }
    },
    scales: {
      x: { display: false },
      y: { display: false }
    }
  }
});