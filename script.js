document.getElementById('reservaForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData.entries());

  try {
    const response = await fetch('http://localhost:3001/api/reserva', { // 🔁 usa la ruta completa con puerto
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    const result = await response.json();
    document.getElementById('respuesta').innerText = result.message;
  } catch (error) {
    console.error("Error enviando la reserva:", error);
    document.getElementById('respuesta').innerText = "Error al enviar la reserva.";
  }
});
