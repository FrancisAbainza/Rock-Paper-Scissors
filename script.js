class RockPaperScissors {
  constructor(playerOneText, playerTwoText, playerOneOutput, playerTwoOutput, options, playAgain) {
    this.playerOneText = playerOneText;
    this.playerTwoText = playerTwoText;
    this.playerOneOutput = playerOneOutput;
    this.playerTwoOutput = playerTwoOutput;
    this.options = options;
    this.playAgain = playAgain;
  }

  botSelect() {
    let choice = Math.floor(Math.random()*3);
    switch(choice) {
      case 0: 
        return "rock"; 
      case 1: 
        return "paper"; 
      case 2: 
        return "scissors"; 
      default:
        return;
    }
  }

  calculate(choice) {
    let botChoice = this.botSelect();
    let playerChoice = choice;
    if (playerChoice === botChoice) {
      this.showResult("draw");
    } else if(playerChoice === "rock" && botChoice ==="scissors") {
      this.showResult("win");
    } else if(playerChoice === "paper" && botChoice ==="rock") {
      this.showResult("win");
    } else if(playerChoice === "scissors" && botChoice ==="paper") {
      this.showResult("win");;
    } else {
      this.showResult("lose");
    }
    this.displayChoice(playerChoice, botChoice);
    this.hideOptions();
  }

  displayChoice(playerChoice, botChoice) {
    playerOneOutput.classList.remove('hidden');
    playerTwoOutput.classList.remove('hidden');

    if (playerChoice === "rock") {
      playerOneOutput.src = "./images/rock.svg";
    } else if(playerChoice === "paper") {
      playerOneOutput.src = "./images/paper.png";
    } else {
      playerOneOutput.src = "./images/scissors.svg";
    }

    if (botChoice === "rock") {
      playerTwoOutput.src = "./images/rock.svg";
    } else if(botChoice === "paper") {
      playerTwoOutput.src = "./images/paper.png";
    } else {
      playerTwoOutput.src = "./images/scissors.svg";
    }
  }

  showResult(result) {
    if (result === "win") {
      playerOneText.innerHTML = "You Win!";
      playerTwoText.innerHTML = "Opponent Lost!";
    } else if(result === "draw") {
      playerOneText.innerHTML = "Draw";
      playerTwoText.innerHTML = "Draw";
    } else {
      playerOneText.innerHTML = "You Lost!";
      playerTwoText.innerHTML = "Opponent Win!";
    }
  }

  hideOptions() {
    options.forEach(button => {
      button.classList.add('invisible');
    })
    playAgain.classList.remove('invisible');
  }

  reset() {
    playerOneText.innerHTML = "You";
    playerTwoText.innerHTML = "Opponent"
    playerOneOutput.classList.add('hidden');
    playerTwoOutput.classList.add('hidden');
    options.forEach(button => {
      button.classList.remove('invisible');
    })
    playAgain.classList.add('invisible');
  }
}

let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissors = document.querySelector("#scissors");
let playerOneText = document.querySelector("#playerOneText");
let playerTwoText = document.querySelector("#playerTwoText");
let playerOneOutput = document.querySelector("#playerOneOutput");
let playerTwoOutput = document.querySelector("#playerTwoOutput");
let options = document.querySelectorAll('[data-options]');
let playAgain = document.querySelector("#playAgain");

let rockPaperScissors = new RockPaperScissors(playerOneText, playerTwoText, playerOneOutput, playerTwoOutput, options, playAgain);

rock.addEventListener('click', () => {
  rockPaperScissors.calculate("rock");
}) 

paper.addEventListener('click', () => {
  rockPaperScissors.calculate("paper");
}) 

scissors.addEventListener('click', () => {
  rockPaperScissors.calculate("scissors");
}) 

playAgain.addEventListener('click', () => {
  rockPaperScissors.reset();
})