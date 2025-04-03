function updateTime() {
  const now = new Date();
  document.getElementById('timestamp').textContent = now.toLocaleString();
}
setInterval(updateTime, 1000);

function loadJSON() {
  fetch('example.json')
    .then(response => response.json())
    .then(data => {
      document.getElementById('json-output').textContent = JSON.stringify(data, null, 2);
    })
    .catch(err => {
      document.getElementById('json-output').textContent = 'Error loading JSON: ' + err.message;
    });
}

document.addEventListener("DOMContentLoaded", () => {
  const location = document.getElementById("location");
  const country = localStorage.getItem("x-geo-country");
  if (country) {
    location.textContent = `Served near: ${country}`;
  }
});
