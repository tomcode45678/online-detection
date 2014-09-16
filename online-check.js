// Created by Thomas Stapleton on 20/08/14.

/**
 * When the DOM has loaded
 */
document.onreadystatechange = function () {
    if (document.readyState === 'complete') {
        /**
         * Change param to true for cross domain requests
         * e.g. using this script in PhoneGap or using CDN path in AJAX call
         */
        onlineCheck(false);
    }
};

/**
 * Check online status of user
 * @param crossDomain
 */
function onlineCheck(crossDomain) {
    var url = 'js/JSON/json-example.json';
    if (crossDomain === true) {
        url = 'http://www.mywebsite.co.uk/js/JSON/jsonp-example.json';
    }
    request(url);
    setTimeout(function () {
        onlineCheck(crossDomain);
    }, 5000);
}

/**
 * Function for online request
 * @param url
 * @returns {*}
 */
function request(url) {
    var call;
    try {
        call = new ActiveXObject('Microsoft.XMLHTTP');
    } catch (error) {
        call = new XMLHttpRequest();
    }
    call.onload = function() {
        if (call.readyState === 4) {
            return online(call.responseText);
        }
        return console.error('Unknown status: You may have been abducted by aliens.');
    };
    call.open("GET", url, true);
    call.onerror = function () {
        return offline();
    };
    call.send(null);
}

/**
 * Function called when user is online
 * @param data
 */
function online(data) {
    if (data) {
        // Do something if the user is online
        console.log('Online'); // alert('Online'); // <- Old browser testing
    }
}

/**
 * Function called when user is offline
 */
function offline() {
    // Do something if the user is offline
    console.log('Offline'); // alert('Offline'); // <- Old browser testing
}