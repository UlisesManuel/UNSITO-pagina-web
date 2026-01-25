function loadComponents() {
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header-placeholder').innerHTML = data;
            setActiveLink(); // Marcar link activo
        });
    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-placeholder').innerHTML = data;
        });
}


function setActiveLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'UNSITO.html';
    const links = document.querySelectorAll('.nav-menu a');
    
    links.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
}
document.addEventListener('DOMContentLoaded', loadComponents);



let index = 0;
const slides = document.querySelectorAll(".carousel-inner .noticia");
const total = slides.length;
const carouselInner = document.querySelector(".carousel-inner");
let intervalo = setInterval(moverCarousel, 4000); // 4 segundos

function moverCarousel(){
    index = (index + 1) % total;
    carouselInner.style.transform = `translateX(-${index * 100}%)`;
}

/* Pausar cuando el mouse está encima */
carouselInner.addEventListener("mouseenter", () => {
    clearInterval(intervalo);
});

/* Reanudar cuando el mouse sale */
carouselInner.addEventListener("mouseleave", () => {
    intervalo = setInterval(moverCarousel, 4000);
});


function validarAcceso() {
    var usuario = document.getElementById("matricula").value;
    var contraseña = document.getElementById("pass").value;
    if (usuario == "202010010" && contraseña == "1234") {
        console.log("Acceso para: " + usuario);
        //<a href="formulario.html"></a>
        window.location.href="formulario.html"
    } else {
        alert("Usuarii o contraseña incorrecta");
        console.log("Acceso denegado.");
    }
}
