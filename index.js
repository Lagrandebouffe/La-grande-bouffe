
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
    setTimeout(carousel, 3000); // Change image every 2 seconds
}

// Recuperer les donnees
var contenu = {
  name: 'La bonne bouffe',
  description: 'Venez goûter nos plats préparés avec amours et bienveillance. Notre chef Gertrude viendra probablement vous serrer la main. Vous pourrez échanger avec cette passionnée de cuisine et repartir avec des conseils pour reproduire sa cuisine inimitable',
  images: [
    'https://media-cdn.tripadvisor.com/media/photo-s/02/1b/9a/bf/le-grande-bouffe.jpg',
    'http://www.epicurien.be/img/recettes-cuisines/20130928_poulet_morilles-500.jpg',
    'https://i1.wp.com/cotesoleils.fr/wp-content/uploads/2015/06/tajine-agneau-et-pruneaux-algc3a9rie1.jpg',
    'http://scrat.hellocoton.fr/img/guide/recette-ma-salade-tiede-de-chou-kale-et-lentilles-patates-douces-et-saumon-fume-18911644.jpg'
  ],
  baseline: 'La promo7 vous régale',
  addresse: '51, rue de Vincennes',
  codePostale: '93100',
  ville: 'Montreuil',
  carte: [
    {
      name: 'Poulet aux morilles',
      image: 'http://www.epicurien.be/img/recettes-cuisines/20130928_poulet_morilles-500.jpg',
      description: 'Un grand classique le poulet de Bresse aux morilles et à la crème. Si vous ne trouvez pas de volaille de Bresse, choisissez un bon poulet fermier, élevé aux grains et qui a vécu en liberté dans les champs.',
      price: '23 €'
    },
    {
      name: 'Tagine aux pruneaux',
      image:'https://i1.wp.com/cotesoleils.fr/wp-content/uploads/2015/06/tajine-agneau-et-pruneaux-algc3a9rie1.jpg',
      description: 'Un des plus célèbres Tajines Marocains, servi avec une délicieuse viande de veau et des pruneaux issus de l\'agriculture biologique',
      price: '18 €'
    },
    {
      name: 'Salade de saison',
      image: 'http://scrat.hellocoton.fr/img/guide/recette-ma-salade-tiede-de-chou-kale-et-lentilles-patates-douces-et-saumon-fume-18911644.jpg',
      description: 'Toujours à l\'heure, la salade de saison vous régalera avec ses légumes',
      price: '14 €'
    },
  ]
}



var imag = document.getElementById('image');
imag.src = contenu.images[0];
var imag = document.getElementById('image1');
imag.src = contenu.images[1];
var imag = document.getElementById('image2');
imag.src = contenu.images[2];
var imag = document.getElementById('image3');
imag.src = contenu.images[3];


document.getElementById('h1-description').innerHTML= contenu.name;
document.getElementById('p-description').innerHTML= contenu.description;



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
