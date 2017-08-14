// ==UserScript==
// @name         Remove Arconai anti-adblock popup
// @namespace    http://joeyism.com
// @version      0.1
// @description  try to take over the world!
// @author       joeyism
// @match        http://arconaitv.me/*
// @grant        none
// @run-at document-start
// ==/UserScript==

var canRunAds = false;
(function() {
    'use strict';
    console.log("function");
    var remove = function(elem){
        elem.parentNode.removeChild(elem);
    };

    document.onreadystatechange = function(e)
    {
        app.check_adblocker = function(){};
        if (document.readyState === 'complete')
        {
            remove(document.getElementById("videoadv"));
            remove(document.getElementsByClassName("wrapper")[0]);
            remove(document.getElementsByClassName("wrapper")[1]);
            console.log("done arconai anti-adblock");
        }
    };
})();
