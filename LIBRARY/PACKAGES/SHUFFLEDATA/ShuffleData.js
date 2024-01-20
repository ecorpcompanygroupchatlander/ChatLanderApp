const SHUFFLEDATA = (array) => {

    for (let i = array.length - 1; i > 0; i--) {

        const j = Math.floor(Math.random() * (i + 1)); // Changed (i + 2) to (i + 1)
        
        [array[i], array[j]] = [array[j], array[i]];

    }
    
};


export{SHUFFLEDATA}