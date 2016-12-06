jQuery(document).ready(function () {
    var website = null;


    if (window.location.host == 'localhost') {
        website = window.location.protocol + '//' + window.location.host + '/' + window.location.pathname;
        console.log('you are local at: '+ website);
    }
    else{
        website = window.location.protocol + '//' + window.location.host;
        console.log('you are not local at: ' + website);
    }
    //console.log(location.protocol + '/' + window.location.host + '/' + window.location.pathname);


    var img = [
        'img/skyscrapers.jpg',
        'img/nyc-street.jpg',
        'img/nyc-taxis.jpg',
        //'/img/skyscraper-top.jpg',
    ];
    var imgCount = img.length;
    console.log(imgCount);

    var val = Math.floor(Math.random() * imgCount);

    console.log('current image: ' + website + img[val]);

    $('header').css('background-image', 'url(' + website + img[val] + ')');
});
