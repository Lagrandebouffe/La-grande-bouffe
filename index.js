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
    if (myIndex > x.length) {
        myIndex = 1
    }
    x[myIndex - 1].style.display = "block";
    setTimeout(carousel, 3000); // Change image every 2 seconds
}


var main = document.getElementById('mains');

//La description main
var p1 = document.createElement("p");
p1.classList.add("description");
p1.innerHTML = contenu.description + '<p id = p-description></p>';
main.appendChild(p1);

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
