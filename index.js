const score = document.getElementById("score")
const output = document.getElementById("output")

function updateScore(change) {
    const newScore = parseInt(score.innerHTML.split(" ")[1]) + change
    score.innerHTML = `Score: ${newScore}`
}

async function playerMove(player_choice) {
    const moves = ["ROCK", "PAPER", "SCISSORS"]

    let cpu_choice = Math.floor(Math.random() * 3)

    let cpu_move = moves[cpu_choice]
    let player_move = moves[player_choice]

    output.innerHTML = `You chose: ${player_move}               The computer chose: ${cpu_move}`.replace( / /g, "&nbsp;" )

    if (player_choice == cpu_choice + 1 || (player_choice == 0 && cpu_choice == 2)) {
        updateScore(1)
        output.style.color = `rgb(0, 100, 0)`
        score.style.color = `rgb(0, 100, 0)`
        await new Promise(r => setTimeout(r, 250));
        score.style.color = `rgb(89, 78, 54)`
    } else if (player_choice == cpu_choice) {
        output.style.color = `rgb(126, 132, 107)`
        score.style.color = `rgb(126, 132, 107)`
        await new Promise(r => setTimeout(r, 250));
        score.style.color = `rgb(89, 78, 54)`
        return
    } else {
        updateScore(-1)
        output.style.color = `rgb(100, 0, 0)`
        score.style.color = `rgb(100, 0, 0)`
        await new Promise(r => setTimeout(r, 250));
        score.style.color = `rgb(89, 78, 54)`
    }
}