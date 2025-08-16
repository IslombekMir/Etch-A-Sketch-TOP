const container = document.querySelector("#container");
const div1 = document.createElement('div');
const btnSetSize = document.querySelector('#btn-set-size');
const btnReset = document.querySelector('#btn-reset');
const resolution = document.querySelector('#resolution');

container.appendChild(div1);
let sideLength = 16;
let quotient = 1;
let area = 256;

btnSetSize.addEventListener('click', (e) => {
    let userLength = +prompt('New side length?', 10);
    quotient = 16/userLength;
    area = 256/(quotient*quotient);
    sideLength = userLength;
    createGrid();
    resolution.textContent = `${userLength} x ${userLength}`;
})

btnReset.addEventListener('click', () => {
    createGrid();
})



function createGrid() {
    div1.innerHTML = '';

    div1.style.maxWidth = `${sideLength * 8 * quotient}px`;
    div1.style.height = `${sideLength * 8 * quotient}px`;
    
    for (i = 0; i < area; i++) {
    let pixel = document.createElement('span');
    pixel.setAttribute('style', `width: ${8*quotient}px; height: ${8*quotient}px; background: rgb(247, 246, 242)`);
    div1.appendChild(pixel);
}
}

div1.addEventListener('mouseover', (e) => {
    let target = e.target;
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    target.style.background = `rgb(${r}, ${g}, ${b})`;
    let opacity = +target.style.opacity || 1;
    target.style.opacity = opacity * 0.9;
})


createGrid();

