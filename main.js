function mainAnimal() {
    fetch('http://localhost:3000/characters')
    .then(response=>response.json())
    .then(data=>getAnimal(data))

    function getAnimal(characters) {
        characters.forEach(char => {
            const list = document.getElementById("naming")
            const li = document.createElement('li')
            li.innerHTML= char.name
            list.append(li)
            li.id =char.id
            li.addEventListener('click', handleAnimal)
            
        });
    }
    function handleAnimal(e) {
        const id = e.target.id        
        fetchAnimalData(id)
        
    }
    
        function fetchAnimalData(id) {
            fetch(`http://localhost:3000/characters/${id}`)

             .then(response => response.json())
             .then(json => displayAnimalDetail(json)) 
       }

       function displayAnimalDetail(data) {
        const photo = document.getElementById("display1")
        const image = document.createElement('img') 
        image.src = data.image
        const p = document.createElement('h1')
        p.innerHTML = "Number of Votes " + data.votes        
        photo.appendChild(image)
        photo.appendChild(p)
        voting = data.votes
        const bt = document.createElement("button")
        bt.innerHTML = data.votes  + " Click To Vote"
        
        bt.addEventListener('click', (e)=>{
            let  vote = Number.parseInt(e.target.textContent) 
   
      if(vote===0)
      {
      vote += 1  
      e.target.textContent = vote + " uncheck"
      p.innerHTML = "Number of Votes " + vote 
      }

      else if(vote===1){
      vote -= 1  
      e.target.textContent = vote + " vote"
      p.innerHTML = "Number of Votes " + vote 
      }
      else if(vote==="click to uncheck"){

      vote=0
      }
    }

        )      
        photo.appendChild(bt)
    
    }
}
window.onload=mainAnimal