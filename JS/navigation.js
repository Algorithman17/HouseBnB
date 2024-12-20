import { createCards } from "./main.js"

export function createNavigation() {
    const nav = document.createElement("nav")
    document.querySelector("body").appendChild(nav)
    const navContain = 
    `
        <div class="logo-container">
            <a href="#">
                <img src="/icones/logo.svg" alt="logo"> 
                HomeBnB
            </a>
        </div>
        <div class="search-bar">
            <div class="search-destination">
                <label for="destination">Ville</label>
                <input type="search" name="destination" id="destination" for="nav-search" required>
            </div>
            <div class="search-arrival">
                <label for="arrival">Arrivée</label>
                <input type="date" name="arrival" id="arrival">
            </div>
            <div class="search-leaving">
                <label for="leaving">Départ</label>
                <input type="date" name="leaving" id="leaving">
            </div>
            <div class="searching">
                <input type="submit" value="" id="nav-search" name="nav-search">
            </div>
        </div>
        <div class="select-profil">
            <select>
                <option selected hidden></option>
                <option value="sign-in">Se connecter</option>
                <option value="sign-up">Créer un compte</option>
            </select>
        </div>
    `
    nav.innerHTML = navContain;
    
    const destinationInput = document.getElementById('destination');
    const arrivalInput = document.getElementById('arrival');
    const leavingInput = document.getElementById('leaving');
    const submitButton = document.getElementById('nav-search');

    submitButton.addEventListener('click', (event) => {
        event.preventDefault();
        const main = document.querySelector("main")
        const searchData = {
            destination: destinationInput.value,
            arrival: arrivalInput.value,
            leaving: leavingInput.value
        };

        const URL=/*'http://localhost:3000/anounces'*/"/dataBase/bddHomeBnB.json"
        fetch(URL)
            .then((Response) => Response.json())
            .then((data)=>{
                console.log(data)
                const cards = document.createElement("div")
                cards.className = "cards"
                main.appendChild(cards)

                data.anounces.forEach(anounce => {
                    const searchDestination = searchData.destination
                    const city = anounce.place.split(",")[0]
                    
                    if(searchDestination.toLowerCase() == city.toLowerCase()) {
                        main.innerHTML = `
                            <div class="filter">
                                <input type="button" value="X ${city}" id="filter-destination">
                            </div>
                            `

                        const card = document.createElement('div');
                        card.className = 'card'
                        card.innerHTML += `
                            <div class="photoDiv">
                                <img src="/pictures/${anounce.photo}" alt="photo">
                            </div>
                            <div class="infos">
                                <h3>${anounce.title}</h3>
                                <p>${anounce.place}</p>
                                <p>Hébergement: ${anounce.accommodates} personnes</p>
                                <p class="price"><span>${anounce.price_per_night}€</span> / nuit</p>
                            </div>`

                        cards.appendChild(card);
                        main.appendChild(cards);
                    }
                })

                const filterDestination = document.getElementById("filter-destination")
                filterDestination.addEventListener("click", () => {
                    document.querySelector("body").removeChild(main)
                    main.innerHTML = createCards()
                })
        })   
    })
    
}
