const containerDiv = document.querySelector(".grid");
const sizeBtn = document.querySelector(".size-button");
sizeBtn.addEventListener("click", () => handleSizeChange());

loadCells(16);

function cellHover(e) {
    const element = e.target;
    element.style.backgroundColor = `#${getRandomColor()}`;
    const currentOpacity = Number.parseFloat(element.style.opacity);
    element.style.opacity = `${currentOpacity + 0.1}`;
}

function handleSizeChange() {
    const answer = Number.parseInt(prompt("Enter the number of squares per side (max 100): "));
    if (answer < 0) return;
    if (answer > 100) answer = 100;
    containerDiv.innerHTML = "";
    loadCells(answer);
}

function loadCells(size) {
    const total = size * size;
    const ratio = 100 / size;
    for (let i = 0; i < total; i++) {
        const cell = document.createElement("div");
        cell.className = "cell";
        cell.style.opacity = "0";
        cell.style.flex = `0 0 ${ratio}%`;
        cell.style.height = `${ratio}%`
        cell.addEventListener("mouseenter", (e) => cellHover(e));
        containerDiv.appendChild(cell);
    }
}

function getRandomColor() {
    let letters = "01234567890ABCDEF";
    var color = "";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}