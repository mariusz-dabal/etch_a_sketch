//Etch a Sketch program by Jimmy

let squaresPerSide = 16;

function makeSquares(squaresPerSide){
  const container = document.querySelector('#container');
  for(let i = 0; i < squaresPerSide * squaresPerSide; i++) {
    const content = document.createElement('div');
    content.classList.add('gridBox');
    container.appendChild(content);
  }
  container.setAttribute('style', `grid-template-columns: repeat(${squaresPerSide}, auto)`);
}

function removeSquares(){
  container.innerHTML = '';
}

function reset(){
  var btn = document.querySelector('#reset');
  btn.addEventListener('click', () => {
    removeSquares();
    squaresPerSide = prompt("How many squares per side?");
    makeSquares(squaresPerSide);
    changeColor();
  });
}

function changeColor() {
  let grid = document.querySelectorAll('.gridBox');
  grid.forEach((box) => {
    box.addEventListener('mouseenter', (e) => {
      box.classList.add('gridBoxHover');
    });
  });
}

makeSquares(squaresPerSide);
changeColor();
reset();
