// ==UserScript==
// @name        Imaginary Internet Points Concealer
// @namespace   imaginaryinternetpointsconcealer.tusksoft.com
// @description Hides your newly accrued imaginary internet points during normal business hours
// @include     /^https?://stackoverflow\.com.*$/
// @include     /^https?://serverfault\.com.*$/
// @include     /^https?://superuser\.com.*$/
// @include     /^https?://.*\.stackexchange\.com.*$/
// @version     0.4
// @downloadURL https://github.com/joelmdev/ImaginaryInternetPointsConcealer/raw/master/imaginaryinternetpointsconcealer.user.js
// @grant       none
// ==/UserScript==


(function()
{
    var startOfBusinessHour = 9;
    var closeOfBusinessHour = 17;

    var head = document.getElementsByTagName("head")[0];

    var style = document.createElement("style");
    style.type = "text/css";
    style.innerHTML = '.indicator-badge.js-unread-count{display:none !important;} .-link.js-achievements-button._highlighted-positive {color:#848d95 !important}';
    head.appendChild(style);

    var hideCss = style.innerHTML;

    var fire = function()
    {
        var now = new Date();
        if (now.getHours() >= startOfBusinessHour && now.getHours() <= closeOfBusinessHour && style.innerHTML !== hideCss)
        {
            console.log("it's between working hours");
            style.innerHTML = hideCss;
        }
        else if ((now.getHours() <= startOfBusinessHour || now.getHours() >= closeOfBusinessHour) && style.innerHTML === hideCss)
        {
            console.log("it's not between working hours. Enjoy your imaginary internet points!");
            style.innerHTML = '';
        }
    };

    fire();
    setInterval(fire, 60000);
})();

console.log("done");
