let slider = document.getElementById('gridDimension');
let output = document.getElementById('dis');
output.innerHTML = slider.value;

slider.oninput = function() { //displays value for defining the grid size
    output.innerHTML = this.value;
}

function createGrid(size) {
    let container = document.querySelector('#gridContainer');
    container.innerHTML = ''; //removes any previously placed grids

    for (i = 0; i < (size * size); i++) {
        let div = document.createElement('div');
        container.appendChild(div);
        div.setAttribute('class', 'cells');
        div.setAttribute('id', 'cells');
        container.style.setProperty('grid-template-columns', 'repeat(' + size + ', 1fr)'); 
        container.style.setProperty('grid-template-rows', 'repeat(' + size + ', 1fr)');
    }
    
    let boxes = document.getElementsByClassName('cells');
    let blackHover = function() { //changes color of the cells on hover to black
        this.style.backgroundColor = "rgb(30, 5, 1)";
    }
    
    for (let k = 0; k < boxes.length; k++) { //checks each cells for hover effect instead of only the first one hovered
        boxes[k].addEventListener('mouseover', blackHover);
    }
}

createGrid(50); //creates default grid when page is loaded

let boxes = document.getElementsByClassName('cells');

//BLACK BUTTON
let blackBtn = document.querySelector('#toggleBlack');
blackBtn.addEventListener('click', () => {
    black();
})

let blackHover = function() {
    this.style.backgroundColor = "rgb(30, 5, 1)";
}

function black() { 
    for (let o = 0; o < boxes.length; o++) {
        boxes[o].removeEventListener('mouseover', darkHover);
        boxes[o].removeEventListener('mouseover', rainbowHover);
        boxes[o].removeEventListener('mouseover', eraserHover);
        boxes[o].addEventListener('mouseover', blackHover);
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
    for (let b = 0; b < 6; b++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

let rainbowHover = function() {
    this.style.backgroundColor = getRandomColor();
}

function rainbow() { 
    for (let w = 0; w < boxes.length; w++) {
        boxes[w].removeEventListener('mouseover', blackHover);
        boxes[w].removeEventListener('mouseover', darkHover);
        boxes[w].removeEventListener('mouseover', eraserHover);
        boxes[w].addEventListener('mouseover', rainbowHover);
    }
}

//MAKE DARKER BUTTON

let darkerBtn = document.querySelector('#toggleDarker');
darkerBtn.addEventListener('click', () => {
    dark();
})

let darkHover = function() {
    this.style.backgroundColor = "rgba(" + (255 - 51) + ", " + (255 - 51) + ", " + (255 - 51) + ")";
    }


function dark() { 
    for (let b = 0; b < boxes.length; b++) {
        boxes[b].removeEventListener('mouseover', blackHover);
        boxes[b].removeEventListener('mouseover', rainbowHover);
        boxes[b].removeEventListener('mouseover', eraserHover);
        boxes[b].addEventListener('mouseover', darkHover);
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
    for (let j = 0; j < boxes.length; j++) {
        boxes[j].removeEventListener('mouseover', blackHover);
        boxes[j].removeEventListener('mouseover', rainbowHover);
        boxes[j].removeEventListener('mouseover', darkHover);
        boxes[j].addEventListener('mouseover', eraserHover);
    }
}

//CLEAR GRID BUTTON
let clearBtn = document.querySelector('#clearGrid');
clearBtn.addEventListener('click', () => {
    clearGrid();
})

function clearGrid() { //clears grid without loading a new one
    for (let n = 0; n < boxes.length; n++) {
        boxes[n].style.backgroundColor = "white";
    }
}

//CELL BORDERS BUTTON
let borderBtn = document.querySelector('#toggleBorder');
borderBtn.addEventListener('click', () => {
    cellBorder();
})

function cellBorder() { 
    for (let x = 0; x < boxes.length; x++) {
        if (boxes[x].style.border != "none") {
        boxes[x].style.border = "none";
        } else {
            boxes[x].style.border = "0.5px solid rgb(49, 28, 28)";
        }
    }
}
