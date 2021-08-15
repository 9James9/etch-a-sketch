let container = document.querySelector('#container')
random = function (num) {
    return Math.floor(Math.random()*num)
}
let size = 16;
let gridContainer = document.querySelector('#grid-container')
const maxWidth = 496;
const maxHeight = 400;
function makeBlocks() {
   
    
  for (let i = 0; i < size; i++) {
    let row = document.createElement('div');
    row.className = "row";
    
    for (let j = 0; j < size; j++) {
      let box = document.createElement('div');
      box.className = "box";
      row.appendChild(box);
      box.addEventListener('mouseover', () => {
        box.style.backgroundColor = "black";
    })
    }
    document.getElementById('grid-container').appendChild(row);
    
    var boxes = document.getElementsByClassName("box");
    for (k = 0; k < boxes.length; k++) {
      boxes[k].style.width = maxWidth / size + "px";
      boxes[k].style.height = maxWidth / size + "px";
    }
  }
}

randomColors = function () {
    let box = document.querySelector('.box')
    box.addEventListener('mouseover', () => {
        const color1 = random(255)
        const color2 = random(255)
        const color3 = random(255)
        box.target.style.backgroundColor = `rgb(${color1}, ${color2}, ${color3})`
    })
    
}






window.addEventListener('load',makeBlocks)

let clearGrid = function () {
    const gridArray = Array.from(gridContainer.childNodes)
    gridArray.forEach((element) => {
        gridContainer.removeChild(element)
    })
    }

let buttonContainer = document.querySelector('#buttons')
let resize = document.createElement('button')
resize.textContent = "Resize grid"
buttonContainer.appendChild(resize)

resize.addEventListener('click', () => {
    size = prompt('Choose what size you would like (1-100)')
    if (size > 1 && size < 101) {
    clearGrid()
    makeBlocks()
    } else {alert("Please choose a number between 1-100")}
})

let reset = document.createElement('button')
reset.textContent = "Reset grid"
buttonContainer.appendChild(reset)
reset.addEventListener('click', () => {
    location.reload()
})


let rainbow = document.createElement('button')
rainbow.textContent = "Random Colors!"
buttonContainer.appendChild(rainbow)
rainbow.addEventListener('click',randomColors)
