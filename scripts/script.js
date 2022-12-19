const INFO_CONTAINER = document.querySelector(".header__info");

async function getFish() {
    try {
        const res = await fetch('https://www.fishwatch.gov/api/species');
        const data = await res.json();
        return data;

    } catch (error) {
        console.log(error)
    }
}

async function printFish() {
    const fishesData = await getFish();
    let fishImages = fishesData.map(element => element["Species Illustration Photo"].src)
    let fishNames = fishesData.map(element => element["Species Name"])
    const randomFish = Math.floor(Math.random() * fishImages.length);
    INFO_CONTAINER.innerHTML = `<div class="d-flex flex-column align-items-center justify-content-center"><h1 class="header__info-name">${fishNames[randomFish]}</h1>
    <div class="header__info-image d-flex align-items-center justify-content-center">
    <img src="${fishImages[randomFish]}" class=" justify-content-center" alt="... ">
    </div>
    </div>`
}
