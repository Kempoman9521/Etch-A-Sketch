const mainContainer = document.querySelector("#main-container");

function createContainers(promptVal) {
for(let i = 0; i < promptVal; i++) {
    const container = document.createElement("div");
    container.classList.toggle("gridContainer");
    mainContainer.appendChild(container);
}
}


function fillContainers(promptVal) {
    const gridContainer = document.querySelectorAll(".gridContainer");
    gridContainer.forEach((container) => {
        for (let i = 0; i < promptVal; i++) {
        const childElement = document.createElement("div");
    childElement.classList.toggle("gridBox");
    childElement.addEventListener("mouseenter", () => {
        childElement.style.backgroundColor = "blue";
    })
        container.appendChild(childElement);
        }
    })
}


const button = document.querySelector("button");

button.addEventListener("click", () => {
    const promptVal = +prompt("Enter a number under 100.");
    if(promptVal <= 100) {
        while (mainContainer.firstChild) {
            mainContainer.removeChild(mainContainer.firstChild);
        }
        createContainers(promptVal);
        fillContainers(promptVal);
    }
});



