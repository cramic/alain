
window.onload = function(e){ 
  console.log("window.onload", e, Date.now());
  
  let burger = document.querySelector('#menuBurger');
  let menu = document.getElementById('menu');

  
  burger.addEventListener('click', () => { 
    menu.classList.toggle("visible");
  });
}



