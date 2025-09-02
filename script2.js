const redText = document.createElement("p");
redText.textContent = "Hey I'm red!";
redText.style.color = "red";

const blueH3 = document.createElement("h3");
blueH3.textContent = "I'm a blue h3!"
blueH3.style.color = "blue";

const div = document.createElement("div");
div.style.cssText = "border: 2px solid black"

const divH1 = document.createElement("h1");
divH1.textContent = "I'm in a div";
div.appendChild(divH1)

const divP = document.createElement("p");
divP.textContent = "Me too!"
div.appendChild(divP)

document.body.appendChild(redText);
document.body.appendChild(blueH3);
document.body.appendChild(div);


