function createGrid (num) {
    let container = document.querySelector('#gridContainer');
    container.innerHTML = ''; //removes any previously placed grids
    
    for (i = 0; i < (num * num); i++) { //creates cells with according to num
        let div = document.createElement('div');
        container.appendChild(div);
        div.setAttribute('id', 'cells');
        container.style.width = ((num * 24) + ((num - 1) * 2)) + "px"; //makes the container the right size for fitting it num x num
        }
}

function mouseOver () {
    let hoverCol = document.getElementById('#columns')
    hoverCol.style.backgroundColor = "grey";
}