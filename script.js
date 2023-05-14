const mainContainer = document.querySelector("#main-container");

function createContainers(promptVal) {
for(let i = 0; i < promptVal; i++) {
    const container = document.createElement("div");
    container.classList.toggle("gridContainer");
    mainContainer.appendChild(container);
}
}
createContainers();

const gridContainer = document.querySelectorAll(".gridContainer");

function fillContainers(promptVal) {
    gridContainer.forEach((gridContainer) => {
        for (let i = 0; i < promptVal; i++) {
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
    const promptVal = +prompt("Enter a number under 100.");
    if(promptVal < 100) {
        createContainers(promptVal);
        fillContainers(promptVal);
    }
})



