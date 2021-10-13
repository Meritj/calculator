const buttons = document.querySelectorAll(".btn");
const result = document.getElementById("result");

buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        result.textContent += e.target.id; // on recupere la touche sur laquelle on clique. avec le += on peut mettre plusieurs éléments à la suite

    });
});

equal.addEventListener('click', ()=>{
    result.textContent = eval(result.textContent); //eval est une méthode qui permet de calculer les éléments dans un textcontent.
    console.log(result);
})

clear.addEventListener('click', ()=>{
    result.textContent = "";
})

