function getValue() { //accept numbers only up to 100
    let val = document.querySelector('#selection').value;
    if (val <= 100) {
        createGrid(val);
    } else {
        let tooBig = document.querySelector('#error');
        tooBig.textContent = "VALUE IS TOO LARGE";
    }
}

function createGrid (num) {
    let container = document.querySelector('#gridContainer');
    container.innerHTML = ''; //removes any previously placed grids
    
    for (i = 0; i < (num * num); i++) { //creates cells with according to num
        let div = document.createElement('div');
        container.appendChild(div);
        div.setAttribute('id', 'cells');
        div.onmouseover = function() { //changes the color to grey when hovering over a cell
            div.style.backgroundColor = "grey";
            }
        container.style.width = ((num * 24) + ((num - 1) * 2)) + "px"; //makes the container the right size for fitting it num x num
        }
}

