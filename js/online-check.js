/**
 * Created by Thomas Stapleton on 20/08/14.
 */

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
    var url = 'js/JSON/json-example.json', dataType = 'json';
    if (crossDomain === true) {
        url = 'http://www.mywebsite.co.uk/js/JSON/jsonp-example.json';
    }
    gets(url, dataType);

    setTimeout(function () {
        onlineCheck(crossDomain);
    }, 5000);
}

/**
 * @param url
 * @param dataType
 * @returns string JSON
 */
function gets(url, dataType) {
    var call = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
    call.open('GET', url, false);

    try {
        call.send(null);
    } catch (error) {
        return offline();
    }

    if (dataType.toLowerCase() === "jsonp") {
        return call.responseText;
    }
    return online(call.responseText);
}

/**
 * Function called when user is online
 * @param data
 */
function online(data) {
    if (data) {
        // Do something here if the user is online
        document.getElementsByTagName('body')[0].removeAttribute('class');
        document.getElementById('title').getElementsByTagName('strong')[0].innerHTML = "online";
    }
}

/**
 * Function called when user is offline
 */
function offline() {
    // Do something here if the user is offline
    document.getElementsByTagName('body')[0].setAttribute('class', 'offline');
    document.getElementById('title').getElementsByTagName('strong')[0].innerHTML = "offline";
}