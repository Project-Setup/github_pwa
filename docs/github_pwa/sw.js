if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return r[e]||(s=new Promise(async s=>{if("document"in self){const r=document.createElement("script");r.src=e,document.head.appendChild(r),r.onload=s}else importScripts(e),s()})),s.then(()=>{if(!r[e])throw new Error(`Module ${e} didn’t register its module`);return r[e]})},s=(s,r)=>{Promise.all(s.map(e)).then(e=>r(1===e.length?e[0]:e))},r={require:Promise.resolve(s)};self.define=(s,a,t)=>{r[s]||(r[s]=Promise.resolve().then(()=>{let r={};const i={uri:location.origin+s.slice(1)};return Promise.all(a.map(s=>{switch(s){case"exports":return r;case"module":return i;default:return e(s)}})).then(e=>{const s=t(...e);return r.default||(r.default=s),r})}))}}define("./sw.js",["./workbox-db3aaf7e"],(function(e){"use strict";importScripts(),e.enable(),e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/",revision:"QT3S2fCGWjoRrY1SUozI7"},{url:"static/QT3S2fCGWjoRrY1SUozI7/_buildManifest.js",revision:"fb96ae7926f5104f50f0cf1b3a23a9b5"},{url:"static/QT3S2fCGWjoRrY1SUozI7/_ssgManifest.js",revision:"abee47769bf307639ace4945f9cfd4ff"},{url:"static/QT3S2fCGWjoRrY1SUozI7/pages/_app.js",revision:"3e7e1df2800068bb1642855d8a24d0c5"},{url:"static/QT3S2fCGWjoRrY1SUozI7/pages/_error.js",revision:"8506922b6c4ef6cfecb85dba43deef8e"},{url:"static/QT3S2fCGWjoRrY1SUozI7/pages/index.js",revision:"1ef23ebc939488ad81ce1a740ab9dd9d"},{url:"static/QT3S2fCGWjoRrY1SUozI7/pages/index/[id].js",revision:"acd6cc96fb4574d7509bf1e91ab7412d"},{url:"static/chunks/b88439e3db34cedbc5db41d94d351ff301c72aa5.1815e028a9ac7560aeef.js",revision:"cdae857740ffa7dcc40f85475f9c5173"},{url:"static/chunks/commons.a79e3ea898116bd42a58.js",revision:"0c71a0d177535a429f8c9e2b622600f5"},{url:"static/chunks/framework.8d738cd9f2950118dcb6.js",revision:"8e6204793e3d11a8bedf359bfb6e110d"},{url:"static/runtime/main-5eb79422e8d77c42ea9c.js",revision:"1206e1f21fafdce4029a4cc12a8753f1"},{url:"static/runtime/polyfills-51e8211c942285602c68.js",revision:"5bb2df6bf0a21e810e0b7e3c34f1f92b"},{url:"static/runtime/webpack-91b117697e716c22a78b.js",revision:"40b4095b5b68a142c856f388ccb756f2"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/use\.fontawesome\.com\/releases\/.*/i,new e.CacheFirst({cacheName:"font-awesome",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.StaleWhileRevalidate({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.StaleWhileRevalidate({cacheName:"others",plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));