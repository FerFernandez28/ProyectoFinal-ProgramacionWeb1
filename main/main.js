window.addEventListener("scroll", function(){
    var header = this.document.querySelector("header");
    header.classList.toggle("abajo",window.scrollY>0);
})

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
                
                imageUrl: "../img/darth-vader-felicitandote.webp",
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