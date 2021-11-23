//let n = input * input

function createGrid (num) {
    for (i = 0; i < num; i++) {
        let container = document.getElementById('gridContainer');
        let div = document.createElement('div');
        container.appendChild(div);
        div.setAttribute('id', 'cells');
        div.textContent = i + 1;
        }
}

createGrid(256)