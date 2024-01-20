const CAMERA = (ELEMENT) => {

    const video = document.createElement('video');

    video.width = 1080;

    video.height = 720;

    video.autoplay = true;

    // Check if the browser supports getUserMedia
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        
        // Access the user's camera
        
        navigator.mediaDevices.getUserMedia({ video: true })
            
        .then((stream) => {
                
            video.srcObject = stream;
                
            // Append the video element to the specified element
            ELEMENT.appendChild(video); 
                
        })

        .catch((error) => {

            console.error('Error accessing the camera:', error);
        
        });

    } else {

        console.error('getUserMedia is not supported in this browser');

    }

    return video;

};

export { CAMERA };
