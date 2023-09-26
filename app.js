let fighters = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁"]

let stageEl = document.getElementById("stage")
let fightButton = document.getElementById("fightButton")

fightButton.addEventListener("click", function() {
    // Challenge:
    // When the user clicks on the "Pick Fighters" button, pick two random 
    // emoji fighters and display them as i.e. "🦀 vs 🐢" in the "stage" <div>.
    let fighterOne = generateRandomFighter()
    let fighterTwo = generateRandomFighter()
    // console.log("fighter one: " + fighterOne)
    // console.log("fighter two: " + fighterTwo)
    
    // stageEl.textContent = `${fighterOne} vs ${fighterTwo}`
    stageEl.textContent = fighterOne + " vs " + fighterTwo
})

function generateRandomFighter() {
    let randomFighter = Math.floor(Math.random() * fighters.length)
    return fighters[randomFighter]
}
// console.log(generateRandomFighter())