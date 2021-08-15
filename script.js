let container = document.querySelector('#container')
random = function (num) {
    return Math.floor(Math.random() * num)
}
let size = 16;
let gridContainer = document.querySelector('#grid-container')
const maxWidth = 600;
let mode = "default"
let buttonContainer = document.querySelector('#buttons')
let resize = document.createElement('button')
resize.textContent = "Resize grid"
resize.classList.add('resizeBtn')
buttonContainer.appendChild(resize)

resize.addEventListener('click', () => {
    size = prompt('Choose what size you would like (1-100)')
    if (size > 1 && size < 101) {
        clearGrid()
        makeBlocks()
    } else {
        alert("Please choose a number between 1-100")
    }
})


let color = document.createElement('button')
color.textContent = "Black"
buttonContainer.appendChild(color)
color.classList.add('black')
color.addEventListener('click', () => {
    mode = "default"
})

let rainbow = document.createElement('button')
rainbow.textContent = "Rainbow Mode!"
buttonContainer.appendChild(rainbow)
rainbow.classList.add('rainbowBtn')
rainbow.addEventListener('click', () => {
    mode = "rainbow";
})

let eraser = document.createElement('button')
eraser.textContent = "Eraser"
eraser.classList.add("eraserBtn")
buttonContainer.appendChild(eraser)
eraser.addEventListener('click', () => {
    mode = "eraser"
})

let reset = document.createElement('button')
reset.textContent = "Reset grid"
buttonContainer.appendChild(reset)
reset.classList.add('reset')
reset.addEventListener('click', () => {
    location.reload()
})


function makeBlocks() {
    for (let i = 0; i < size; i++) {
        let row = document.createElement('div');
        row.className = "row";

        for (let j = 0; j < size; j++) {
            let box = document.createElement('div');
            box.className = "box";
            row.appendChild(box);
            box.addEventListener('mouseover',changeCellColor)
        }
        document.getElementById('grid-container').appendChild(row);

        var boxes = document.getElementsByClassName("box");
        for (k = 0; k < boxes.length; k++) {
            boxes[k].style.width = maxWidth / size + "px";
            boxes[k].style.height = maxWidth / size + "px";
        }
    }
}
window.addEventListener('load', makeBlocks)

let clearGrid = function () {
    const gridArray = Array.from(gridContainer.childNodes)
    gridArray.forEach((element) => {
        gridContainer.removeChild(element)
    })
}
function changeCellColor () {
    if (mode == "default") {
        this.style.backgroundColor = "black"
    } else if (mode == "rainbow") {
        const color1 = random(255)
        const color2 = random(255)
        const color3 = random(255)
        this.style.backgroundColor = `rgb(${color1}, ${color2}, ${color3})`
    } else if (mode == "eraser") {
        this.style.backgroundColor = "white"
    }
}