
// slider
var myIndex = 0;
slider();

function slider() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}
    x[myIndex-1].style.display = "block";
// HEAD
    setTimeout(slider, 3000); // Change image every 2 seconds
//=======
    setTimeout(carousel, 4000); // Change image every 2 seconds
//>>>>>>> 85674987f4f80db0a1f113e68ae0051455397f67
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
