Online Detection with JavaScript
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
The MIT License (MIT)

Copyright (c) 2014 Thomas Stapleton

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
