const board = document.querySelector('#board');
const colors = ['#00FFFF', '#0000FF', '#00BFFF', '#000080', '#191970', '#1E90FF', '#E0FFFF', '#7FFFD4'];
const SQUARES_NUMBER = 300;

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement("div");
    square.classList.add("square");

    square.addEventListener('mouseover', () => {
        setColor(square)
    });

    square.addEventListener('mouseleave', () => {
        removeColor(square)
    }); 

    board.append(square);
}

function setColor(element) {
    const color = getRandomColor();
    element.style.backgroundColor = color;
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(element) {
    element.style.backgroundColor = '#333333';
    element.style.boxShadow = `0 0 2px #000000`;
}

function getRandomColor() {
    const index = Math.floor(Math.random() * colors.length);
    return colors[index];
}
