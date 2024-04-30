let initialNumberOfSides = 16;

const parentContainer = document.querySelector(".container");
containerHeight = parentContainer.offsetHeight;
containerWidth = parentContainer.offsetWidth;

function colorRandomizer(){
    return "#" + ((1 << 24) * Math.random() | 0).toString(16).padStart(6, "0")
}

function createGrid(numSideSquares){
    clearGrid();
    for (let i = 0; i < numSideSquares*numSideSquares; i++){
        let square = document.createElement("div");
        square.style.width = containerHeight/numSideSquares+"px";
        square.style.height = containerWidth/numSideSquares+"px";
        square.style.backgroundColor = "black";
        // square.style.backgroundColor = colorRandomizer();
        square.classList.add("square");
        // square.style.border = "2px solid red";
        parentContainer.append(square);
        square.addEventListener("mouseenter",(e) => {
            // if (square.style.backgroundColor == "black"){
                square.style.backgroundColor = colorRandomizer();
            // } else {
                // square.style.backgroundColor = "black";
            }
        )
    }
}

function clearGrid(){
    while(parentContainer.firstChild){
        parentContainer.removeChild(parentContainer.lastChild);
    }
}



const resetButton = document.querySelector("button");
const inputValue = document.querySelector("input");

createGrid(initialNumberOfSides);

resetButton.addEventListener("click", () => {
    if (inputValue.value > 100 || inputValue.value < 0) {
        alert("Please enter a positive value less than or equal to 100");
    } else {
        createGrid(inputValue.value);
    }
})

