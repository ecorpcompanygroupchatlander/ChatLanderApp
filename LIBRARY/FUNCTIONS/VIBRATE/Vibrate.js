const VIBRATE = (TIME) => {

    // Check if the `vibrate` function is supported
    if ('vibrate' in navigator) {

        // Vibrate for 200 milliseconds
        navigator.vibrate(TIME);

    } else {

        // Fallback for browsers that do not support the `vibrate` function
        console.warn('Vibration not supported');

    }

}

export { VIBRATE };
