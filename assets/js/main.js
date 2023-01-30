window.onload=function(){
  var slikasrc=document.querySelector("#slika");
  slikasrc.src=slicice[0];
  slikasrc.alt=sliciceAlt[0];
  console.log(slikasrc);
  window.setInterval(function(){shuffleImg(slikasrc,slicice,sliciceAlt)},5000);
}
var slicice=["assets/img/kafic.jpg","assets/img/kafic2.jpg","assets/img/vikend.jpg"];
var sliciceAlt=["kafic stolice","kafic sank","rokeri"];
var menu = document.querySelector(".menu");
var menuItems = document.querySelectorAll(".menuItem");
var hamburger= document.querySelector(".hamburger");
var menuIcon = document.querySelector(".menuIcon");
var i=1;

function penis(){
  console.log("penis");
}

function shuffleImg(slika,src,alt){
  slika.src=slicice[i];
  slika.alt=alt[i];
  console.log(i);
  if(i==src.length-1){
    i=0;
  }
  else{
    i++;
  }
}

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menuIcon.classList.add("fa-bars");
    menuIcon.classList.remove("fa-x")
    menu.classList.remove("showMenu");
  } else {
    menuIcon.classList.remove("fa-bars");
    menuIcon.classList.add("fa-x")
    menu.classList.add("showMenu");
  }
}

hamburger.addEventListener("click", toggleMenu);

menuItems.forEach( 
  function(menuItem) { 
    menuItem.addEventListener("click", toggleMenu);
  }
)