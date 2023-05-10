const mainContainer = document.querySelector("#main-container");

function addDivs() {
for(let i = 0; i <= 10; i++) {
    const div = document.createElement("div");
    mainContainer.appendChild(div);
}
}

addDivs();