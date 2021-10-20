const buttons = document.querySelectorAll(".btn");
const result = document.getElementById("result");

buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        result.textContent += e.target.id; 

    });
});

equal.addEventListener('click', ()=>{
    result.textContent = eval(result.textContent); 
    console.log(result);
})

clear.addEventListener('click', ()=>{
    result.textContent = "";
})

