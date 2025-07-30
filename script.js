
function suscribirse() {
    const correo = prompt("Ingresa tu correo para suscribirte:");
    if (correo) {
        localStorage.setItem('suscriptor', correo);
        alert("¡Gracias por suscribirte!");
    }
}

document.addEventListener('DOMContentLoaded', () => {
    fetch("articulos/listado.json")
    .then(response => response.json())
    .then(data => {
        const container = document.getElementById("articulos-container");
        data.forEach(art => {
            container.innerHTML += `
            <article>
                <h2>${art.titulo}</h2>
                <img src="imagenes/${art.imagen}" alt="${art.titulo}" width="300">
                <p>${art.descripcion}</p>
                <a href="articulos/${art.archivo}">Leer más</a>
            </article>
            `;
        });
    });
});
