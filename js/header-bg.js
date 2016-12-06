jQuery(document).ready(function () {

    var host = window.location.host;
    var url = null;

    switch (host) {
        case 'localhost':
            url = localhost_cleanup();
            console.log('after cleanup by localhost_cleanup(): ' + website);
            break;

        default:
            url = non_localhost_cleanup();
            console.log('you are not local at non_localhost_cleanup: ' + website);
    }


    var img = [
        '/img/skyscrapers.jpg',
        '/img/nyc-street.jpg',
        '/img/nyc-taxis.jpg',
                //'/img/skyscraper-top.jpg',
    ];
    var imgCount = img.length;
    console.log(imgCount);

    var val = Math.floor(Math.random() * imgCount);

    console.log('current image: ' + url + img[val]);

    $('header').css('background-image', 'url(' + url + img[val] + ')');
});

function remove_trailing_slash(url) {
    var len = url.length;
    //console.log(len);

    //console.log(url[len-1]);
    //console.log(url);

    //drop last '/' from url
    if (url[len - 1] == '/') {
        url = url.slice(0, -1);
        //console.log(url);
    }
    return url;
}

function remove_leading_slash(url) {

    var len = url.length;
    //console.log(len);

    //console.log(url[0]);
    //console.log(url);

    //drop leading '/' char from url
    if (url[0] == '/') {
        //console.log('entering if()');
        url = url.slice(1, url.length);
        //console.log(url);
    }
    return url;
}

function localhost_cleanup() {

    var protocol = window.location.protocol;
    var host = window.location.host;
    var pathname = remove_leading_slash(window.location.pathname);
    pathname = remove_trailing_slash(pathname);

    console.log(protocol);
    console.log(host);
    console.log(pathname);

    website = protocol + '//' + host + '/' + pathname;

    return website;
}

function non_localhost_cleanup() {
    website = window.location.protocol + '//' + window.location.host;
    return website;
}
   