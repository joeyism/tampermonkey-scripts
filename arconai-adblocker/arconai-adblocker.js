// ==UserScript==
// @name         Remove Arconai anti-adblock popup
// @namespace    http://joeyism.com
// @version      0.1
// @description  try to take over the world!
// @author       joeyism
// @include      http*://*.arconaitv.*/*
// @grant        none
// @run-at document-start
// ==/UserScript==

var canRunAds = false;
(function() {
    'use strict';
    console.log("function");
    function remove(elem){
        elem.parentNode.removeChild(elem);
    }
    function getElementByXpath(path) {
        return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    }

    document.onreadystatechange = function(e)
    {
        app.check_adblocker = function(){};
        if (document.readyState === 'complete')
        {
            remove(document.getElementById("videoadv"));
            remove(document.getElementsByClassName("wrapper")[0]);
            remove(document.getElementsByClassName("wrapper")[1]);
            remove(getElementByXpath("/html/body/div[2]/div/div/div[2]"));
            getElementByXpath("/html/body/div[2]/div/div/div").style.width="100%";
            console.log("done arconai anti-adblock");
        }
    };
})();
