// ==UserScript==
// @name        Diablo 3 Profile
// @namespace   https://forum.o9k.fr
// @description Show all the characters in the Battle.Net D3 profile page
// @include     http*://*.battle.net/d3/*/profile/*
// @icon        https://raw.githubusercontent.com/Etuldan/B.Net-D3-Profile/master/icon.png
// @updateURL   https://raw.githubusercontent.com/Etuldan/B.Net-D3-Profile/master/d3-profile.user.js
// @version     1
// @grant       none
// @author      Etuldan
// ==/UserScript==

var uls = document.getElementsByTagName('ul');
for (i=0; i<uls.length; i++)   {
  if(uls[i].className=="hero-tabs") {
    uls[i].style.height="auto";
  }
}
