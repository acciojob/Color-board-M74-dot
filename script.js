//your JS code here. If required.
// script.js
document.addEventListener('DOMContentLoaded', function() {
    const board = document.getElementById('board');

    for (let i = 0; i < 800; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        board.appendChild(square);

        square.addEventListener('mouseover', () => setColor(square));
        square.addEventListener('mouseout', () => removeColor(square));
    }

    function setColor(element) {
        const color = getRandomColor();
        element.style.backgroundColor = color;
    }

    function removeColor(element) {
        setTimeout(() => {
            element.style.backgroundColor = '#ccc';
        }, 1000);
    }

    function getRandomColor() {
        const colors = ['#ff5733', '#33ff57', '#3357ff', '#ff33a1', '#a133ff'];
        return colors[Math.floor(Math.random() * colors.length)];
    }
});
