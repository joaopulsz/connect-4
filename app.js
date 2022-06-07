const currentTurn = document.querySelector('#turn');
let currentPlayer = 1;

const columns = document.querySelectorAll('.column');

columns.forEach((column) => {
    for (let i = 0; i < 6; i++) {
        const square = document.createElement('div');
        column.append(square);
    };

    column.addEventListener('click', () => {
        newMove(column);
    });
});

function newMove(column) {
    const squares = column.querySelectorAll('div');
    const currentMove = Array.from(squares).reverse();
    const currentSquare = currentMove.find(square => square.style.backgroundColor === '');

    if (currentPlayer === 1) {
        currentSquare.style.backgroundColor = 'red';
        currentPlayer = 2;
    } else if (currentPlayer === 2) {
        currentSquare.style.backgroundColor = 'yellow';
        currentPlayer = 1;
    }

    currentTurn.innerText = currentPlayer;

};