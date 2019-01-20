$(document).ready(function(){
    $('.work__wrap').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
});
});

ymaps.ready(init);
function init(){
    var myMap = new ymaps.Map("map", {
        center: [55.75394149, 37.62217172],
        zoom: 14
    });
    }

