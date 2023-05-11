const mainContainer = document.querySelector("#main-container");

function createContainers() {
for(let i = 0; i < 16; i++) {
    const container = document.createElement("div");
    container.classList.toggle("gridContainer");
    mainContainer.appendChild(div);
}
}
createContainers();
