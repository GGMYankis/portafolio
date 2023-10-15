let menuIcon = document.querySelector("#menu-icon-bar");
let navbar = document.querySelector(".navbar");
let mode = document.querySelector("#mode");
let iconMode = document.querySelector("#mode i");
//let top = document.querySelectorAll(".top");
let left = document.querySelectorAll(".leftAnimado");
let right = document.querySelectorAll(".rightAnimado");


/* function mostrarScrollTop() {
    let scrollTop = document.documentElement.scrollTop;
    for(var i=0; i < top.length; i++){
          let alturaAnimado = left[i].offsetTop;
          if(alturaAnimado - 300 < scrollTop){
                top[i].style.opacity = 1;
                top[i].classList.add("bottom")
           }      
    }
} */

function mostrarScrollLeft () {
  let scrollTop = document.documentElement.scrollTop;
  for(var i=0; i < left.length; i++){
        let alturaAnimado = left[i].offsetTop;
        if(alturaAnimado - 300 < scrollTop){
              left[i].style.opacity = 1;
              left[i].classList.add("left")
         }      
  }
}

 function mostrarScrollRight() {
  let scrollTop = document.documentElement.scrollTop;
  for(var i=0; i < right.length; i++){
        let alturaAnimado = right[i].offsetTop;
        if(alturaAnimado - 900 < scrollTop){
              right[i].style.opacity = 1;
              right[i].classList.add("right")
         }      
  }
} 
 

document.addEventListener("DOMContentLoaded", function () {
  const btn = document.querySelector('#mode');
  const modoUpload = localStorage.getItem('mode');
  if (modoUpload == 'white') {
      document.body.classList.toggle('white-mode')
      iconMode.classList.toggle("sun")
      iconMode.classList.toggle("bx-sun")
  }

  btn.addEventListener('click', () => {
      document.body.classList.toggle('white-mode')
      const modoTema = localStorage.getItem('mode')
      if (modoTema == 'white') {
          localStorage.setItem('mode', 'dark')
      } else {
          localStorage.setItem('mode', 'white')
      }
  })
})

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("actives");
};

mode.addEventListener("click", () => {
  iconMode.classList.toggle('bx-sun');
  iconMode.classList.toggle('sun');
});


let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");
let caja = document.querySelector(".cont");

window.onscroll = () => {
 
/*   mostrarScrollLeft();
 mostrarScrollRight(); */

  sections.forEach((sec) => {
    let top = window.scrollY; // optiene lo la medida de lo que te has desplazado
    let offset = sec.offsetTop - 150; //optiene la altura en que esta el elemento de la ventana
    let height = sec.offsetHeight; // obtiene la altura de las sessiones

    let id = sec.getAttribute("id");
    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });

  let header = document.querySelector(".header");

 /*  header.classList.toggle('scroll' , window.scrollY > 0)  */

  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("actives");
};

 ScrollReveal({
  reset: false,  
  distance: "80px",
  duration: 2000,
  delay: 200,
});
 
 ScrollReveal().reveal(".home-content, .heading , .about-content h1 , .contact .heading  , .header ", { origin: "top" });
ScrollReveal().reveal(".home-img, ", { origin: "bottom" });

ScrollReveal().reveal(".git , .education-content", { origin: "right" }); 
ScrollReveal().reveal(".fack , .about-img , .about-svg", { origin: "left" }); 
ScrollReveal().reveal(".about-lenguaje p , .div_icon , .animation", { origin: "bottom" });

  

ScrollReveal().reveal('.div_icon ul li , .education-img ,.certification-box', {
    origin: 'top',
    rotate: {
      x: 0, 
      y: 180, 
      z: 0,
    },
  });
   