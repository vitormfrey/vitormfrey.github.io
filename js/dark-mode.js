function myFunction() {
  var element = document.body;
  var card = document.getElementsByClassName("card-body")
  element.classList.toggle("dark-mode");
  for(let i = 0;i< card.length; i++){
    card[i].classList.toggle("black-card");
  }
  
}