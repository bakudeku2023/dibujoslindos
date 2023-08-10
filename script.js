/* Este es el listado de la información de las cartas  */
const listadoCartas = [
    {
        id: 1,
        nombre: "dibujos de chicas",
        imagen: "https://i.pinimg.com/550x/b8/fe/b1/b8feb156c8513c6296870b88c39ee146.jpg",
        descripcion: " son dibujos echo a lapiz muy lindos",
    },
    {
        id: 2,
        nombre: ":D",
        imagen: "https://wonder-day.com/wp-content/uploads/2022/05/wonder-day-cute-drawings-portraits-55.jpg",
        descripcion: "son dibujos echo a lapiz muy lindos",
    },
    {
        id: 3,
        nombre: "7w7",
        imagen: "https://i.pinimg.com/originals/00/7b/3c/007b3cde820ff2b2f327ed0bbd266d8c.jpg",
        descripcion: "son dibujos echo a lapiz muy lindos",
    },
    {
        id: 4,
        nombre: "0w0",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3EHkZBiktnOoyXUXQQ1N6o-0jge4Qp1pM3Q&usqp=CAU",
        descripcion: "son dibujos echo a lapiz muy lindos",
    },
    {
        id: 5,
        nombre: ":P",
        imagen: "https://i.pinimg.com/236x/46/e1/87/46e1874280e8b0976f1abfad70980ba2.jpg",
        descripcion: "son dibujos echo a lapiz muy lindos",
    },
]


/* Selección de los NODOS HTML (etiquetas/elementos html) */
const contenedorCartas = document.querySelector(".listadoCartas")


/* Función que recorre el listado de las cartas */
listadoCartas.forEach(
    () => contenedorCartas.innerHTML += `
    <article class="card">
        <img src="" alt="dibujitos lindos :D">
        <div class="info">
            <h2>Carta 2</h2>
            <p>Descripción del gatito</p>
        </div>
    </article>
    `
)



