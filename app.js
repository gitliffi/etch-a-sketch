const grid = document.getElementById("grid");
const reset = document.getElementById ("reset-btn")

function makeGrid(input) {
    grid.style.setProperty('--grid-rows', input)
    grid.style.setProperty('--grid-cols', input)
    for (i=0;i < (input*input);i++) {
        let cell = document.createElement('div');
        grid.appendChild(cell).className = "grid-cell";
        cell.addEventListener("mouseover", ()=> cell.style.backgroundColor = "black");
        reset.addEventListener("click",()=>cell.style.backgroundColor = "white");
    };
};

makeGrid(100);