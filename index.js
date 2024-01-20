//Prevent App From Zoom

document.addEventListener('touchstart', function(event) {

  if (event.touches.length > 1) {
  
    event.preventDefault();
  
    }
  
  },
  
  { passive: false });
    
  document.addEventListener('wheel', function(event) {
  
  if ((event.ctrlKey || event.metaKey) && !event.shiftKey) {
  
    event.preventDefault();
  
  }
        
});

const DIV=document.querySelector('div');

const BODY=document.querySelector('body');

// Now you can use the StatusBar API

let STATUSMODE = localStorage.getItem('ModeColour');

if (!STATUSMODE) {

  // Set default color if nothing is in localStorage

  STATUSMODE = 'gainsboro'; 
    
  localStorage.setItem('ModeColour', STATUSMODE);
    
}

// Set the background color of DIV

DIV.style.background = STATUSMODE;

BODY.style.background = STATUSMODE;

//Set The Device type(Android,Ios,Web,Windows)

localStorage.setItem('Device','Android');

DIV.innerHTML=`

<img class='SplashScreenImage' src='./ASSETS/IMAGES/logo.png'/>

`;

setTimeout(() => {

  import("./START/AppStart.js").then((module) => {
        
    const { CONNECTION } = module;

    CONNECTION(DIV);

  });

}, 2000);