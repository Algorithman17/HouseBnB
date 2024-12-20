import { createMap } from "./map.js";

export function createCards() {
    const main = document.createElement("main");
    document.querySelector("body").appendChild(main)
    const cards = document.createElement("div")
    cards.className = "cards"
    const URL=/*'http://localhost:3000/anounces'*/"/dataBase/bddHomeBnB.json"

    fetch(URL)
    .then((Response) => Response.json())
    .then((data)=>{
        data.anounces.forEach(anounce => {
            const card = document.createElement('div');
            card.className = 'card'

            card.innerHTML +=`
            <div class="photoDiv">
                <img src="/pictures/${anounce.photo}" alt="photo">
            </div>
            <div class="infos">
                <h3>${anounce.title}</h3>
                <p>${anounce.place}</p>
                <p>Hébergement: ${anounce.accommodates} personnes</p>
                <p class="price"><span>${anounce.price_per_night}€</span> / nuit</p>
            </div>
            `
            cards.appendChild(card);
            main.appendChild(cards)
        })
    })

    main.innerHTML += `
        <div class="open-map" id="open-map">
            <a href="#map">
                <p>Afficher la carte <img src="/icones/map.svg" alt=""></p>
            </a>
        </div>`
    
    const openMap = document.getElementById("open-map")
    openMap.addEventListener("click", () => {
        createMap(main, cards)
        main.removeChild(openMap)
    })
}