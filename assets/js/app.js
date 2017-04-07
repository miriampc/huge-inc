window.addEventListener('load',function(){
  var menu=document.getElementsByClassName('menu');
  var toggle=document.getElementById('toggle');
  toggle.onclick=function(e){
    e.preventDefault();
    toggle.classList.toggle("open");
    // document.getElementById('body').classList.toggle("open");
  }
});
