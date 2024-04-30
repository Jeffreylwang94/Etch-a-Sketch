let numSquares = 16;

const parentContainer = document.querySelector(".container");


for (let i = 0; i < numSquares; i++){
    let square = document.createElement("div");
    square.style.height = "200px";
    square.style.width = "200px";
    square.style.backgroundColor = "black";
    // square.style.border = "2px solid red";
    parentContainer.append(square);
}

