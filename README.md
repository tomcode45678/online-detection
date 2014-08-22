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

Simple! Edit the functionality within the `online()` and `offline()` functions e.g. send/remove warning messages to the user.

## License?
```
DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE Version 2, December 2004 

Copyright (C) 2014 Thomas Stapleton

Everyone is permitted to copy and distribute verbatim or modified copies of this
license document, and changing it is allowed as long as the name is changed.
  
DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE TERMS AND CONDITIONS
FOR COPYING, DISTRIBUTION AND MODIFICATION 
  
0. You just DO WHAT THE FUCK YOU WANT TO.
