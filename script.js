var carobox = document.querySelector(".carouselbox");
var prevEl = document.querySelector(".prev");
var nextEl = document.querySelector(".next");
var photoEl = document.querySelector("#photos");
// var prevEl = document.querySelectorAll(".prev");
// var nextEl = document.querySelectorAll(".next");
var html = "";
var index = 0;
var images = [
    "DSC06928.JPG",
    "DSC06942.JPG",
    "DSC06945.JPG",
    "DSC06946.JPG",
    "DSC06950.JPG",
    "DSC06951.JPG",
    "DSC06956.JPG",
    "DSC06970.JPG",
    "DSC06974.JPG",
    "DSC06975.JPG",
    "DSC06976.JPG"
]

function insertImage(direction){
    index = index + direction;
    if(index < 0){
        index = images.length - 1;
        photoEl.innerHTML = `<img src="./images/${images[index]}" alt="images[${0}]">`;
    }
    else if ( index > images.length - 1 ){
        index = 0; 
        photoEl.innerHTML = `<img src="./images/${images[index]}" alt="images[${0}]">`;
    }
    else {
        
        photoEl.innerHTML = `<img src="./images/${images[index]}" alt="images[${0}]">`;
    }
}

prevEl.addEventListener("click", function(event){
    // event.preventDefault();
    event.stopPropagation();
   
    insertImage(-1);
})

nextEl.addEventListener("click", function(event){
    // event.preventDefault();
    event.stopPropagation();
    insertImage(1);
})



insertImage(0);

