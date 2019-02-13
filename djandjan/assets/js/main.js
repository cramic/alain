
window.onload = function(e){ 
  
  let burger = document.querySelector('#menuBurger');
  let menu = document.getElementById('menu');

  
  burger.addEventListener('click', () => { 
    menu.classList.toggle("visible");
  });
}



