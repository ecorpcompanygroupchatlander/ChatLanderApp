const NOTIFICATIONS = (MESSAGE,PATH) => {

  // Check if the browser supports the Notifications API
      
  if ('Notification' in window) {

    // Request permission to show notifications

        
    Notification.requestPermission().then((permission) => {

      if (permission === 'granted') {

        // Create and show the notification

        const notification = new Notification('Notification', {

          body: MESSAGE,
              
        });
    
        // Optional: You can handle click events on the notification
        
        notification.onclick = () => {

          open(PATH)

        };

      }

    });

  } else {

    console.error('Notifications not supported in this browser.');

  }

};
  
export { NOTIFICATIONS };
  