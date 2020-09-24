//Header home-page Function

window.addEventListener("scroll", function(){
  var header =  document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY> 0);})


//Slide Function 
//Desenvolvido com base nos estudo pelo https://www.w3schools.com/howto/howto_js_slideshow.asp
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("adega-slide");
  var dots = document.getElementsByClassName("dot");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 6000); 
}


// Dark-Mode Function
function darkModeTheme() {
  var element = document.body;
  var card = document.getElementsByClassName("card-body")
  var contato = document.getElementsByClassName("contato")
  element.classList.toggle("dark-mode");
 
  
  for(let i = 0; i< contato.length; i++){
    contato[i].classList.toggle("contato-dark")
  }
  for(let i = 0;i< card.length; i++){
    card[i].classList.toggle("black-card");
  }
  
}


//Validação dos inputs
function validacaoInputs(){

  const contato ={
    nome: document.getElementById('nome').value,
    email: document.getElementById('email').value,
    mensagem: document.getElementById('mensagens').value 
  }

  if( contato.nome == ""){
    alert("Preencha seu nome")
    return
  }

  else if(contato.email == ""){
    alert("Preencha seu e-mail")
    
  }
  else if(contato.mensagem == ""){
    alert("Preencha sua mensagem")
    
  }
  
  else{
    alert("Envio feito com sucesso")
  }

  console.log(contato)// esse console foi colocado apenas para exibir o OBj no console do navegador
}

