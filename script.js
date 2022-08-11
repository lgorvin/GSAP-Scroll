//Code by, Luca Gorvin.
gsap.registerPlugin(Observer);

// All background elements
let bg1 = document.getElementById('bg1');
let bg2 = document.getElementById('bg2');
let bg3 = document.getElementById('bg3');
let bg4 = document.getElementById('bg4');

//All text elements
let title1 = document.getElementById('title1');
let text1 = document.getElementById('text1');
let title2 = document.getElementById('title2');
let text2 = document.getElementById('text2');
let title3 = document.getElementById('title3');
let text3 = document.getElementById('text3');
let title4 = document.getElementById('title4');
let text4 = document.getElementById('text4');

//Counter to keep track where the user is on the page
let counter = 0;

//function that handles scroll down events
function next() {
  counter++;  //Counter increments everytime the mouse is scrolled down.
  console.log(counter);
  if (counter == 1) { //handles the first scroll down and moves the first background away and pushes the next one up
    //gsap anims for moving the backgrounds
    gsap.to(".bg1", {x: "-100vw", duration: 2});
    gsap.to(".bg2", {y: "-100vh", duration: 2});    
    //opacity styles to create a fade-in effect when scrolled
    bg1.style.opacity = 0;
    title1.style.opacity = 0;
    text1.style.opacity = 0;   
    counter = 1; //set counter to 1 so next increment will be 2
  } else if (counter == 2) { //handles the second scroll down and moves the second background away and pushes the next one up
    //gsap anims for moving the backgrounds
    gsap.to(".bg2", {x: "100vw", duration: 2});
    gsap.to(".bg3", {y: "-200vh", duration: 2});
    //opacity styles to create a fade-in effect when scrolled
    bg2.style.opacity = 0;
    title2.style.opacity = 0;
    text2.style.opacity = 0;
  } else if (counter == 3) { //handles the third scroll down and moves the third background away and pushes the next one up
    //gsap anims for moving the backgrounds
    gsap.to(".bg3", {x: "-100vw", duration: 2});
    gsap.to(".bg4", {rotation: -360, y: "-300vh", duration: 2});    
    //opacity styles to create a fade-in effect when scrolled
    bg3.style.opacity = 0;
    title3.style.opacity = 0;
    text3.style.opacity = 0;   
  } else if (counter > 3) { //Stops the user from scrolling more than the amount of backgrounds
    counter = 3;
  }
}

function previous() { //function that handles scroll up events
  counter--;  //counter decrease on every scroll up
  if (counter == 0) { //scrolls back up to the first bg if the user is currently on the second bg
    //gsap anims for moving the backgrounds
    gsap.to(".bg1", {rotation: 360, x: "-0vw", duration: 2});
    gsap.to(".bg2", {y: "0vh", duration: 2});
    //opacity styles to create a fade-in effect when scrolled
    bg1.style.opacity = 1;
    title1.style.opacity = 1;
    text1.style.opacity = 1;
    counter = 0;
  } else if (counter == 1) { //scrolls back up to the second bg if the user is currently on the third bg
    //gsap anims for moving the backgrounds
    gsap.to(".bg2", {x: "-0vw", duration: 2});
    gsap.to(".bg3", {y: "0vh", duration: 2});
    //opacity styles to create a fade-in effect when scrolled
    bg2.style.opacity = 1;
    title2.style.opacity = 1;
    text2.style.opacity = 1;
  } else if (counter == 2) { //scrolls back up to the third bg if the user is currently on the fourth bg
    //gsap anims for moving the backgrounds
    gsap.to(".bg3", {x: "-0vw", duration: 2});
    gsap.to(".bg4", {rotation: -0, y: "0vh", duration: 3});
    //opacity styles to create a fade-in effect when scrolled
    bg3.style.opacity = 1;
    title3.style.opacity = 1;
    text3.style.opacity = 1;
  } else if (counter < 0) { //Stops the user from scrolling higher than the first bg
    counter = 0;
  }
  
}

//GSAP observer for detecting scroll up and down
Observer.create({
  target: window,        
  type: "wheel,touch",    
  onUp: () => previous(), 
  onDown: () => next(),
});