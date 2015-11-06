window.onload = function(){

    /**
     * Init Images lazy loading
     * https://github.com/verlok/lazyload
     * DO NOT set src attribute to img tag.
     * SET data-original="path_to_img"
     * SET CSS class .lazyload to all img tags
     * Example: <img class="lazyload" data-original="img/img.png" alt="alt text" title="title text">
     *
     *  TODO: незабыть в мануал написать про использование
     */
    var AMGLazyLoad = new LazyLoad({
        elements_selector: "img", // img
        data_srcset: "original" // original-set
    });

    /**
     * Init Slick carousel on courses block
     */
    $('#js-courses-slider').slick({
        slidesToShow: 3,
        lazyLoad: 'ondemand',
        prevArrow: '<div type="button" class="slick-prev"></div>',
        nextArrow: '<div type="button" class="slick-next"></div>',
        responsive: [
            {
                breakpoint: 740,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    /**
     * Init Slick carousel on teachers block
     */
    $('#js-teachers-slider').slick({
        slidesToShow: 4,
        lazyLoad: 'ondemand',
        prevArrow: '<div type="button" class="slick-prev"></div>',
        nextArrow: '<div type="button" class="slick-next"></div>',
        responsive: [
            {
                breakpoint: 740,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    /**
     * Init Slick carousel on Students results block
     */
    $('#js-st-res-slider').slick({
        slidesToShow: 3,
        lazyLoad: 'ondemand',
        prevArrow: '<div type="button" class="slick-prev"></div>',
        nextArrow: '<div type="button" class="slick-next"></div>',
        responsive: [
            {
                breakpoint: 740,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    /**
     * Init Slick carousel on Blog block
     */
    $('#js-blog-slider').slick({
        slidesToShow: 2,
        lazyLoad: 'ondemand',
        prevArrow: '<div type="button" class="slick-prev"></div>',
        nextArrow: '<div type="button" class="slick-next"></div>',
        responsive: [
            {
                breakpoint: 740,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    // Google Map
    findMapAndInit('map');

};


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
