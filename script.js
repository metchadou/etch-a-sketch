buildGrid();

const btn = document.querySelector("button");

btn.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector(".grid").remove();

    let input = prompt("Enter the number of squares per side for the new grid (1 - 100)");

    while ( String(+input) == "NaN" || 
        typeof +input != "number" || 
        +input > 100 ||
        +input < 1
    ) {
        input = prompt("Please enter a number between 1 and 100");
    }

    let grid = buildGrid(+input);
    document.querySelector("body").appendChild(grid);
});

function buildGrid(size = 16) {
    let grid = document.querySelector(".grid") || document.createElement("div");

    grid.classList.add("grid");

    for (let i = 0; i < Math.pow(size, 2); i++) {
        let gridSquare = document.createElement("div");
        const dimension = 960 / size;
        gridSquare.style.width = `${dimension}px`;
        gridSquare.style.height = `${dimension}px`;
        gridSquare.style.borderRight = `solid 1px rgb(0 0 0 / 0.1)`;
        gridSquare.style.borderBottom = `solid 1px rgb(0 0 0 / 0.1)`;
        gridSquare.classList.add("grid-square");

        gridSquare.addEventListener("mouseenter", e => {
            if (gridSquare.style.backgroundColor == "") {
                const red = getRandomColorValue(0, 255);
                const green = getRandomColorValue(0, 255);
                const blue = getRandomColorValue(0, 255);

                gridSquare.style.backgroundColor = `rgb(${red} ${green} ${blue})`;
                gridSquare.style.opacity = "0.1";

                gridSquare.backgroundColorRed = red;
                gridSquare.backgroundColorGreen = green;
                gridSquare.backgroundColorBlue = blue;
            } else {
                gridSquare.style.opacity = +gridSquare.style.opacity + 0.1
            }
            
        });

        grid.appendChild(gridSquare);
    }

    return grid;
}

function getRandomColorValue(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}