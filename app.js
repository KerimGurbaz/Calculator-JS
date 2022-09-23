const calculator = document.querySelector(".calculator");

const num = document.querySelectorAll(".num");
const operator = document.querySelectorAll(".operator");

const previous =document.querySelector(".previous-display");

const display = document.querySelector(".display");

const current = document.querySelector(".current-display");


calculator.addEventListener("click", (e)=>{
    let cur = [] ;
    let opt = [];
    if(e.target.classList.contains("num")){
    
        cur.push(e.target.innerText)
        console.log(cur)
        current.innerHTML += cur

    } else if(e.target.classList.contains("operator")){
        console.log(e.target.innerHTML)
        opt.push(e.target.innerHTML)
        previous.innerHTML +=  current.innerHTML + `${e.target.innerHTML}`
        current.innerHTML =""
    }
      else if(e.target.classList.contains("equal")){
        console.log("esittir");

        if(previous.innerHTML.slice(-1) == "+" ){
            current.innerHTML= parseInt(previous.innerHTML.slice(0,-1)) + parseInt(current.innerHTML)
        }
        else if(previous.innerHTML.slice(-1) == "-"){
            current.innerHTML= parseInt(previous.innerHTML.slice(0,-1)) - parseInt(current.innerHTML)
        }
        else if(previous.innerHTML.slice(-1) == "x"){
            current.innerHTML= parseInt(previous.innerHTML.slice(0,-1)) * parseInt(current.innerHTML)
        }
        else if(previous.innerHTML.slice(-1) == "÷"){
            current.innerHTML= parseInt(previous.innerHTML.slice(0,-1)) / parseInt(current.innerHTML)
        }

    }
    else if(e.target.classList.contains("ac")){
        current.innerHTML =""
        previous.innerHTML =""
    }
    else if(e.target.classList.contains("pm")){
        if(current.innerHTML > 0){
            current.innerHTML ="-".concat(current.innerHTML)
        }else if(current.innerHTML < 0){
            current.innerHTML =current.innerHTML.slice(1)
        }
    }


  

console.log(opt)
console.log(typeof current.innerHTML)


})