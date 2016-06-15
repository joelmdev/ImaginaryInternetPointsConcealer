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


(function(jQuery)
{
    var startOfBusinessHour = 9;
    var closeOfBusinessHour = 17;

    var $ = jQuery;
    console.log("starting to save you from yourself");

    var hideRepChanges = function()
    {
        var achievementsElement = $(".icon-achievements");

        if (achievementsElement.hasClass("icon-achievements-unread"))
        {
            achievementsElement.removeClass("icon-achievements-unread");
            achievementsElement.find(".unread-count").hide();

            console.log("I blocked you from seeing your new imaginary points");
        }
        else
        {
            console.log("you didn't have any new imaginary points");
        }
    };

    var fire = function()
    {
        var now = new Date();
        if (now.getHours() >= startOfBusinessHour && now.getHours() <= closeOfBusinessHour)
        {
            console.log("it's between working hours");

            hideRepChanges();
        }
        else
        {
            console.log("it's not between working hours. Enjoy your imaginary internet points!");
        }
    };

    var attachObserver = function()
    {
        var observer = new MutationObserver(function(mutations) {
            console.log("there was a change to the networkitemselement, attempting to hide rep changes");
            fire();
        });

        var observerConfig = {
            attributes: true,
            childList: true,
            characterData: false
        };

        observer.observe($(".icon-achievements")[0], observerConfig);
        console.log("attached observer");
    };

    fire();
    attachObserver();
    setInterval(fire, 60000);
})(unsafeWindow.jQuery);

console.log("done");