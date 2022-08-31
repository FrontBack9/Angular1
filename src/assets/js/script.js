
// jQuery
$(document).ready(function () {
    // Todas as funções do jQuery

    $(".btn-buy").click(function(){
        alert("Este produto não está disponível");
    });

       
});


function abreFechaMenu() {
    // navbar -tag nav
    let navbar = document.querySelector(".menu");
    navbar.classList.toggle("mostraEscondeMenu");
    // console.log(navbar);
}