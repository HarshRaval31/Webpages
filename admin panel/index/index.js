/*! name: vanilla-calendar-pro | url: https://github.com/uvarov-frontend/vanilla-calendar-pro */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).VanillaCalendarUtilities={})}(this,(function(e){"use strict";const t=e=>`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`,n=e=>new Date(`${e}T00:00:00`);e.getDate=e=>n(e),e.getDateString=e=>t(e),e.parseDates=e=>(e=>e.reduce(((e,a)=>(a.match(/^(\d{4}-\d{2}-\d{2})$/g)?e.push(a):a.replace(/(\d{4}-\d{2}-\d{2}).*?(\d{4}-\d{2}-\d{2})/g,((a,d,i)=>{const o=n(d),r=n(i),s=new Date(o.getTime());for(;s<=r;s.setDate(s.getDate()+1))e.push(t(s));return a})),e)),[]))(e),Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
