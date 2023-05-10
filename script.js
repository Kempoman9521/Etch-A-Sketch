function addDivs() {
const mainContainer = document.querySelector("#main-container");
const div = document.createElement("div");
for(let i = 0; i < 10; i++) {
    mainContainer.appendChild(div);
}
}
