
const myButton = document.getElementById('rollBtn');

const myDice = document.getElementById('dice');

const myRollHisry = document.getElementById('rollHisry');

let hisryList = []

function rollDice(){
  const rollResult = Math.floor(Math.random() *6) +1;
  const diceFace = getDiceFace(rollResult)
  myDice.innerHTML = diceFace;
  hisryList.push(rollResult);
  updateHistory();
}

function updateHistory() {
  myRollHisry.innerHTML = ''
    for (i = 0; i < hisryList.length; i++) {
      const listItem = document.createElement('li')
      listItem.innerHTML = `Roll ${i + 1}: <Span>${getDiceFace(hisryList[i])}</Span>`
      myRollHisry.appendChild(listItem)
    }
}

function getDiceFace(rollResult){
  switch(rollResult){
    case 1: return '&#9856;';
    case 2: return '&#9857;';
    case 3: return '&#9858;';
    case 4: return '&#9859;'
    case 5: return '&#9860;';
    case 6: return '&#9861;';
    default : return "";
  }
}


myButton.addEventListener('click', () =>{
  myDice.classList.add('roll-animation');
  setTimeout(() =>{
    myDice.classList.remove('roll-animation')
  },500)
  rollDice()
})