let container = document.querySelector('#container')

let size = 16;
let gridContainer = document.querySelector('#grid-container')
const maxWidth = 400;
const maxHeight = 400;
function makeBlocks() {
   
    
  for (let i = 0; i < size; i++) {
    let row = document.createElement('div');
    row.className = "row";
    
    for (let j = 0; j < size; j++) {
      let box = document.createElement('div');
      box.className = "box";
      row.appendChild(box);
    }
    document.getElementById('grid-container').appendChild(row);
    
    var boxes = document.getElementsByClassName("box");
    for (k = 0; k < boxes.length; k++) {
      boxes[k].style.width = maxWidth / size + "px";
      boxes[k].style.height = maxWidth / size + "px";
    }
  }
}
makeBlocks()