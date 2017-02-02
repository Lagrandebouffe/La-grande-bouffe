var imag = document.getElementById('image');
imag.src = contenu.images[0];
var imag = document.getElementById('image1');
imag.src = contenu.images[1];
var imag = document.getElementById('image2');
imag.src = contenu.images[2];
var imag = document.getElementById('image3');
imag.src = contenu.images[3];


// Function slider
var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}
    x[myIndex-1].style.display = "block";
    setTimeout(carousel, 3000); // Change image every 2 seconds
}


// h1 main
var main = document.getElementById('mains');
var h11 = document.createElement("h1");
var hh = h11.innerHTML = contenu.name+'<h1 id = h1-description></h1>';
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
    var borderImage = document.createElement("div");
    var imageElt = document.createElement("img");
    var contentElt = document.createElement("div");
    var nomElt = document.createElement("h3");
    var descriptionElt = document.createElement("p");

    menuElt.classList.add("menus");
    borderImage.style.border = "2px black solid";
    borderImage.style.padding = "10px";
    borderImage.style.backgroundColor = "rgb(0,0,0)";
    imageElt.src = menuCarte[i].image;
    contentElt.classList.add("content");
    imageElt.classList.add("image-responsive");
    nomElt.textContent = menuCarte[i].name;
    descriptionElt.textContent = menuCarte[i].description;

    borderImage.appendChild(imageElt);
    menuElt.appendChild(borderImage);
    contentElt.appendChild(nomElt);
    contentElt.appendChild(descriptionElt);
    menuElt.appendChild(contentElt);
    contenuMenu.appendChild(menuElt);
  }
}

creationMenu();

// map js

function initMap() {
       // Create a map object and specify the DOM element for display.
       var map = new google.maps.Map(document.getElementById('map'), {
         center: {lat: -34.397, lng: 150.644},
         scrollwheel: false,
         zoom: 8
       });
     };

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
