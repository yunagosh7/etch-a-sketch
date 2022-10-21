const btn = document.getElementById("btn");
const main = document.getElementById("main")

let divs = []

const container = document.createElement("div");
container.id = "container";
const displayGrid = ()=>{
    const fragment = document.createDocumentFragment();
    container.style.display = "grid";
    container.style.gridTemplateColumns = "16"
    container.style.gridTemplateRows = "16"
for(let i = 0; i < 256;i++){
    const div = document.createElement("div");
    div.classList = "grid-item";
    fragment.appendChild(div);
    }
    container.appendChild(fragment)
    main.appendChild(container)
}

displayGrid()

const createGrid = n =>{
    divs = [];
    main.removeChild(container)
    const container = document.createElement("div");
    container.id = "container";
    const fragment = document.createDocumentFragment();
    let num = 0;
    num = n * n 
    for(let i = 0; i < num; i++){
        const div = document.createElement("div");
        div.classList = "grid-item";
        container.style.gridTemplateColumns = `repeat(${n},1fr)`
        container.style.gridTemplateRows = `repeat(${n},1fr)`
        divs.push(div)
        fragment.appendChild(div);
   }
   
   container.appendChild(fragment)
    main.appendChild(container)
}


    
    

btn.addEventListener("click",()=>{
    let n = 0;
    n = prompt("num");
    n = parseInt(n)
    createGrid(n);
    divs.forEach(div=>{
        div.addEventListener("click",()=>{
            div.style.backgroundColor = "red"
        })
    })
    })




