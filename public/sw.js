if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return t[e]||(s=new Promise(async s=>{if("document"in self){const t=document.createElement("script");t.src=e,document.head.appendChild(t),t.onload=s}else importScripts(e),s()})),s.then(()=>{if(!t[e])throw new Error(`Module ${e} didn’t register its module`);return t[e]})},s=(s,t)=>{Promise.all(s.map(e)).then(e=>t(1===e.length?e[0]:e))},t={require:Promise.resolve(s)};self.define=(s,a,i)=>{t[s]||(t[s]=Promise.resolve().then(()=>{let t={};const n={uri:location.origin+s.slice(1)};return Promise.all(a.map(s=>{switch(s){case"exports":return t;case"module":return n;default:return e(s)}})).then(e=>{const s=i(...e);return t.default||(t.default=s),t})}))}}define("./sw.js",["./workbox-6a047900"],(function(e){"use strict";importScripts(),e.enable(),e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/github_pwa/",revision:"VVVav0GtXlIT55ZGvGsOt"},{url:"/github_pwa/_next/static/VVVav0GtXlIT55ZGvGsOt/_buildManifest.js",revision:"1d770c7fe72c3a6ac59433f98c47dd42"},{url:"/github_pwa/_next/static/VVVav0GtXlIT55ZGvGsOt/_ssgManifest.js",revision:"abee47769bf307639ace4945f9cfd4ff"},{url:"/github_pwa/_next/static/VVVav0GtXlIT55ZGvGsOt/pages/_app.js",revision:"2374c39e16ebd4b8a8a8bacff1564db7"},{url:"/github_pwa/_next/static/VVVav0GtXlIT55ZGvGsOt/pages/_error.js",revision:"7bc246c3cb897214a9526113ef8121a8"},{url:"/github_pwa/_next/static/VVVav0GtXlIT55ZGvGsOt/pages/index.js",revision:"ebcf22d2a402ebc28f4fccff56793e99"},{url:"/github_pwa/_next/static/VVVav0GtXlIT55ZGvGsOt/pages/index/[id].js",revision:"38964a45ca32dac41f222948d366affe"},{url:"/github_pwa/_next/static/chunks/723bac4f9ca5ddb5fc87b62b60173b1e14a82d7b.437028ff9c719c4e83c8.js",revision:"b4c40b54f2e73f576c18de2fde2de3b9"},{url:"/github_pwa/_next/static/chunks/9292f38675b978c49d22264326381871f6b9d2fb.dac532575368bc335b3b.js",revision:"0e0f6a3fbcbf30b28fbf886ef700d298"},{url:"/github_pwa/_next/static/chunks/commons.b93b29a49d328bfd6695.js",revision:"633ff4f952b20d39f4dd9798773daf1a"},{url:"/github_pwa/_next/static/chunks/framework.8d738cd9f2950118dcb6.js",revision:"8e6204793e3d11a8bedf359bfb6e110d"},{url:"/github_pwa/_next/static/runtime/main-4d2df2822fc0c1ea3b60.js",revision:"3caccc3545e99154ea47deaababbec76"},{url:"/github_pwa/_next/static/runtime/polyfills-086c80900a8c0674417b.js",revision:"6ad581a29e2009b015acdda8c0a5f09c"},{url:"/github_pwa/_next/static/runtime/webpack-91b117697e716c22a78b.js",revision:"40b4095b5b68a142c856f388ccb756f2"},{url:"/github_pwa/icons/favicon.ico",revision:"940cc6bd3bb401fc3be83df3dfd09488"},{url:"/github_pwa/icons/icon192x192.png",revision:"b2bf260ccff2838a58aaf42ece6461b8"},{url:"/github_pwa/icons/icon512x512.png",revision:"7844d31fa2a65d7009616d77034a4949"},{url:"/github_pwa/manifest.json",revision:"688128be216cc2f753fe641590f2fcd3"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/use\.fontawesome\.com\/releases\/.*/i,new e.CacheFirst({cacheName:"font-awesome",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.StaleWhileRevalidate({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.StaleWhileRevalidate({cacheName:"others",plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https?.*/,new e.NetworkFirst({cacheName:"offlineCache",networkTimeoutSeconds:15,plugins:[new e.ExpirationPlugin({maxEntries:150,maxAgeSeconds:2592e3,purgeOnQuotaError:!0}),new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),e.registerRoute(({event:e})=>"navigate"===e.request.mode,new e.CacheFirst({cacheName:"offlineCache",plugins:[new e.ExpirationPlugin({maxEntries:150,maxAgeSeconds:2592e3,purgeOnQuotaError:!0}),new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET")}));
