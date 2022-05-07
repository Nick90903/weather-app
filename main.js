(()=>{"use strict";var e={d:(t,n)=>{for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};function t(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function n(e){t(1,arguments);var n=Object.prototype.toString.call(e);return e instanceof Date||"object"==typeof e&&"[object Date]"===n?new Date(e.getTime()):"number"==typeof e||"[object Number]"===n?new Date(e):("string"!=typeof e&&"[object String]"!==n||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}function o(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}function r(e){document.querySelectorAll(".dayName").forEach((e=>{e.remove()}));let r=function(e,r){console.log(`Unix: ${e}, Offset: ${r}`);let a=function(e){return t(1,arguments),n(1e3*o(e))}(e+r).toUTCString();return a}(e.current.dt,e.timezone_offset);const a=document.querySelector(".dayContainer"),c=document.createElement("p");c.classList.add("dayName"),c.textContent=function(e){switch(console.log(e+" Short"),e.slice(0,3)){case"Mon":return"Monday";case"Tue":return"Tuesday";case"Wed":return"Wednesday";case"Thu":return"Thursday";case"Fri":return"Friday";case"Sat":return"Saturday";case"Sun":return"Sunday"}}(r),a.appendChild(c)}e.d({},{c:()=>c});const a="148038350c8c51c279a4db7eee4a3ad5";async function c(){const e=document.querySelector("#locationInput"),t=await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${e.value}&limit=2&appid=${a}`,{mode:"cors"}),n=await t.json(),o=n[0].lat,c=n[0].lon;console.log(`Location Data: ${o}, ${c}`),async function(e,t){const n=await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${e}&lon=${t}&exclude=minutely,hourly,alerts&appid=${a}&units=${l()}`,{mode:"cors"});console.log(`https://api.openweathermap.org/data/2.5/onecall?lat=${e}&lon=${t}&exclude=minutely,hourly,alerts&appid=${a}&units=${l()}`),console.log(l());const o=await n.json();console.log(o),function(e){for(let e=1;e<=7;e++)document.querySelector(`day${e}`),document.createElement("p").classList.add("dayTitle")}(),r(o)}(o,c)}function l(){return document.querySelector("#slider").checked?"imperial":"metric"}document.querySelector("#search").addEventListener("click",(function(){c()})),document.querySelector("#slider").addEventListener("click",(function(){c()}))})();