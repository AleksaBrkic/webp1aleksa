window.onload=function(){
  var slikasrc=document.querySelector("#slika");
  slikasrc.src=slike[0].putanja;
  slikasrc.alt=slike[0].altSlike;
  window.setInterval(function(){shuffleImg(slikasrc,slike)},5000);
  ispisMeni(Alk,meniAlk);
  ispisMeni(BezAlk,meniBezAlk);
  datum();
}
var slike=[
  {
    putanja:"assets/img/kafic.jpg",
    altSlike:"kaficStolice"
  },
  {
    putanja:"assets/img/kafic2.jpg",
    altSlike:"kaficSank"
  },
  {
    putanja:"assets/img/vikend.jpg",
    altSlike:"rokeri"
  }
];
var nizMenu=[
  {
    value:"POČETAK",
    href:"#pocetak"
  },
  {
    value:"O NAMA",
    href:"#onama"
  },
  {
    value:"MENI",
    href:"#MENI"
  },
  {
    value:"PIŠITE NAM",
    href:"#pisitenam"
  },
  {
    value:"AUTOR",
    href:"autor.html"
  },
];
var meniBezAlk=[
  {
    ime:"Zeleni čaj",
    src:"assets/img/caj.jpg",
    cena:"120"
  },
  {
    ime:"Kafa",
    src:"assets/img/kafa.jpg",
    cena:"120"
  },
  {
    ime:"Kisela voda",
    src:"assets/img/kisela.jpg",
    cena:"80"
  },
  {
    ime:"Coca-Cola",
    src:"assets/img/kokakola.jpg",
    cena:"80"
  },
  {
    ime:"Limunada",
    src:"assets/img/limunada.jpg",
    cena:"120"
  },
  {
    ime:"Ceđeni sok od pomorandže",
    src:"assets/img/sok.jpg",
    cena:"120"
  }
];
var meniAlk=[
  {
    ime:"Svetlo pivo točeno 500ml",
    src:"assets/img/pivo.jpg",
    cena:"200"
  },
  {
    ime:"Crveno vino",
    src:"assets/img/vino.jpg",
    cena:"250"
  },
]
const expImePrezime=/[A-ZČĆŽŠĐ][a-zčćžšđ]{1,11}/;
const expEmail=/^[a-zA-Z0-9.!#$%&'*+=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
var menu = document.querySelector(".menu");
var menuItems = document.querySelectorAll(".menuItem");
var hamburger= document.querySelector(".hamburger");
var menuIcon = document.querySelector(".menuIcon");
var Alk = document.querySelector("#Alk");
var BezAlk = document.querySelector("#BezAlk");
var godina = document.querySelector("#godina");
var mesec = document.querySelector("#mesec");
var dan = document.querySelector("#dan");
var i=1;
// Menjanje glavne slike 
function shuffleImg(slika,nizSlika){
  slika.src=nizSlika[i].putanja;
  slika.alt=nizSlika[i].altSlike;
  if(i==nizSlika.length-1){
    i=0;
  }
  else{
    i++;
  }
}
//Podizanje i spustanje menija za navigaciju
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
//Prikazivanje pića na meniju
function ispisMeni(el,nizSlika){
  for(let i=0;i<nizSlika.length;i++){
    let divEl=(`<div class="col-4 text-center flex-wrap mt-3 content-2 border fit-content">`
    +`<div><img src="`+nizSlika[i].src+`"alt="`+nizSlika[i].ime+`"/></div>`
    +`<p class="h2 mt-1">`+nizSlika[i].ime+`<br/>`+nizSlika[i].cena+` din</p>`);
    el.innerHTML=el.innerHTML+divEl;
  }
}
//Dodavanje opcija u dropdown listama za datum rodjenja
function datum(){
  var trenutnaGodina=new Date().getFullYear();
  for (let i=trenutnaGodina;i>=1900;i--){
    godina.innerHTML=godina.innerHTML+`<option>`+i+`</option>`
  }
  for (let i=12;i>=1;i--){
    mesec.innerHTML=mesec.innerHTML+`<option>`+i+`</option>`
  }
  for (let i=31;i>=1;i--){
    dan.innerHTML=dan.innerHTML+`<option>`+i+`</option>`
  }
}

document.querySelector("#dugmePosalji").addEventListener("click",function(){
  var inputIme=document.querySelector("#ime").value.trim();
  var inputPrezime=document.querySelector("#prezime").value.trim();
  var inputEmail=document.querySelector("#email").value.trim();
  var inputGodina=document.querySelector("#godina").value.trim();
  var inputMesec=document.querySelector("#mesec").value.trim();
  var inputDan=document.querySelector("#dan").value.trim();
  var inputRod=document.getElementsByName("rod");
  var inputPoruka=document.querySelector("#poruka").value.trim();
//ime
  if(inputIme==""){
    document.querySelector("#ime").classList.add("lose");
    document.querySelector("#ime").classList.remove("dobro");
  }
  else if(!expImePrezime.test(inputIme)){
    document.querySelector("#ime").classList.add("lose");
    document.querySelector("#ime").classList.remove("dobro");
  }
  else{
    document.querySelector("#ime").classList.add("dobro");
    document.querySelector("#ime").classList.remove("lose");
  }
  //prezime
  if(inputPrezime==""){
    document.querySelector("#prezime").classList.add("lose");
    document.querySelector("#prezime").classList.remove("dobro");
  }
  else if(!expImePrezime.test(inputPrezime)){
    document.querySelector("#prezime").classList.add("lose");
    document.querySelector("#prezime").classList.remove("dobro");
  }
  else{
    document.querySelector("#prezime").classList.add("dobro");
    document.querySelector("#prezime").classList.remove("lose");
  }
  //email
  if(inputEmail==""){
    document.querySelector("#email").classList.add("lose");
    document.querySelector("#email").classList.remove("dobro");
  }
  else if(!expEmail.test(inputEmail)){
    document.querySelector("#email").classList.add("lose");
    document.querySelector("#email").classList.remove("dobro");
  }
  else{
    document.querySelector("#email").classList.add("dobro");
    document.querySelector("#email").classList.remove("lose");
  }
  //godina
  if(inputGodina=="Godina"){
    document.querySelector("#godina").classList.add("lose");
    document.querySelector("#godina").classList.remove("dobro");
  }
  else{
    document.querySelector("#godina").classList.add("dobro");
    document.querySelector("#godina").classList.remove("lose");
  }
  //mesec
  if(inputMesec=="Mesec"){
    document.querySelector("#mesec").classList.add("lose");
    document.querySelector("#mesec").classList.remove("dobro");
  }
  else{
    document.querySelector("#mesec").classList.add("dobro");
    document.querySelector("#mesec").classList.remove("lose");
  }
  //dan
  if(inputDan=="Dan"){
    document.querySelector("#dan").classList.add("lose");
    document.querySelector("#dan").classList.remove("dobro");
  }
  else{
    document.querySelector("#dan").classList.add("dobro");
    document.querySelector("#dan").classList.remove("lose");
  }
  //rod
  let checkedRod=false;
  for(let i=0;i<inputRod.length;i++){
    if(inputRod[i].checked){
      checkedRod=true;
      break;
    }
  }
  if(checkedRod){
    document.querySelector("#greskaRod p").innerHTML="";
  }
  else{
    document.querySelector("#greskaRod p").innerHTML="Izaberite rod!";
  }
  //textarea
  if(inputPoruka==""){
    document.querySelector("#poruka").classList.add("lose");
    document.querySelector("#greskaPoruka p").innerHTML="Ne možete poslati praznu poruku!"
  }
  else{
    document.querySelector("#poruka").classList.remove("lose");
    document.querySelector("#greskaPoruka p").innerHTML=""
  }
})

//jquery
$(document).ready(function(){
  $('#more').css("display","none");
  $('#dugmePrikaziVise').click(function(){
    if($('#more').is(':visible')){
      $('#more').hide("fast");
      $(this).val('Prikaži više');
    }
    else{
      $('#more').show("fast");
      $(this).val('Prikaži manje');
    }
  });
  $('#dugmeAlk').addClass('aktivan');

  $('#dugmeAlk').click(function(){
    $('#dugmeAlk').addClass('aktivan');
    $('#dugmeBezAlk').removeClass('aktivan');
    $('#Alk').css("display","flex");
    $('#BezAlk').css("display","none");
  })

  $('#dugmeBezAlk').click(function(){
    $('#dugmeBezAlk').addClass('aktivan');
    $('#dugmeAlk').removeClass('aktivan');
    $('#Alk').css("display","none");
    $('#BezAlk').css("display","flex");
  })
})