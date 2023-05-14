const mainContainer = document.querySelector("#main-container");

function createContainers() {
for(let i = 0; i < 16; i++) {
    const container = document.createElement("div");
    container.classList.toggle("gridContainer");
    mainContainer.appendChild(container);
}
}
createContainers();

const gridContainer = document.querySelectorAll(".gridContainer");

function fillContainers() {
    gridContainer.forEach((gridContainer) => {
        for (let i = 0; i < 16; i++) {
        const childElement = document.createElement("div");
    childElement.classList.toggle("gridBox");
    childElement.addEventListener("mouseenter", () => {
        childElement.style.backgroundColor = "blue";
    })
        gridContainer.appendChild(childElement);
        }
    })
}

fillContainers();

const button = document.querySelector("button");

button.addEventListener("click", () => {
    const gridNumber = prompt("Enter a number under 100.");
    if(gridNumber < 100) {

    }
})



