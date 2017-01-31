
// slider
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
    setTimeout(carousel, 4000); // Change image every 2 seconds
}




// map js

var myLatlng = new google.maps.LatLng(37.7552464,-122.4185384);
var myOptions = {
    zoom: 16,
    center: myLatlng,
    scrollwheel: false,
    mapTypeId: 'satellite', //google.maps.MapTypeId.ROADMAP,
    styles: []
  };
  var map = new google.maps.Map(document.getElementById('map'), myOptions);
  var marker = new google.maps.Marker({
    position: myLatlng,
    map: map,
    title: "here you are"
  });
var affichier = document.getElementById('PANIER');
