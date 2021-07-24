// Write your code here!
const main = document.getElementById("main");
main.remove();

let newHeader = document.createElement("h1");
newHeader.id = "victory";
newHeader.innerHTML = "Freddy is the champion"

document.querySelector("body").appendChild(newHeader);