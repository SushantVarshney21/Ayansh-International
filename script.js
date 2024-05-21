const bar = document.getElementById('bar');
const nav = document.querySelector('#navbar ul');
const close = document.getElementById('close');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}
if(close){
    close.addEventListener('click',() =>{
        nav.classList.remove('active')
    })
}



// Get the container element
var btnContainer = document.getElementById("link-con");

// Get all buttons with class="btn" inside the container
var btns = btnContainer.getElementsByClassName("nav-btn");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}




const slides = document.querySelectorAll(".slide")
var counter = 0

slides.forEach(
    (slide,index)=>{
        slide.style.left = `${index * 100}%`
    }
)

const goPrev= ()=>{
    if(counter == 0){
        counter = slides.length - 1;
        slideImage()
    }else{
        counter--
        slideImage()
    }
}
const goNext = ()=>{
    console.log("next")
    if(counter == slides.length-1){
        counter = 0
        slideImage()
    }else{
        counter++
        slideImage()
    }
}


    setInterval(()=>{
            if(counter == slides.length-1){
                counter = 0
                slideImage()
            }else{
                counter++
                slideImage()
            }
    },4000)
    


const slideImage = ()=>{
    slides.forEach((slide)=>{
        slide.style.transform = `translateX(-${counter * 100}%)`
    })
}
