const MICROPHONE = () => {

  const audio = document.createElement('audio');
    
  audio.autoplay = true;
  
  // Check if the browser supports getUserMedia
  if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {

    // Access the user's microphone
    navigator.mediaDevices.getUserMedia({ audio: true })

      .then((stream) => {

        audio.srcObject = stream;

      })

      .catch((error) => {

        console.error('Error accessing the microphone:', error);

      });

  } else {

    console.error('getUserMedia is not supported in this browser');

  }
  
  return audio;

};
  
export { MICROPHONE };
  