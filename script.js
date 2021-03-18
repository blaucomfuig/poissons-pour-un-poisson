const btnPoisson = document.getElementById("poisson")


const PEZ = document.querySelector(".item")


btnPoisson.addEventListener('click', () => {
    getPececito()
})


function getPececito() {
    const getPececitoAsync = async() => {
        try {
            const res = await fetch('fishes.json')
            const data = await res.json()

            imagenPececito = data.map(element => element["Species Illustration Photo"].src)
            nombrePececito = data.map(element => element["Species Name"])

            const randomPececito = Math.floor(Math.random() * imagenPececito.length);
            console.log(PEZ);
            PEZ.innerHTML = `<div class="d-flex flex-column align-items-center justify-content-center"><h1 class="nombre-pez">${nombrePececito[randomPececito]}</h1>
            <div class="item-imagen d-flex align-items-center justify-content-center">
            <img src="${imagenPececito[randomPececito]}" class="pez justify-content-center" alt="... ">
            </div></div>`


        } catch (error) {
            console.log(error)
        }
    }
    getPececitoAsync()

}


ScrollReveal().reveal('.pregunta', {
    delay: 500,
    duration: 1500,
    origin: "top",
    distance: "200px"
})

ScrollReveal().reveal('.btn', {
    delay: 1000,
    duration: 2500,

})