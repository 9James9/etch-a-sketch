let container = document.querySelector('#container')
container.textContent = ""

 /*function genDivs (size) {
 grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`
 grid.style.gridTemplateRows = `repeat(${size}, 1fr)`
}
*/
function genDivs (size) {
    let e = container
    for (var i = 0; i < size; i++) {
        let row = document.createElement('div')
        row.className = "row"
        e.appendChild(row)
        for (let x = 1; x < size; x++) {
            let cell = document.createElement('div')
            cell.className = "grid"
            row.appendChild(cell)
        }
    }
    //e.appendChild(row)
    
}
genDivs(5)