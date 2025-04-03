document.addEventListener('DOMContentLoaded', function() {
    const btn = document.getElementById("roll");
    const playerDice = document.getElementById("player-dice");
    const aiDice = document.getElementById("ai-dice");
    const result = document.getElementById("result");
    const playerName = document.getElementById("player-name");
    const playerScore = document.getElementById("player-score"); 
    const aiScore = document.getElementById("ai-score"); 
    let isRolling = false;

    

    btn.addEventListener("click", function(){
        const displayName = playerName.value || "player 1";
        if (isRolling) return;

        isRolling = true;
        btn.disabled = true;

        playerDice.classList.add("dice-rolling");
        aiDice.classList.add("dice-rolling");

        let rollTime = 3000;
        let rollInt = setInterval(() => {
            const playerFace = Math.floor(Math.random() * 6) + 1;
            const aiFace = Math.floor(Math.random() * 6) + 1;
            
            playerDice.src = `./images/dice${playerFace}.png`;
            aiDice.src = `./images/dice${aiFace}.png`;
        }, 500);
    
        setTimeout(() => {
            clearInterval(rollInt);
            const playerValue = Math.floor(Math.random() * 6) + 1;
            const aiValue = Math.floor(Math.random() * 6) + 1;

            playerDice.src = `./images/dice${playerValue}.png`;
            aiDice.src = `./images/dice${aiValue}.png`;

            playerDice.classList.remove("dice-rolling");
            aiDice.classList.remove("dice-rolling");

            playerScore.textContent = playerValue;
            aiScore.textContent = aiValue;

            if (playerValue > aiValue) {
                result.textContent = `${displayName} wins!`;
                result.style.color = '#2ecc71';
            } else if (aiValue > playerValue) {
                result.textContent = `AI wins!`;
                result.style.color = '#e74c3c';
            } else {
                result.textContent = "It's a draw!";
                result.style.color = '#3498db';
            }
            btn.disabled = false;
            isRolling = false;

        }, rollTime);
    
    });
});



