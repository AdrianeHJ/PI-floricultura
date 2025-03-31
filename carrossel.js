
document.addEventListener("DOMContentLoaded", function () {
    let index = 0;
    const carrossel = document.querySelector(".carrossel");
    const images = document.querySelectorAll(".carrossel-imagem");
    const total = images.length;

    function showNextImage() {
        index = (index + 1) % total; // volta para o começo
        carrossel.style.transform = `translateX(-${index * 100}vw)`;
        carrossel.style.transition = "transform 0.5s ease-in-out"; // estilo de transição
    }

    setInterval(showNextImage, 3000); // troca de imagens 3 em 3 segundos
});
