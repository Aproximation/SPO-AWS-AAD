//CORS REQUEST


// Make the actual CORS request.
function TryCallAWS() {
    // This is a sample server that supports CORS.
    var url = 'https://<yourWebServiceName>.azurewebsites.net/api/Values';
    var urlProvision = "https://<yourWebServiceName>.azurewebsites.net/api/provision";
    var provisionCookie = "provisionDone";

    var xhr = createCORSRequest('GET', url);
    if (!xhr) {
        alert('CORS not supported');
        return;
    }

    // Response handlers.
    xhr.onload = function () {
        alert(xhr.responseText);
    };

    xhr.onerror = function () {

        var provisionVisitedCookie = getCookie(provisionCookie);
        if (!provisionVisitedCookie) {
            document.cookie = provisionCookie+"=1";
            window.location = urlProvision;//TODO add return URL in QueryString
        }
    };

    xhr.send();
    return false;
}

// Create the XHR object.
function createCORSRequest(method, url) {
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    if ("withCredentials" in xhr) {
        // XHR for Chrome/Firefox/Opera/Safari.
        xhr.open(method, url, true);
    } else if (typeof XDomainRequest != "undefined") {
        // XDomainRequest for IE.
        xhr = new XDomainRequest();
        xhr.open(method, url);
    } else {
        // CORS not supported.
        xhr = null;
    }
    return xhr;
}

//AUTHENTICATION
(function () {

    // Enter Global Config Values & Instantiate ADAL AuthenticationContext
    window.config = {
        instance: 'https://login.microsoftonline.com/',
        tenant: '<yourTenantName>.onmicrosoft.com',
        clientId: '<clientIdOfYourApp>', //in old Azure Portal it calls: Client ID. In new Azure Portal it's Application ID'
        postLogoutRedirectUri: window.location.origin,
        cacheLocation: 'localStorage', // enable this for IE, as sessionStorage does not work for localhost.
    };
    var authContext = new AuthenticationContext(config);
    // Check For & Handle Redirect From AAD After Login
    var isCallback = authContext.isCallback(window.location.hash);
    authContext.handleWindowCallback();

    if (isCallback && !authContext.getLoginError()) {
        window.location = authContext._getItem(authContext.CONSTANTS.STORAGE.LOGIN_REQUEST);
    }

    // Handle Navigation Directly to View
    window.onhashchange = function () {
        loadView(stripHash(window.location.hash));
    };
    window.onload = function () {
        $(window).trigger("hashchange");
    };

    // Show a View
    function loadView(view) {
        
        // Check if View Requires Authentication
        if (!authContext.getCachedUser()) {
            authContext.config.redirectUri = window.location.href;
            authContext.login();
            return;
        }
    };

    function stripHash(view) {
        return view.substr(view.indexOf('#') + 1);
    }

}());

//COOKIE HELPER
function getCookie(name) {
    var dc = document.cookie;
    var prefix = name + "=";
    var begin = dc.indexOf("; " + prefix);
    if (begin == -1) {
        begin = dc.indexOf(prefix);
        if (begin != 0) return null;
    }
    else {
        begin += 2;
        var end = document.cookie.indexOf(";", begin);
        if (end == -1) {
            end = dc.length;
        }
    }
    return decodeURI(dc.substring(begin + prefix.length, end));
} 