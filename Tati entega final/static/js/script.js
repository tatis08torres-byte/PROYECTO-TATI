function enviarMensaje() {

    const nombre = document.querySelector('input[placeholder="Tu nombre"]').value;
    const correo = document.querySelector('input[placeholder="tucorreo@gmail.com"]').value;
    const mensaje = document.querySelector('textarea').value;

    if (nombre === "" || correo === "" || mensaje === "") {
        alert("Por favor, completa todos los campos. 💕");
        return;
    }

    alert("¡Gracias por escribirnos, " + nombre + "! 💕 Hemos recibido tu mensaje.");

    document.querySelector('input[placeholder="Tu nombre"]').value = "";
document.querySelector('input[placeholder="tucorreo@gmail.com"]').value = "";
document.querySelector('textarea').value = "";

}
function iniciarSesion() {
    alert("La función de inicio de sesión estará disponible próximamente. 💕");
}


// Marcar automáticamente la sección activa del menú

const secciones = document.querySelectorAll("section[id]");
const enlacesMenu = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {

    let seccionActual = "";

    secciones.forEach(seccion => {

        const posicion = seccion.offsetTop - 150;

        if (window.scrollY >= posicion) {
            seccionActual = seccion.getAttribute("id");
        }

    });

    enlacesMenu.forEach(enlace => {

        enlace.classList.remove("active");

        if (enlace.getAttribute("href") === "#" + seccionActual) {
            enlace.classList.add("active");
        }

    });

});