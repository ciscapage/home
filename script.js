let search = document.querySelector('.search-box');

document.querySelector('#search-icon').onclick = () =>{
  search.classList.toggle('active');
  cart.classList.remove('active');
   navbar.classList.remove('active');
}

let cart = document.querySelector('.cart');

document.querySelector('#cart-icon').onclick = () =>{
  cart.classList.toggle('active');
   search.classList.remove('active');
    navbar.classList.remove('active');
}



let navbar = document.querySelector('.navbar');

document.querySelector('#menu-icon').onclick = () =>{
  navbar.classList.toggle('active');
  search.classList.remove('active');
   cart.classList.remove('active');
  
 
}

window.onscroll = () => {
   
  search.classList.remove('active');
   cart.classList.remove('active');
     navbar.classList.remove('active');
}


//NAVBAR SCROLL



//SWIPER

window.alert('Hi there, Welcome to Cisca Page.');