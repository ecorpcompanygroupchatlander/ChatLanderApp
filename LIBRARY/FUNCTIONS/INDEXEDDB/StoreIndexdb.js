const STOREINDEXEDDB = (DATABASE, DATABASETABLE, DATA) => {
    const dbName = DATABASE;
    const version = 2; // Increment the version number

    const addRequest = indexedDB.open(dbName, version);

    addRequest.onupgradeneeded = (event) => {
        const db = event.target.result;

        if (!db.objectStoreNames.contains(DATABASETABLE)) {
            const objectStore = db.createObjectStore(DATABASETABLE, { keyPath: 'id' });
            // Additional setup for the object store can be done here if needed
            // For example: objectStore.createIndex('name', 'name', { unique: false });
        }
    };

    addRequest.onsuccess = (event) => {
        const db = event.target.result;

        // Check if the object store exists
        if (!db.objectStoreNames.contains(DATABASETABLE)) {
            console.error(`Object store not found: ${DATABASETABLE}`);
            db.close();
            return;
        }

        const transaction = db.transaction(DATABASETABLE, 'readwrite');
        const objectStore = transaction.objectStore(DATABASETABLE);

        const getRequest = objectStore.get(DATA.id);

        getRequest.onsuccess = (event) => {
            const existingData = event.target.result;

            if (existingData) {
                // Delete existing data
                const deleteRequest = objectStore.delete(DATA.id);

                deleteRequest.onsuccess = () => {
                    console.log('Data deleted successfully!');
                    
                    // Continue with updating data
                    const updateDataRequest = objectStore.put(DATA);

                    updateDataRequest.onsuccess = () => {
                        console.log('Data updated successfully!');
                    };

                    updateDataRequest.onerror = (error) => {
                        console.error('Error updating data:', error.target.error);
                    };
                };

                deleteRequest.onerror = (error) => {
                    console.error('Error deleting data:', error.target.error);
                    db.close();
                };
            } else {
                // Add new data
                const addDataRequest = objectStore.add(DATA);

                addDataRequest.onsuccess = () => {
                    console.log('Data added successfully!');
                };

                addDataRequest.onerror = (error) => {
                    console.error('Error adding data:', error.target.error);
                };
            }

            // Close the transaction and database
            transaction.oncomplete = () => {
                db.close();
            };
        };

        getRequest.onerror = (error) => {
            console.error('Error getting data:', error.target.error);
            db.close();
        };
    };

    addRequest.onerror = (event) => {
        console.error('Error opening database:', event.target.error);
    };
};

export { STOREINDEXEDDB };
