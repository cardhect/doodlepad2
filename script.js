const container = document.querySelector('#container');


function createGrid(x) {
   
    for (let i = 0; i < x; i++) {
        const row = document.createElement('div');
        row.setAttribute('class', 'row');
        container.appendChild(row);
    
        for (let i = 0; i < x; i++) {
            const col = document.createElement('div');
            col.setAttribute('class', 'col');
            row.appendChild(col);
            col.addEventListener('mouseover', () => {
            col.style.background = 'red';
            })
        }
        
    }

    
}


function clearGrid() {
        const rowRemove = document.querySelectorAll(".row");
        for(var i = rowRemove.length - 1; 0 <= i; i--)
     
       rowRemove[i].parentElement.removeChild(rowRemove[i]);
        
    }


const btn = document.querySelector('#clear');
btn.addEventListener('click', () => {
clearGrid();
  let size = prompt('Enter new grid size.' , '16');
  createGrid(size);
});