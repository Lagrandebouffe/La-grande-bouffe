// var imag = document.getElementById('image');
// imag.src = contenu.images[0];
var imag = document.getElementById('image1');
imag.src = contenu.images[0];
var imag = document.getElementById('image2');
imag.src = contenu.images[1];
var imag = document.getElementById('image3');
imag.src = contenu.images[2];


// Function slider
var myIndex = 0;
carousel();

function carousel() {
    var x = document.getElementsByClassName("mySlides");
    for (var i = 0; i < x.length; i++) {
       x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}
    x[myIndex-1].style.display = "block";
    setTimeout(carousel, 3000); // Change image every 3 seconds
}


// h1 main
var main = document.getElementById('mains');
var h11 = document.createElement("h1");
var hh = h11.innerHTML = contenu.name + '<h1 id = h1-description></h1>';
main.appendChild (h11);

//La description main
var p1 = document.createElement("p");
p1.classList.add("description");
p1.innerHTML = contenu.description+'<p id = p-description></p>';
main.appendChild (p1);

// Récupérer données pour la carte des menus

var contenuMenu = document.getElementById("container-menu");
var menuCarte = contenu.carte;

function creationMenu () {
  for (var i = 0; i < menuCarte.length; i++) {

    var menuElt = document.createElement("div");
    // var borderImage = document.createElement("div");
    var imageElt = document.createElement("img");
    var contentElt = document.createElement("div");
    var nomElt = document.createElement("h3");
    var descriptionElt = document.createElement("p");
    var btn = document.createElement("button");

    menuElt.classList.add("menus", "row");
    // borderImage.classList.add("col-xs-12", "col-sm-3")
    // borderImage.style.border = "2px black solid";
    // borderImage.style.padding = "10px";
    // borderImage.style.backgroundColor = "rgb(0,0,0)";
    imageElt.src = menuCarte[i].image;
    imageElt.classList.add("menuImage", "image-responsive", "col-xs-12", "col-sm-offset-1", "col-sm-4");
    contentElt.classList.add("content", "col-xs-12", "col-sm-offset-1", "col-sm-5", "col-1-offset-1");
    nomElt.textContent = menuCarte[i].name; // N.textContent = innerHTML
    descriptionElt.textContent = menuCarte[i].description;
    btn.textContent = "Mange moi";

    // borderImage.appendChild(imageElt);
    menuElt.appendChild(imageElt);
    // menuElt.appendChild(imageElt);

    contentElt.appendChild(nomElt);
    contentElt.appendChild(descriptionElt);
    contentElt.appendChild(btn);
    menuElt.appendChild(contentElt);
    contenuMenu.appendChild(menuElt);
  }
}

creationMenu();

// partie footer

var foot = document.getElementById('footer-text');
var newspan = document.createElement('span');
var contentspan = newspan.innerHTML = contenu.baseline + '<span></span><br>';
foot.appendChild(newspan);


var newspan2 = document.createElement('span');
contentspan = newspan2.innerHTML = contenu.addresse + '<span></span><br>';
foot.appendChild(newspan2);

var newspan3 = document.createElement('span');
contentspan = newspan3.innerHTML = contenu.codePostale + '<span></span><br>';
foot.appendChild(newspan3);

var newspan4 = document.createElement('span');
contentspan = newspan4.innerHTML = contenu.ville + '<span></span><br>';
foot.appendChild(newspan4);

function myFunction(){
  document.getElementById("ACCUEIL").innerHTML = "this is me what do u wanna do";
}

//
// var foot = document.getElementById('footer-text');
// var footSpan = document.createElement("span");
// var ContenueSpan = footSpan.innerHTML = contenu.baseline+'<span></span><br>';
// foot.appendChild (footSpan);
//
// var foot = document.getElementById('footer-text');
// var footSpan = document.createElement("span");
// var ContenueSpan = footSpan.innerHTML = contenu.addresse+'<span></span><br>';
// foot.appendChild (footSpan);
//
// var foot = document.getElementById('footer-text');
// var footSpan = document.createElement("span");
// var ContenueSpan = footSpan.innerHTML = contenu.codePostale+'<span></span><br>';
// foot.appendChild (footSpan);
//
// var foot = document.getElementById('footer-text');
// var footSpan = document.createElement("span");
// var ContenueSpan = footSpan.innerHTML = contenu.ville+'<span></span><br>';
// foot.appendChild (footSpan);
