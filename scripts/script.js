const INFO_CONTAINER = document.querySelector(".header__info");

function getPececito() {
    const getPececitoAsync = async() => {
        try {
            const res = await fetch('https://www.fishwatch.gov/api/species')
            const data = await res.json()

            imagenPececito = data.map(element => element["Species Illustration Photo"].src)
            nombrePececito = data.map(element => element["Species Name"])

            const randomPececito = Math.floor(Math.random() * imagenPececito.length);
            INFO_CONTAINER.innerHTML = `<div class="d-flex flex-column align-items-center justify-content-center"><h1 class="header__info-name">${nombrePececito[randomPececito]}</h1>
            <div class="header__info-image d-flex align-items-center justify-content-center">
            <img src="${imagenPececito[randomPececito]}" class=" justify-content-center" alt="... ">
            </div>
            </div>`


        } catch (error) {
            console.log(error)
        }
    }
    getPececitoAsync()

}
