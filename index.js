for(let j=1;j<=4;j++){
    document.querySelector(".button-"+j.toString()).addEventListener("click", function(){
        for(var i = 0;i<document.querySelectorAll(".carousel-item").length;i++){
            document.querySelectorAll(".carousel-item")[i].classList.remove("carousel-active")
        }
        document.querySelector(".carousel-item-"+j.toString()).classList.add("carousel-active")
        for(var i = 0;i<document.querySelectorAll(".button").length;i++){
            document.querySelectorAll(".button")[i].classList.remove("button-active")
        }
        document.querySelector(".button-"+j.toString()).classList.add("button-active")
    })
}


