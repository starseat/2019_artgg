
function isMobile() {

    var bRet = isMobile_phone();
    if( !bRet ) {
        bRet = isMobile_pc();
    }

    console.log('[OS Check] navigator.platform: ', navigator.platform);
    console.log('[OS Check] navigator.userAgent: ', navigator.userAgent);
    console.log('[OS Check] navigator.appVersion: ', navigator.appVersion);

    return bRet;
}

function isMobile_pc() {
    var bRet = false;
    var filter = "win16|win32|win64|mac|macintel";
    if (navigator.platform) {
        if (filter.indexOf(navigator.platform.toLowerCase()) >= 0) {
            bRet = false;
        }
        else {
            bRet = true;
        }
    }
    
    return bRet;
}

function isMobile_phone() {
    var bRet = false;
    var varUA = navigator.userAgent.toLowerCase();
    
    // android
    if (varUA.match('android') != null) {
        bRet = true;
    } 
    // ios
    else if (varUA.indexOf("iphone") > -1 || varUA.indexOf("ipad") > -1 || varUA.indexOf("ipod") > -1) {
        bRet = true;
    } 
    // etc...
    else {

    }

    return bRet;
}

function getDisplaySize() {
    var myWidth = 0,
        myHeight = 0;

    if (typeof(window.innerWidth) == 'number') {
        //Non-IE
        myWidth = window.innerWidth;
        myHeight = window.innerHeight;
    } else if (document.documentElement &&
        (document.documentElement.clientWidth || document.documentElement.clientHeight)) {
        //IE 6+ in 'standards compliant mode'
        myWidth = document.documentElement.clientWidth;
        myHeight = document.documentElement.clientHeight;
    } else if (document.body &&
        (document.body.clientWidth || document.body.clientHeight)) {
        //IE 4 compatible
        myWidth = document.body.clientWidth;
        myHeight = document.body.clientHeight;
    }

    return {
        width: myWidth,
        height: myHeight
    };
}