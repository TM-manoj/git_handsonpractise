// Fetch message from backend
fetch("http://localhost:5000/api/message")
  .then(res => res.json())
  .then(data => {
    document.getElementById("backend-msg").innerText = data.message;
  });

// Send data to backend
function sendData() {
  const name = document.getElementById("name").value;

  fetch("http://localhost:5000/api/data", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ name })
  })
  .then(res => res.json())
  .then(data => {
    document.getElementById("response").innerText = data.reply;
  });
}
