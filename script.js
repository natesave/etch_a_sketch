let slider = document.getElementById('gridDimension');
let output = document.getElementById('dis');
output.innerHTML = slider.value + " x " + slider.value;

slider.oninput = function() { //displays the grid size value
    output.innerHTML = this.value + " x " + this.value;
}

function createGrid(size) {
    let container = document.querySelector('#gridContainer');
    container.innerHTML = ''; //removes any previously placed grids

    for (g = 0; g < (size * size); g++) {
        let div = document.createElement('div');
        container.appendChild(div);
        div.setAttribute('class', 'cells');
        div.setAttribute('id', 'cells');
        container.style.setProperty('grid-template-columns', 'repeat(' + size + ', 1fr)'); 
        container.style.setProperty('grid-template-rows', 'repeat(' + size + ', 1fr)');
    }
    
    //BLACK HOVER ACTIVE WHEN PAGE LOADS
    let boxes = document.getElementsByClassName('cells');
    let blackHover = function() { //changes color of the cells on hover to black
        this.style.backgroundColor = "rgb(30, 5, 1)";
    }
    
    for (let k = 0; k < boxes.length; k++) { //checks each cells for hover effect instead of only the first one hovered
        boxes[k].addEventListener('mouseover', blackHover);
    }
}

createGrid(50); //creates default grid when page is loaded

let boxes = document.getElementsByClassName('cells'); //select all cells for applying effects of the buttons

//BLACK BUTTON
let blackBtn = document.querySelector('#toggleBlack');
blackBtn.addEventListener('click', () => {
    black();
})

let blackHover = function() {
    this.style.backgroundColor = "rgb(30, 5, 1)";
}

function black() { 
    for (let b = 0; b < boxes.length; b++) {
        boxes[b].removeEventListener('mouseover', rainbowHover);
        boxes[b].removeEventListener('mouseover', eraserHover);
        boxes[b].addEventListener('mouseover', blackHover);
    }
}

//RAINBOW BUTTON
let rainbowBtn = document.querySelector('#toggleRainbow');
rainbowBtn.addEventListener('click', () => {
    rainbow();
})

function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let c = 0; c < 6; c++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

let rainbowHover = function() {
    this.style.backgroundColor = getRandomColor();
}

function rainbow() { 
    for (let r = 0; r < boxes.length; r++) {
        boxes[r].removeEventListener('mouseover', blackHover);
        boxes[r].removeEventListener('mouseover', eraserHover);
        boxes[r].addEventListener('mouseover', rainbowHover);
    }
}

//ERASER BUTTON
let eraserBtn = document.querySelector('#toggleEraser');
eraserBtn.addEventListener('click', () => {
    eraser();
})

let eraserHover = function() {
    this.style.backgroundColor = "white";
}

function eraser() { 
    for (let e = 0; e < boxes.length; e++) {
        boxes[e].removeEventListener('mouseover', blackHover);
        boxes[e].removeEventListener('mouseover', rainbowHover);
        boxes[e].addEventListener('mouseover', eraserHover);
    }
}

//CLEAR GRID BUTTON
let clearBtn = document.querySelector('#clearGrid');
clearBtn.addEventListener('click', () => {
    clearGrid();
})

function clearGrid() { //clears grid without loading a new one
    for (let c = 0; c < boxes.length; c++) {
        boxes[c].style.backgroundColor = "white";
    }
}

//CELL BORDERS BUTTON
let borderBtn = document.querySelector('#toggleBorder');
borderBtn.addEventListener('click', () => {
    cellBorder();
})

function cellBorder() { 
    for (let i = 0; i < boxes.length; i++) {
        if (boxes[i].style.border != "none") {
        boxes[i].style.border = "none";
        } else {
            boxes[i].style.border = "0.5px solid rgb(49, 28, 28)";
        }
    }
}
