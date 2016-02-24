// ==UserScript==
// @name        Diablo 3 Profile
// @namespace   https://github.com/Etuldan/B.Net-D3-Profile
// @description Show all the characters in the Battle.Net D3 profile page
// @include     http*://*.battle.net/d3/*/profile/*-*/hero/*
// @icon        https://raw.githubusercontent.com/Etuldan/B.Net-D3-Profile/master/icon.png
// @updateURL   https://raw.githubusercontent.com/Etuldan/B.Net-D3-Profile/master/d3-profile.user.js
// @downloadURL https://raw.githubusercontent.com/Etuldan/B.Net-D3-Profile/master/d3-profile.user.js
// @version     1.1
// @grant       none
// @author      Etuldan
// ==/UserScript==

// Hidden Chararacters
var uls = document.getElementsByTagName('ul');
for (i=0; i<uls.length; i++)   {
  if(uls[i].className=="hero-tabs") {
    uls[i].style.height="auto";
  }
}

// Font size reduction for Nicknames
var spans = document.getElementsByTagName('span');
for (i=0; i<spans.length; i++)   {
  if(spans[i].className=="level" || spans[i].className=="name") {
    spans[i].style.fontSize ="80%";
  }
}
