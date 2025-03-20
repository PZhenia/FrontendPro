const pythagoreanTable = document.querySelector('#pythagoreanTable');
const addTableBtn = document.querySelector('#generateTable');

function createPythagoreanTable(size) {
    const table = document.createElement('table');
    pythagoreanTable.style.width = `${size * 50}px`;

    for (let i = 1; i < size + 1; i++) {
        let row = document.createElement('tr');

        for (let j = 1; j < size + 1; j++) {
            let cell = document.createElement('td');
            cell.classList.add('pythagoreanCell');
            cell.textContent = `${i*j}`;
            if(cell.textContent === `${i*i}`) {
                cell.classList.add('cellPurple');
            } else {
                cell.classList.add('cellOrange');
            }

            row.appendChild(cell);
        }
        table.appendChild(row);
    }
    pythagoreanTable.appendChild(table);
}
addTableBtn.addEventListener('click', () => {createPythagoreanTable(10);});