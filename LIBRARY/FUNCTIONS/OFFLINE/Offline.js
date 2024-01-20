const OFFLINE=()=>{

    const linkElement = document.createElement('link');

    linkElement.rel = 'manifest';

    linkElement.href = '/DATABASE/Manifest.json';
    
    document.head.appendChild(linkElement);

    if ('serviceWorker' in navigator) {

        navigator.serviceWorker.register('/ServiceWorker.js')

        .then((registration) => {

            console.log('Service Worker registered with scope:', registration.scope);
        
        })

        .catch((error) => {

            console.error('Service Worker registration failed:', error);
        
        });

    }

}

export{OFFLINE}