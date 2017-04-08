//Verifica que los elementos en html se haya cargado completamente
window.addEventListener('load',function(){
  var docFragment=document.createDocumentFragment();
  var codersGrid=document.getElementById('coders-grid');

  coder.allCoders.forEach(function(e,id){
    var figure=document.createElement('figure');
    var image=document.createElement('img');
    var caption=document.createElement('figcaption');
    var spanName=document.createElement('span');
    figure.setAttribute("class","image-coder");
    image.setAttribute("id","coder"+id);
    image.src="assets/images/students/"+(id+1)+".png";//e.url;//+(id+1)+".png";
    caption.setAttribute("class",'name-coder');
    figure.appendChild(image);
    spanName.appendChild(document.createTextNode(e));
    caption.appendChild(spanName);
    figure.appendChild(caption);
    docFragment.appendChild(figure);
    codersGrid.appendChild(docFragment);

  });
});

var navHeader=document.getElementById('nav-header');
var toggle=document.getElementById('toggle');

//Ejecuta el evento click del menu para cambiar al menu-nav
toggle.onclick=function(e){
  e.preventDefault();
  navHeader.classList.toggle("open");
  document.getElementById('body').classList.toggle("overflow-hidden");
}

//Ejecuta evento scroll para ocultar el scroll al cargar menu-nav
var lastScrollTop = 0;
window.addEventListener("scroll", function(){
  var currentScroll = window.pageYOffset || document.documentElement.scrollTop;
  if (currentScroll > lastScrollTop){
    document.getElementById('nav-background').style.display="none";
    document.getElementById("nav-header").classList.remove("header-in");
    document.getElementById("nav-header").style.opacity = 0;
  } else {
    document.getElementById('nav-background').style.display="table";
    document.getElementById("nav-header").classList.add("header-in");
    document.getElementById("nav-header").classList.add("solid");
    document.getElementById("nav-header").style.opacity = 1;
    if(currentScroll<=4){
      document.getElementById("nav-header").classList.remove("solid");
      document.getElementById("nav-header").classList.remove("header-in");
    }
  }
  lastScrollTop = currentScroll;
}, false);
