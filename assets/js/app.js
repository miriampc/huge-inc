window.addEventListener('load',function(){
  var navHeader=document.getElementById('nav-header');
  var toggle=document.getElementById('toggle');
  var codersGrid=document.getElementById('coders-grid');
console.log(codersGrid);
  toggle.onclick=function(e){
    e.preventDefault();
    navHeader.classList.toggle("open");
    document.getElementById('body').classList.toggle("overflow-hidden");
  }
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
      if(currentScroll<=3){
        document.getElementById("nav-header").classList.remove("solid");
        document.getElementById("nav-header").classList.remove("header-in");
      }
    }
    lastScrollTop = currentScroll;
  }, false);

  var coder=new Coders(allCoders);
  //coder.addCoders();

  // coder.addCoders("Fiorela Cisneros");
  // coder.addCoders("Lulu");

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
    codersGrid.appendChild(figure);
  });

});
