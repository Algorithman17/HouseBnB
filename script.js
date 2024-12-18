const anounceList=document.getElementById("anounce-list");
const URL='http://localhost:3000/anounces'

fetch(URL)

.then((Response)=>Response.json())

.then((data)=>{
    console.log(data);
    data.forEach(anounce => {
       const list=document.createElement('div');
        list.className='list'

        list.innerHTML+=`<div class="photoDiv"><img src="${anounce.photo}" alt="photo"></div>
    <h3>${anounce.title}</h3>
    <p class="para">${anounce.place}</p>
    <p class="para">Hébergement: ${anounce.accommodates} personnes</p>
    <p class="para">Prix par nuit:${anounce.price_per_night}</p>`
    anounceList.appendChild(list);
    })
}
)
