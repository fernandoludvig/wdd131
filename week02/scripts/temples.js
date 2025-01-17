// Exibir o ano atual e a última modificação
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("last-modified").textContent = document.lastModified;

function toggleMenu() {
    const menu = document.querySelector(".menu");
    menu.style.display = menu.style.display === "flex" ? "none" : "flex";
}

// Garante que o menu é exibido corretamente ao redimensionar
window.addEventListener("resize", () => {
    const menu = document.querySelector(".menu");
    const hamburger = document.querySelector(".hamburger");

    if (window.innerWidth >= 600) {
        menu.style.display = "flex"; // Mostra o menu em telas maiores
        hamburger.style.display = "none"; // Esconde o botão hambúrguer
    } else {
        menu.style.display = "none"; // Oculta o menu em telas menores
        hamburger.style.display = "block"; // Exibe o botão hambúrguer
    }
});
