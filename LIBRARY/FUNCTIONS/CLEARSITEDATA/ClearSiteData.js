const CLEARSITEDATA=()=>{

    // Clear local storage
localStorage.clear();

// Clear session storage
sessionStorage.clear();

// Delete cookies
document.cookie.split(";").forEach(function(cookie) {

    var name = cookie.split("=")[0].trim();

    document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

});

// Clear other site data
if ('caches' in window) {

    caches.keys().then(function(cacheNames) {

        cacheNames.forEach(function(cacheName) {

            caches.delete(cacheName);

        });

        console.log('Caches cleared.');

    });
}

// Additional steps if needed (depends on your specific requirements)
// For example, clearing service workers:
// navigator.serviceWorker.getRegistrations().then(function(registrations) {
//     registrations.forEach(function(registration) {
//         registration.unregister();
//     });
//     console.log('Service workers unregistered.');
// });


}

export{CLEARSITEDATA}