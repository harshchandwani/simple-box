var rect = document.querySelector("#center");
rect
.addEventListener("mousemove", function (event) {
    var recLocation = rect.getBoundingClientRect();
    var insideRectVal = event.clientX - recLocation.left;
    // console.log(recLocation.width);
    // console.log(event.clientX - recLocation.left);
    
    if(insideRectVal <= recLocation.width/2){
        // rect.style.backgroundColor = "pink";
        var redColor = gsap.utils.mapRange(0, recLocation.width/2, 255, 0, insideRectVal);
        // console.log("left");
        gsap.to(rect, {
            backgroundColor: `rgb(${redColor},0,0)`,
            ease: Power4,
        })
    }
    else{
        // rect.style.backgroundColor = "red";
        console.log("right");
        var blueColor = gsap.utils.mapRange(recLocation.width/2, recLocation.width, 0, 255, insideRectVal);
        // console.log("left");
        gsap.to(rect, {
            backgroundColor: `rgb(0,0,${blueColor})`,
            ease: Power4,
        })
    }
});


rect.addEventListener("mouseleave", function(){
    gsap.to(rect,  {
        backgroundColor: "white"
    })
})