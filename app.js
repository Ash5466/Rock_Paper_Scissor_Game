let userscore = 0
let compscore = 0 

const drawGame = () => {
    msg.innerText = "🤝 It's a Draw! Play again."
    msg.style.backgroundColor = "#081b31"
}

const showwinner = (userwin, userchoice, compchoice) =>{
    if(userwin){
        msg.innerText = `🎉 You win! Your ${userchoice} beats ${compchoice}`
        msg.style.backgroundColor = "green"
        userscore++
        userscorePara.innerText = userscore

        document.getElementById(userchoice).style.boxShadow = "0 0 20px gold";
        setTimeout(() => {
            document.getElementById(userchoice).style.boxShadow = "none";
        }, 1000); 

    }
    else {
        msg.innerText = `😢 You Lose! ${compchoice} beats your ${userchoice}`
        msg.style.backgroundColor = "red"
        compscore++
        compscorePara.innerText = compscore;

        document.getElementById(compchoice).style.boxShadow = "0 0 20px gold";
        setTimeout(() => {
            document.getElementById(compchoice).style.boxShadow = "none";
        }, 1000);
    }
}

const genCompChoice = () => {
    options = ["rock", "paper", "scissors"]
    let i = Math.floor(Math.random()*3)
    return options[i];
}

const playGame = (userchoice) => {
    console.log(`user choice = ${userchoice}`)
    const compchoice = genCompChoice()
    console.log(`computer choice = ${compchoice}`)
    if (userchoice === compchoice) {
        drawGame()
    }
    else {
        let userwin = true; 
        if (userchoice === "rock"){
           userwin =  compchoice === "paper" ? false : true
        } else if (userchoice === "paper") {
            userwin =  compchoice === "scissors" ? false : true
        }
        else {
            userwin =  compchoice === "rock" ? false : true
        }
        showwinner(userwin, userchoice, compchoice)
    }
}

const choices = document.querySelectorAll(".choice")
const msg = document.querySelector("#message")

const userscorePara = document.querySelector("#userscore")
const compscorePara = document.querySelector("#compscore")

choices.forEach((choice)=>{
    console.log(choice)
    choice.addEventListener('click', ()=>{
        const userChoiceId = choice.getAttribute("id")
        playGame(userChoiceId)
    })
})

document.querySelector("#reset").addEventListener("click", () => {
    userscore = 0;
    compscore = 0;
    userscorePara.innerText = userscore;
    compscorePara.innerText = compscore;
    msg.innerText = "Play Your Move";
    msg.style.backgroundColor = "#081b31";
});

