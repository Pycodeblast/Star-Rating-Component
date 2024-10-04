let container = document.getElementById("star-container");
let star = document.querySelectorAll(".star");
let filled = 0;

container.addEventListener("click", function(e){
    let curclicked = e.target.dataset.index;
    console.log(curclicked);

    for(let i = 0; i < filled; i++){
        star[i].classList.remove("star-filled");
    }
    
    for(let i = 0; i < curclicked; i++){
        star[i].classList.add("star-filled");
    }

    document.getElementById("count").innerHTML = `Rating Count: ${curclicked}` ;
    filled = curclicked;
});

container.addEventListener("mouseover", function(e){
    let curclicked = e.target.dataset.index;

    for(let i = 0; i < 5; i++){
        star[i].classList.remove("star-filled");
    }
    
    for(let i = 0; i < curclicked; i++){
        star[i].classList.add("star-filled");
    }
    
});

container.addEventListener("mouseleave", function(e){

    for(let i = 0; i < 5; i++){
        star[i].classList.remove("star-filled");
    }
    
    for(let i = 0; i < filled; i++){
        star[i].classList.add("star-filled");
    }
});