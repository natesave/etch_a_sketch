let slider = document.getElementById("gridDimension");
let output = document.getElementById("dis");
output.innerHTML = slider.value;

slider.oninput = function() { //displays value for defining the grid size
    output.innerHTML = this.value;
}

function createGrid(x) {
    let container = document.querySelector('#gridContainer');
    container.innerHTML = ''; //removes any previously placed grids

    for (i = 0; i < (x * x); i++) {
        let div = document.createElement('div');
        container.appendChild(div);
        div.setAttribute('class', 'cells');
        container.style.setProperty('grid-template-columns', 'repeat(' + x + ', 1fr)'); 
        container.style.setProperty('grid-template-rows', 'repeat(' + x + ', 1fr)');
        
        div.onmouseover = function() { //changes the color to grey when hovering over a cell
            div.style.backgroundColor = "grey";
            }
    }
}

createGrid(50); //cretes default grid when page is loaded