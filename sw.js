const STATIC_CACHE ="static"
const APP_SHELL =[
"/",
"index.html",
"styles/style.css",
"js/funtions.js",
"js/main.js",
"js/script1.js",
"js/script2.js",
"images/beerjs-logo.png",

];
self.addEventListener("install",(e)=>{
    const cacheStatic =caches 
    .open(STATIC_CACHE)
    .then((cache)=> cache.addAll(APP_SHELL));

    e.waitUntil(cacheStatic);
});

self.addEventListener("fetch",(e)=>{
    console.log("fectch", e.request );
    e.respondWith(
        caches
        .match(e.request)
        .then(res => res || fetch(e.reque) )
        .catch(console.log)
    );
});





