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
     * Init Slick carousel
     */
    $('#js-courses-slider').slick({
        slidesToShow: 3,
        lazyLoad: 'ondemand',
        prevArrow: '<div type="button" class="slick-prev"></div>',
        nextArrow: '<div type="button" class="slick-next"></div>'
    });
};

