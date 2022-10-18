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
}

const choices = {
  rock: { name: 'Rock', defeats: ['scissors', 'lizard'] },
  paper: { name: 'Paper', defeats: ['rock', 'spock'] },
  scissors: { name: 'Scissors', defeats: ['paper', 'lizard'] },
  lizard: { name: 'Lizard', defeats: ['paper', 'spock'] },
  spock: { name: 'Spock', defeats: ['scissors', 'rock'] },
};
