const btn = document.getElementById("btn");
const main = document.getElementById("main");
const inputRange = document.getElementById("inputRange");
const labelRange = document.getElementById("labelRange");
const inputColor = document.getElementById("inputColor");
const erase = document.getElementById("erase");
labelRange.innerText = inputRange.value

let color = "#000";
inputColor.addEventListener("change",()=>{
  color = inputColor.value
})



let divs = [];

const container = document.createElement("div");
container.id = "container";
const displayGrid = () => {
  const fragment = document.createDocumentFragment();
  container.style.display = "grid";
  container.style.gridTemplateColumns = "repeat(16, 1fr)";
  container.style.gridTemplateRows = "repeat(16,1fr)";
  for (let i = 0; i < 256; i++) {
    const div = document.createElement("div");
    div.classList = "grid-item";
    fragment.appendChild(div);
  }
  container.appendChild(fragment);
  main.appendChild(container);
  container.childNodes.forEach((c) => {
    divs.push(c);
  });
  divs.forEach((div) => {
    div.addEventListener("click", () => {
      div.style.backgroundColor = color;
    });
  });
};

displayGrid();

const createGrid = (n) => {
  divs = [];
  const containerToRemove = document.getElementById("container");
  const container = document.createElement("div");
  container.id = "container";
  const fragment = document.createDocumentFragment();
  let num = 0;
  num = n * n;
  for (let i = 0; i < num; i++) {
    const div = document.createElement("div");
    div.classList = "grid-item";
    container.style.gridTemplateColumns = `repeat(${n},1fr)`;
    container.style.gridTemplateRows = `repeat(${n},1fr)`;
    divs.push(div);
    fragment.appendChild(div);
  }
  container.appendChild(fragment);
  main.replaceChild(container, containerToRemove);
};

inputRange.addEventListener("mousemove", () => {
  labelRange.innerText = inputRange.value;
});

btn.addEventListener("click", () => {
  n = inputRange.value;
  createGrid(n);
  color = inputColor.value;
  divs.forEach((div) => {
    div.addEventListener("click", () => {
      div.style.backgroundColor = color;
    });
  });
});





erase.addEventListener("click",()=>{
  divs.forEach(div=>{
    div.style.backgroundColor = "#fff" 
  })
})
