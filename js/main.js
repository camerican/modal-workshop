window.addEventListener("load",function(){

  setTimeout(modalOpen,3000);
  
  // find when the user clicks .close
  // and then remove the #cover and #modal
  document.querySelector("#modal .close").addEventListener("click",modalClose);

  //document.querySelector("#launch")  //AKA
  document.getElementById("launch").addEventListener("click",modalOpen);
});

function modalOpen() {
  document.getElementById("cover").style.display = "block";
  document.getElementById("modal").style.display = "block";
  setTimeout(function(){
    document.getElementById("cover").style.opacity = 1;
    document.getElementById("modal").style.opacity = 1;
  },1); // wait just 1/1000 of a sec for style.display to finish
}
function modalClose() {
  document.getElementById("cover").style.opacity = 0;
  document.getElementById("modal").style.opacity = 0;
  setTimeout(function(){
    document.getElementById("cover").style.display = "none";
    document.getElementById("modal").style.display = "none";
  },1000); // match the css 1s transition
}



