const POSTPACKAGE = (URL,DATA,MODE) => {

    return fetch(URL,{
        method:"POST",
        mode:MODE,
        body:JSON.stringify(DATA)
    })
    
    .then((response) => {

        if (!response.ok) {

            throw new Error('Network response was not ok');

        }

        return response.json();

    })

    .catch((error) => {

        console.error('There has been a problem with your fetch operation:', error);
        
        throw error; // Re-throw the error to handle it where you call GETPACKAGE
        
    });

};

export{POSTPACKAGE};