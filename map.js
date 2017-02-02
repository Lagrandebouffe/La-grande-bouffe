function initMap() {
    var uluru = {
        lat: 48.8541282,
        lng: 2.4368220000000065
    };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 16,
        center: uluru
    });
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
}
