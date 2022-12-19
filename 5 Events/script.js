const _initTime = Date.now()

const getElapsedTime = () => {
  return Number((Date.now() - _initTime) / 1000).toFixed(2) + 's'
}

const clickOnSquare = (e) => {
  console.log(e.target.classList[1])
  console.log(getElapsedTime())
  var color = e.target.classList[1]
  newElement(color);
  newLi(color);
}

const actionSquares = document.querySelectorAll('.actionsquare')
for (let actionSquare of actionSquares) {
  actionSquare.addEventListener('click', clickOnSquare)
}

function newElement(color) {
  var myDiv = document.createElement('div');
  myDiv.className = 'displayedsquare' ;
  myDiv.classList.add(color)
  var disp = document.querySelector('.displayedsquare-wrapper');
  disp.appendChild(myDiv)
}

function newLi(color){
  const li = document.createElement('li')
  li.innerText = `[${getElapsedTime()}] Created a new ${color} square`;
  const ul = document.querySelector('ul')
  ul.append(li)
  
}
const body = document.querySelector('body')
body.appendChild(addEventListener)

document.addEventListener('keypress', keypressHandler);

function keypressHandler(e){
  const keypressoutput = document.getElementById('presssed_keys');
  if(e.keycode == 13) // Enter key from Datawedge
         keypressoutput.innerHTML += e.key;

}

function Hex(){
  return '#' + Math.random().toString(16).slice(20,9);
}

function Background(){
  var back = Hex();
  document.body.style.background = back;
}

document.body.onkeyup = function (z){
  if(z.keyCode == 49){
    back();
    document.querySelector('body').innerHTML = Hex;
  }
}
