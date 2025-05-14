document.addEventListener("DOMContentLoaded", function () {
  const perguntas = document.querySelectorAll(".js-accordion dt");
  
  perguntas.forEach(pergunta => {
    pergunta.addEventListener("click", () => {
      const resposta = pergunta.nextElementSibling;

      // Alternar visibilidade da resposta
      resposta.classList.toggle("active");

      // Fechar outros abertos
      document.querySelectorAll(".js-accordion dd").forEach(outraResposta => {
        if (outraResposta !== resposta) {
          outraResposta.classList.remove("active");
        }
      });
    });
  });
});


const accordions = document.querySelectorAll('.js-accordion dt');

accordions.forEach((dt) => {
    dt.addEventListener('click', () => {
        dt.classList.toggle('active');
        const dd = dt.nextElementSibling;
        dd.classList.toggle('active');
    });
});
