jQuery(document).ready(function () {

    var url = null;
    var host = window.location.host;

    switch (host) {
        case 'localhost':
            url = localhost_url_cleanup();
            //console.log('after cleanup by localhost_cleanup(): ' + url);
            break;

        default:
            url = non_localhost_url_cleanup();
            //console.log('you are not local at non_localhost_cleanup: ' + url);
    }

    set_webpage_background_img(url);

});

function set_webpage_background_img(url) {
    var imgs = [
        '/img/nyc-street.jpg',
        //'/img/nyc-taxis.jpg',
        '/img/nmh.jpg'
        //'/img/d.jpg',
        //'/img/skyscrapers.jpg',
        //'/img/nyc-taxis2.jpg',
    ];
    localStorage.setItem("imgs", JSON.stringify(imgs));
    var storedImgArray = JSON.parse(localStorage.getItem("imgs"));
    //console.log(storedImgArray);

    localStorage.setItem("used_imgs", JSON.stringify([]));
    //var storedUsedImgs = JSON.parse(localStorage.getItem("used_imgs"));
    //console.log(storedUsedImgs);

    var count = storedImgArray.length;
    //console.log(count);

    var rand_img = Math.floor(Math.random() * count);
    //console.log('current image: ' + url + storedImgArray[rand_img]);

    $('header').css('background-image', 'url(' + url + storedImgArray[rand_img] + ')');
}

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

function localhost_url_cleanup() {

    var protocol = window.location.protocol;
    var host = window.location.host;
    var pathname = remove_leading_slash(window.location.pathname);
    pathname = remove_trailing_slash(pathname);

    //console.log(protocol);
    //console.log(host);
    //console.log(pathname);

    var website = protocol + '//' + host + '/' + pathname;

    return website;
}

function non_localhost_url_cleanup() {
    var website = window.location.protocol + '//' + window.location.host;
    return website;
}
