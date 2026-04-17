/* 1. Inicializa o gráfico (Chart.js) assim que a DOM carregar */
document.addEventListener("DOMContentLoaded", function () {
  const ctx = document.getElementById("yearlyChart").getContext("2d");
  new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["2021", "2022", "2023"],
      datasets: [
        {
          data: [343000, 373000, 384000],
          backgroundColor: "#D9B558",
          borderColor: "#D9B558",
          borderWidth: 1,
          borderRadius: 4,
        },
      ],
    },
    options: {
      animation: {
        duration: 1500,
        easing: "easeInOutQuad",
      },
      plugins: {
        legend: { display: false },
        title: { display: false },
      },
      scales: {
        x: {
          grid: { display: false },
          ticks: {
            font: {
              family: "Montserrat",
              size: 14,
            },
          },
        },
        y: {
          display: true,
        },
      },
    },
  });
});

/* 2. Máscara de Telefone e Placa */
const phoneInput = document.getElementById("pwrCltPhn");
phoneInput.addEventListener("input", function (e) {
  let x = e.target.value
    .replace(/\D/g, "")
    .match(/(\d{0,2})(\d{0,5})(\d{0,4})/);
  e.target.value = !x[2]
    ? x[1]
    : "(" + x[1] + ") " + x[2] + (x[3] ? "-" + x[3] : "");
});

const plateInput = document.getElementById("pwrVhclPlt");
plateInput.addEventListener("input", function (e) {
  e.target.value = e.target.value.replace(/[^a-zA-Z0-9]/g, "").toUpperCase();
});

/* 3. Simulação de Envio do Formulário (CRM) */
function submitForm(event) {
  event.preventDefault();

  const btn = event.target.querySelector('button[type="submit"]');
  const originalText = btn.innerText;

  btn.innerText = "Salvando...";
  btn.style.opacity = "0.7";

  setTimeout(() => {
    btn.innerText = "Simulação enviada com sucesso!";
    btn.style.backgroundColor = "#25D366"; // Verde
    btn.style.opacity = "1";

    event.target.reset();

    setTimeout(() => {
      btn.innerText = originalText;
      btn.style.backgroundColor = "#177ef3";
    }, 3000);
  }, 1500);
}
