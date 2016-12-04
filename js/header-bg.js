jQuery(document).ready(function () {

    var img = [
        'http://localhost/justanotheritcompany/img/skyscrapers.jpg',
        'http://localhost/justanotheritcompany/img/nyc-street.jpg',
        'http://localhost/justanotheritcompany/img/nyc-taxis.jpg',
//        'http://localhost/justanotheritcompany/img/skyscraper-top.jpg',
    ];
    var imgCount = img.length;
    //console.log(imgCount);
    
    var val = Math.floor(Math.random() * imgCount);

    $('header').css('background-image', 'url(' + img[val] + ')');
});
