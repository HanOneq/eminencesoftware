jQuery(document).ready(function () {
    var website = window.location.href;
    var img = [
        'img/skyscrapers.jpg',
        'img/nyc-street.jpg',
        'img/nyc-taxis.jpg',
//        '/img/skyscraper-top.jpg',
    ];
    var imgCount = img.length;
    //console.log(imgCount);

    var val = Math.floor(Math.random() * imgCount);

    $('header').css('background-image', 'url(' + website + img[val] + ')');
});
