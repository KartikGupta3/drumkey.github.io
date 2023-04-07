
for(var i=0;i<document.querySelectorAll(".drum").length;i++){
  document.querySelectorAll(".drum")[i].addEventListener("click",function (){
    var b=this.innerHTML;
    makeSound(b);
    makeAnimation(b);
  });
}
document.addEventListener("keypress",function(event){
  makeSound(event.key);
  makeAnimation(event.key);
});
function makeSound(key){
  switch(key){
    case "k":
      var tom1=new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      var tom2=new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "v":
      var tom3=new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "i":
      var tom4=new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      var snare=new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "r":
      var crash=new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "h":
      var kick=new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
    default:
      console.log(b);
  }
}
function makeAnimation(currentKey){
  var c=document.querySelector("."+currentKey);
  c.classList.add("pressed");

  setTimeout(function(){
    c.classList.remove("pressed");
  },100);

}
