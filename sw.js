if(!self.define){let e,s={};const r=(r,i)=>(r=new URL(r+".js",i).href,s[r]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=s,document.head.appendChild(e)}else e=r,importScripts(r),s()})).then((()=>{let e=s[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(i,n)=>{const l=e||("document"in self?document.currentScript.src:"")||location.href;if(s[l])return;let t={};const o=e=>r(e,l),u={module:{uri:l},exports:t,require:o};s[l]=Promise.all(i.map((e=>u[e]||o(e)))).then((e=>(n(...e),t)))}}define(["./workbox-fa446783"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-27d42deb.js",revision:null},{url:"assets/index-2f810a2e.css",revision:null},{url:"assets/photography-c65c4711.js",revision:null},{url:"assets/preact-8cfcf72f.js",revision:null},{url:"assets/preact-async-route-270d6121.js",revision:null},{url:"assets/preact-router-931d4098.js",revision:null},{url:"assets/react-icons-52cbea96.js",revision:null},{url:"assets/tailwind-scrollbar-hide-4ed993c7.js",revision:null},{url:"assets/three-d22827c1.js",revision:null},{url:"assets/trianglify-4ed993c7.js",revision:null},{url:"assets/vendor-f7fc5a4a.js",revision:null},{url:"index.html",revision:"a3269602090c36cfe010c68da08f92a4"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"manifest.webmanifest",revision:"660a9308b7a2dca109fe2ed58253445d"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
