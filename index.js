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
