//pour logout
const logout=document.getElementById("logout");

logout.addEventListener('click',()=>{
    window.location.href = "indexlogin.html";
})



// ajouter les nouvelle annonces

const ajouter=document.getElementById('ajouter');

ajouter.addEventListener('click',()=>{
    const section=document.querySelector('section');
      section.style.display='flex';
    document.getElementById("homebnbForm").addEventListener("submit", async (event) => {
        event.preventDefault(); // Empêcher le rechargement de la page
    
        // Récupérer les données du formulaire
        const title = document.getElementById("title").value;
        const place = document.getElementById("place").value;
        const rooms = parseInt(document.getElementById("rooms").value);
        const available = document.getElementById("available").value === "true";
        const accommodates = parseInt(document.getElementById("accommodates").value);
        const parking = document.getElementById("parking").value;
        const amenities = document.getElementById("amenities").value.split(",").map(item => item.trim());
        const photo = document.getElementById("photo").value;
        const price_per_night = parseFloat(document.getElementById("price_per_night").value);
        const month = document.getElementById("month").value;
        const days = document.getElementById("days").value.split(",").map(day => parseInt(day.trim()));
    
    
        const formData = {
            userId:1,
            id: Math.random().toString(36).substr(2, 9), // Generate a random ID
            title,
            place,
            rooms,
            available,
            accommodates,
            parking,
            amenities,
            photo,
            price_per_night,
            availability_range: {
              month,
              days
            }
        }
        console.log("Form Data:", formData);
              
    
    
        // Envoyer une requête POST vers l'API (URL fictive pour cet exemple)
        try {
            const response = await fetch("http://localhost:3000/anounces", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });
    
            if (response.ok) {
                const result = await response.json();
                document.getElementById("message").innerText = "Annonce ajoutée avec succès!";
                console.log("API Response:", result);
    
            } else {
                throw new Error("Erreur lors de l'envoi des données");
            }
        } catch (error) {
            console.error("Erreur:", error);
            document.getElementById("message").innerText = "Une erreur s'est produite. Veuillez réessayer.";
        }


    
})

})

fetch('http://localhost:3000/anounces')
.then((data)=>{
    data.forEach(element => {
        console.log(element.userId);
    });
   
})