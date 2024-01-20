const RETRIEVEINDEXEDDB = (DATABASE, DATABASETABLE, key) => {
    return new Promise((resolve, reject) => {
        const dbName = DATABASE;

        const openRequest = indexedDB.open(dbName);

        openRequest.onsuccess = (event) => {
            const db = event.target.result;

            try {
                // Check if the object store exists before opening a transaction
                if (db.objectStoreNames.contains(DATABASETABLE)) {
                    const transaction = db.transaction(DATABASETABLE, 'readonly');
                    const objectStore = transaction.objectStore(DATABASETABLE);

                    const getRequest = objectStore.get(key);

                    getRequest.onsuccess = (event) => {
                        const result = event.target.result;
                        resolve(result);
                    };

                    getRequest.onerror = (event) => {
                        reject(event.target.error);
                    };

                    transaction.oncomplete = () => {
                        db.close();
                    };
                } else {
                    reject(new Error(`Object store '${DATABASETABLE}' not found in the database.`));
                }
            } catch (error) {
                reject(error);
            }
        };

        openRequest.onerror = (event) => {
            reject(event.target.error);
        };

        openRequest.onblocked = (event) => {
            reject(new Error("Database access is blocked. Please close other tabs using the application."));
        };

        openRequest.onupgradeneeded = (event) => {
            // Handle database upgrade if needed
        };
    });
};

export { RETRIEVEINDEXEDDB };
