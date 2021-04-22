$('.owl-carousel').owlCarousel({
  loop:true,
  margin:20,
  nav:true,
  responsive:{
      0:{
        
          items:1
      },
      570:{
          items:1

      },
      768:{
          items:2
      }
  }
})
    

navbar = document.querySelector(".navbar-collapse").querySelectorAll("a");
console.log(navbar);

navbar.forEach((element) => {
  element.addEventListener("click", function () {
    navbar.forEach((nav) => nav.classList.remove("active"));
    this.classList.add("active");
  });
});

const TypeWriter = function(txtElement, words, wait = 3000){
  this.txtElement = txtElement;
  this.words= words;
  this.txt='';
  this.wordIndex = 0;
  this.wait = parseInt(wait, 10);
  this.type();
  this.isDeleting = false;
}

// Type Method
TypeWriter.prototype.type= function(){
  //Current index of word
  const current = this.wordIndex % this.words.length;
  //Get full text of current word
  const fullTxt = this.words[current];

  //Check if deleting
  if(this.isDeleting){
    this.txt = fullTxt.substring(0, this.txt.length -1);
  } else {
    // Add char
    this.txt =fullTxt.substring(0, this.txt.length + 1);
  }

  //Insert txt into element
  this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

//Initial Type Speed
let typeSpeed =300;

if(this.isDeleting) {
  typeSpeed /=2;
}

// If word is complete
if(!this.isDeleting && this.txt === fullTxt){

  //Make pause at end
  typespeed = this.wait;

  //Set delete to true
  this.isDeleting = true;

}
else if(this.isDeleting && this.txt === ''){
  this.isDeleting = false;

  //Move to the next word
  this.wordIndex++;
  //Pause before start typing
  typeSpeed = 500;
}

  setTimeout(() => this.type(), typeSpeed)
}

// Init On Dom Load

document.addEventListener('DOMContentLoaded', init);

//Init App
function init(){
  const txtElement = document.querySelector('.txt-type');
  const words = JSON.parse(txtElement.getAttribute('data-words'))
  const wait = txtElement.getAttribute('data-wait');
  //Init TypeWriter
  new TypeWriter(txtElement, words, wait);

}

AOS.init({
  easing: "ease-out-back",
  duration: 800,
  delay: 300,
  once: true,
  disable: "false",
});

$(function () {
  $.hover(function () {
    animate("#hero-btn", "animate__rubberBand");

    return false;
  });

  $("#animateBtn2").hover(function () {
    animate("header", "animate__slideOutUp");
    // setTimeout(function () {
    //   $("header").css("visibility", "hidden");
    // }, 1000);
    return false;
  });

  // Animate
  function animate(element, animation) {
    $(element).addClass("animate__animated " + animation);
    var wait = setTimeout(function () {
      $(element).removeClass("animate__animated " + animation);
    }, 1000);
  }
});

