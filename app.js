const grid = document.getElementById("grid");
const reset = document.getElementById ("reset-btn")
const color = document.getElementById("color")
const size = document.getElementById("size")

function makeGrid() {
    let input = prompt("How many cells would you like on each side?")
    grid.style.setProperty('--grid-rows', input)
    grid.style.setProperty('--grid-cols', input)
    for (i=0;i < (input*input);i++) {
        let cell = document.createElement('div');
        grid.appendChild(cell).className = "grid-cell";
        cell.style.backgroundColor = "white";
        cell.addEventListener("mouseover", ()=> cell.style.backgroundColor = "black");
        reset.addEventListener("click",()=>cell.style.backgroundColor = "white");
    };
};

makeGrid();

size.addEventListener("click", makeGrid);
