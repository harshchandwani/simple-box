var rect = document.querySelector("#center");
rect
.addEventListener("mousemove", function (event) {
    var recLocation = rect.getBoundingClientRect();
    var insideRectVal = event.clientX - recLocation.left;
    // console.log(recLocation.width);
    // console.log(event.clientX - recLocation.left);
    
    if(insideRectVal <= recLocation.width/2){
        rect.style.backgroundColor = "pink";
        var redColor = gsap.utils.mapRange(0, 250, 255, 0, 23)
        console.log("left");
        gsap.to(rect, {
            color: ``
        })
    }
    else{
        rect.style.backgroundColor = "red";
        console.log("right");
    }
});