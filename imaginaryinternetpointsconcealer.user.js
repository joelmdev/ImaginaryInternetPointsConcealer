// ==UserScript==
// @name        Imaginary Internet Points Concealer
// @namespace   imaginaryinternetpointsconcealer.tusksoft.com
// @description Hides your newly accrued imaginary internet points during normal business hours
// @include     /^https?://stackoverflow\.com.*$/
// @include     /^https?://serverfault\.com.*$/
// @include     /^https?://superuser\.com.*$/
// @include     /^https?://.*\.stackexchange\.com.*$/
// @version     0.1
// @grant       none
// ==/UserScript==

(function ($) {
    console.log("starting to save you from yourself");
    var getNetworkItemsElement = function() {
        var networkItemsElement = $(".network-items");
        if (networkItemsElement.length > 0) {
            console.log("got the network-element");
            $(networkItemsElement).find(".icon-achievements").removeClass("icon-achievements-unread");
            $(networkItemsElement).find(".unread-count").hide();
            if ($(networkItemsElement).find(".unread-count").length > 0) {
                console.log("I blocked you from seeing your new imaginary points");
            }
            else {
                console.log("you didn't have any new imaginary points");
            }
        }
        else {
            console.log("couldn't find the network-element");
        }
    }

    var now = new Date();
    if (now.getHours >= 9 && now.getHours <= 17) {
        console.log("it's between working hours");
        getNetworkItemsElement();
    }
    else {
        console.log("it's not between working hours. Enjoy your imaginary internet points!");
    }
})(unsafeWindow.jQuery);
console.log("done");