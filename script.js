const mainContainer = document.querySelector("#main-container");

function createContainers() {
for(let i = 0; i < 16; i++) {
    const div = document.createElement("div");
    div.classList.toggle("grid");
    mainContainer.appendChild(div);
}
}
createContainers();
