// =========================================
// RARE NEXUS TCG
// JAVASCRIPT PRINCIPAL
// =========================================


// Elementos do menu

const menuButton = document.getElementById("menuButton");
const closeMenu = document.getElementById("closeMenu");
const mobileMenu = document.getElementById("mobileMenu");
const menuOverlay = document.getElementById("menuOverlay");


// =========================================
// ABRIR MENU
// =========================================

function openMenu() {
    mobileMenu.classList.add("active");
    menuOverlay.classList.add("active");

    document.body.style.overflow = "hidden";
}


// =========================================
// FECHAR MENU
// =========================================

function closeMobileMenu() {
    mobileMenu.classList.remove("active");
    menuOverlay.classList.remove("active");

    document.body.style.overflow = "";
}


// =========================================
// CLIQUE NO BOTÃO ☰
// =========================================

menuButton.addEventListener("click", openMenu);


// =========================================
// CLIQUE NO X
// =========================================

closeMenu.addEventListener("click", closeMobileMenu);


// =========================================
// CLIQUE NO FUNDO ESCURO
// =========================================

menuOverlay.addEventListener("click", closeMobileMenu);


// =========================================
// TECLA ESC
// =========================================

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {
        closeMobileMenu();
    }

});
