const container = document.getElementById("container");
const fragment = document.createDocumentFragment();
let divs = [];


for(let i = 0; i < 256; i++){
    const div = document.createElement("div");
    div.classList = "grid-item" 
    divs.push(div)
    fragment.appendChild(div);
}

divs.forEach(div=>{
    div.addEventListener("mouseover",()=>{
        div.style.backgroundColor = "#e55"
    })
})


container.appendChild(fragment)
