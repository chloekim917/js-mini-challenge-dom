/***** Deliverable 1 *****/
document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector("h1#header")
    console.log("Here's your header:", header)
    
    
/***** Deliverable 2 *****/
header.style.color = "red";
    
/***** Deliverable 3 *****/
console.log("PLAYERS array looks like this:", PLAYERS)

const playerContainer = document.querySelector('.player-container')
 function createPlayerDiv(player){
     const playerDiv = document.createElement('div')
     playerDiv.className = 'player'
     playerDiv.dataset.number = player.number

     playerDiv.innerHTML = `
     <h3>${player.name} (<em>${player.nickname}</em>)</h3>
     <img src="${player.photo}" alt="${player.name}"></img>
     `
     playerContainer.append(playerDiv)
 }

 PLAYERS.forEach(createPlayerDiv)

/***** Deliverable 4 *****/
let manCity = document.querySelector(".player[data-number='7']")
manCity.remove()

})
