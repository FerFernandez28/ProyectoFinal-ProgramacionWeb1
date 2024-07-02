const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");
const menuIcon = document.querySelector(".menu-icon");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
    menuIcon.style.display = "none"; // Oculta el ícono del menú al abrirlo
});

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
    menuIcon.style.display = "block"; // Muestra el ícono del menú al cerrarlo
});

window.addEventListener("scroll", function(){
    var header = this.document.querySelector("header");
    header.classList.toggle("abajo",window.scrollY>0);
})

/* Funcion formulario */
const onClickNext = () => {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    if (name.length < 5) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'El nombre debe tener al menos 5 caracteres'
        });
        return;
    }
    
    if (name !== '' && email !== '') {
        if (email.indexOf('@') !== -1) {
            Swal.fire({
                title: "ya estas participando por un sorteo!gracias!",
                
                imageUrl: "./img/darth-vader-felicitandote.webp",
                imageWidth: 400,
                imageHeight: 400,
                imageAlt: "Custom image"
            }).then(() => {
                document.getElementById('contactForm').reset();
            });
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'El correo electrónico debe contener un @'
            });
        }
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'llene todo los campos'
        });
    }
};
