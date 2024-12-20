const anounceList=document.getElementById("anounce-list");
const URL='http://localhost:3000/anounces'

fetch(URL)

.then((Response)=>Response.json())

.then((data)=>{
    console.log(data);
    data.forEach(anounce => {
       const list=document.createElement('div');
        list.className='list'

        list.innerHTML+=`<div class="photoDiv">
        <img src="./pictures/${anounce.photo}" alt="photo">
        </div>
    <div class="infos" >
    <h3>${anounce.title}</h3>
    <p class="para">${anounce.place}</p>
    <p class="para">Hébergement: ${anounce.accommodates} personnes</p>
    <p class="para-prix">${anounce.price_per_night} <i class="fa-solid fa-euro-sign"></i>/nuit</p>
    </div>`
    anounceList.appendChild(list);

    list.addEventListener('click',function(){
        window.location.href=`./detail.html?id=${anounce.id}`
    })
    })
}
)