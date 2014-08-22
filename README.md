OnlineDetection-JavaScript
==========================

**A native JavaScript example detecting a users online/offline status. Cross domain compatible!**

Simply download the repository and include the script into your project.

JSON and JSONP file examples are included. Hhowever, for cross domain XHTTP requests you will have to store the JSONP file online.

## When to use the JSONP file?

If you are requesting a URL not within the online-check.js domain. For example a URL pointing to a CDN or if your project is a HTML5 mobile app.

### HTML5 Mobile App

If you include the JSON or even the JSONP file into your app because it is local it will register the connection and state the user is online when they could easily be offline.

## How do I customise this to my website or application?

Simple! Edit the functionality within the `online()` and `offline()` functions to send popup or warning messages to the user.

## License?

License: WTFPL License URL: http://www.wtfpl.net/
