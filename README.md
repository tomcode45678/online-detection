OnlineDetection-JavaScript
==========================
Native JavaScript detecting a devices online/offline status. Cross domain compatible!

- Simply download the repository for an example and include the script into your project.

- JSON and JSONP file examples are included.

### Basic usage
- Add both online-check.js file and json-example.json files
- Update the `online()` and `offline()` methods to suit your user

#### Optional Changes
- Rename json-example.json
- Update default url path to standard JSON file e.g. `var url = 'js/JSON/myonline.json'`

### Why use JSONP over JSON?
If you are requesting a URL/JSON file **NOT** within the online-check.js domain location. 

For example a URL pointing to a CDN or if your project is a HTML5 mobile app. HTTP access control (CORS) prevents this. 

However, using JSONP the request calls a local function, in this case `online()` with a default JSON object added as a parameter.

#### Why I need to use JSONP in my HTML5 Mobile App?

If you include the JSON or even the JSONP file into your app it will be local and will return the user as constantly online. 

**Make sure you use the JSONP file and that it is hosted online!**

#### Get JSONP working

Remember to set `onlineCheck(false);` to `onlineCheck(true);`

Oh and update the URL:

    if (crossDomain === true) {
        url = 'http://www.mylinktoJSONP.json';
    }

### License?
```
DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE Version 2, December 2004 

Copyright (C) 2014 Thomas Stapleton

Everyone is permitted to copy and distribute verbatim or modified copies of this
license document, and changing it is allowed as long as the name is changed.
  
DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE TERMS AND CONDITIONS
FOR COPYING, DISTRIBUTION AND MODIFICATION 
  
0. You just DO WHAT THE FUCK YOU WANT TO.
