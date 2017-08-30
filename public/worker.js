var doCache = false; 

var CACHE_NAME = 'pwa-app-cache';

//delete old caches
self.addEventListener('activate', event => {
  const currentCachelist = [CACHE_NAME]
  event.waitUntil(
    caches.keys()
      .then(keyList => 
      Promis.all(keyList.map(key => {
        if(!currentCachelist.includes(key)){
          return cahces.delete(key)
        }
      })))
  )
})

//triggers when user starts the app
self.addEventListener('install', function(event) {
  if (doCache) {
    event.waitUntil(
      caches.open(CACHE_NAME)
        .then(function(caches){
          fetch('asset-manifest.json')
            .then(response => {
              response.json()
            })
            .then(assets => {
               // We will cache initial page and the main.js
              // We could also cache assets like CSS and images
              const urlsToCache = [
                '/', 
                assets['main.js']
              ]
              cache.addAll(urlsToCache)
            })
        })
    )
  }
})

self.addEventListener('fetch', function(event){
  if (doCache) {
    event.respondWith(
      caches.match(event.request).then(function(response){
        return response || fetch(event.request)
      })
    )
  }
})