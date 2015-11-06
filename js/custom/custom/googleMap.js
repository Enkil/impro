// This example adds a marker to indicate the position of Bondi Beach in Sydney,
// Australia.
function initMap(mapIDCurrent) {
    var myLatlng = new google.maps.LatLng(60.000186, 30.315975); // Marker coordinates
    var myOptions = { // Map settings
        zoom: 15,
        center: myLatlng,
        scrollwheel: false,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        styles:[{"featureType":"landscape","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"stylers":[{"hue":"#00aaff"},{"saturation":-100},{"gamma":2.15},{"lightness":12}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"visibility":"on"},{"lightness":24}]},{"featureType":"road","elementType":"geometry","stylers":[{"lightness":57}]}]
    };
    var map = new google.maps.Map(mapIDCurrent, myOptions); // Init map

    var image = 'img/map-marker.png'; //  image

    var marker = new google.maps.Marker({ // Init marker
        position: myLatlng,
        map: map,
        title:"IMPRO Международная школа интернет-маркетинга №1 в Санкт-Петербурге",
        icon: image
    });

}

function findMapAndInit(mapID) {
    if (document.getElementById(mapID)) {
        var mapIDCurrent = document.getElementById(mapID);
        if (mapIDCurrent){
            initMap(mapIDCurrent);
        }
    }
}

//google.maps.event.addDomListener(window, "load", findMapAndInit(mapID));
