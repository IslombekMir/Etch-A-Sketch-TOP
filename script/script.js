const container = document.querySelector("#container");
const div1 = document.createElement('div');
const btnSetSize = document.querySelector('#btn-set-size')

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
})





function createGrid() {
    div1.innerHTML = '';

    div1.style.maxWidth = `${sideLength * 8 * quotient}px`;
    div1.style.height = `${sideLength * 8 * quotient}px`;
    
    for (i = 0; i < area; i++) {
    let pixel = document.createElement('span');
    pixel.setAttribute('style', `width: ${8*quotient}px; height: ${8*quotient}px; background: lime`);
    div1.appendChild(pixel);
}
}

div1.addEventListener('mouseover', (e) => {
    let target = e.target;
    target.style.background = 'blue';
})


createGrid();

