const container = document.getElementById("container");
const btn = document.getElementById("btn")

let divs = [];

const createGrid = n =>{
    let fragment = document.createDocumentFragment();
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
}

btn.addEventListener("click",()=>{
    let n = 0;
    n = prompt("num");
    n = parseInt(n)
    createGrid(n);
    divs.forEach((div)=>{
        div.addEventListener("mouseover",()=>{
            div.style.backgroundColor = "#e55"
        })
    })
})



