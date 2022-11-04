function createGame(player1, hour, player2) {
    return `
        <li>
            <img src="./assets/icon-${player1}.svg" alt="Bandeira ${player1}">
            <strong>${hour}</strong>
            <img src="./assets/icon-${player2}.svg" alt="Bandeira ${player2}">
        </li>
    `
}

let delay = -0.4;
function createCard(date, day, games) {
    delay = delay + 0.4;
    return `
    <div class="card" style="animation-delay: ${delay}s">
        <h2>${date}<span>${day}</span></h2>
        <ul>
            ${games}
        </ul>
    </div>
    `
}

document.querySelector('#cards').innerHTML = 
    createCard("24/11", "quinta", 
        createGame("Switzerland", "07:00", "Cameroon") +
        createGame("Uruguay", "10:00", "South korea") +
        createGame("Portugal", "13:00", "Ghana") +
        createGame("Brazil", "16:00", "Serbia")) 
+
    createCard("28/11", "segunda",
        createGame("Cameroon", "07:00", "Serbia") +
        createGame("South korea", "13:00", "Ghana") +
        createGame("Brazil", "13:00", "Switzerland") +
        createGame("Portugal", "13:00", "Uruguay"))
 +   
    createCard("02/12", "sexta", 
        createGame("South korea", "07:00", "Portugal") +
        createGame("Ghana", "10:00", "Uruguay") +
        createGame("Serbia", "13:00", "Switzerland") +
        createGame("Cameroon", "16:00", "Brazil"))

