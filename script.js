let container = document.querySelector('#container')

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
        box.classList.add('hover')
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
    clearGrid()
    makeBlocks()
})

let reset = document.createElement('button')
reset.textContent = "Clear grid"
buttonContainer.appendChild(reset)
reset.addEventListener('click',clearGrid)
