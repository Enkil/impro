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

