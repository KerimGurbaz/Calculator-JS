const calculator = document.querySelector(".calculator");

const previous =document.querySelector(".previous-display");

const current = document.querySelector(".current-display");


calculator.addEventListener("click", (e)=>{
    let cur = [] ;
    if(e.target.classList.contains("num")){
        cur.push(e.target.innerText)
        console.log(cur)
        current.innerHTML += cur
    }
    else if(e.target.)






})