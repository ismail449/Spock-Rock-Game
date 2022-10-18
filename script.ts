const playerScoreEl = document.getElementById('player-score') as HTMLSpanElement
const playerChoice = document.getElementById('player-choice') as HTMLSpanElement
const computerScoreEl = document.getElementById('computer-score') as HTMLSpanElement
const computerChoice = document.getElementById('computer-choice') as HTMLSpanElement
const resultText = document.getElementById('resultText') as HTMLHeadingElement

const playerRock = document.getElementById('playerRock') as HTMLElement
const playerPaper = document.getElementById('playerPaper') as HTMLElement
const playerScissors = document.getElementById('playerScissors') as HTMLElement
const playerLizard = document.getElementById('playerLizard') as HTMLElement
const playerSpock = document.getElementById('playerSpock') as HTMLElement

const allGameIcons: NodeListOf<HTMLElement> = document.querySelectorAll('.fa-regular')

let playerScore = 0;
let computerScore = 0;
//reset all selected icons
const restSelected = () => {
  allGameIcons.forEach(icon => icon.classList.remove('selected'))
}

//passing player selection value
const select = (choice: string) => {
  //set all player icons to the original color before make the selected icon black
  restSelected()
  playerChoice.textContent = ` --- ${choice}`
  switch (choice) {
    case 'rock':

      playerRock.classList.add('selected');
      break;
    case 'paper':
      playerPaper.classList.add('selected');
      break;
    case 'scissors':
      playerScissors.classList.add('selected');
      break;
    case 'lizard':
      playerLizard.classList.add('selected');
      break;
    case 'spock':
      playerSpock.classList.add('selected');
      break;

    default:
      break;
  }
  const computerSelection = computerSelect()
  winnerSelect(computerSelection, choice)
}
//randomly selects the computer's choice
const computerSelect = () => {
  //an id array to select the correct icon element
  const iconArray = ['computerRock', 'computerScissors', 'computerLizard', 'computerPaper', 'computerSpock'];
  const randomIndex = Math.floor(Math.random() * 5);
  const icon = document.getElementById(iconArray[randomIndex]) as HTMLElement
  icon.classList.add('selected');
  computerChoice.textContent = ` --- ${icon.title}`
  return icon.title
}
//selects the winner based on the choices object
const winnerSelect = (computerSelection: string, playerSelection: string) => {

  const player = playerSelection.toLocaleLowerCase();
  const computer = computerSelection.toLocaleLowerCase()
  //if the player chooses the same as the computer
  if (player === computer) {
    resultText.textContent = 'It\'s a Draw!'
    return;
  }
  let isWinner = false;
  //if the player chooses rock
  if (choices.rock.name.toLocaleLowerCase() === player) {
    isWinner = choices.rock.defeats.includes(computer)
  }
  //if the player chooses paper
  else if (choices.paper.name.toLocaleLowerCase() === player) {
    isWinner = choices.paper.defeats.includes(computer)
  }
  //if the player chooses scissors
  else if (choices.scissors.name.toLocaleLowerCase() === player) {
    isWinner = choices.scissors.defeats.includes(computer)
  }
  //if the player chooses lizard
  else if (choices.lizard.name.toLocaleLowerCase() === player) {
    isWinner = choices.lizard.defeats.includes(computer)
  }
  //if the player chooses spock
  else if (choices.spock.name.toLocaleLowerCase() === player) {
    isWinner = choices.spock.defeats.includes(computer)
  }
  if (isWinner) {
    playerScore++;
    resultText.textContent = 'You Won!'
    playerScoreEl.textContent = `${playerScore}`
  } else {
    computerScore++;
    resultText.textContent = 'You Lost!'
    computerScoreEl.textContent = `${computerScore}`
  }
}
const choices = {
  rock: { name: 'Rock', defeats: ['scissors', 'lizard'] },
  paper: { name: 'Paper', defeats: ['rock', 'spock'] },
  scissors: { name: 'Scissors', defeats: ['paper', 'lizard'] },
  lizard: { name: 'Lizard', defeats: ['paper', 'spock'] },
  spock: { name: 'Spock', defeats: ['scissors', 'rock'] },
};
