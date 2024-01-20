const REMOVEINDEXEDDB = (DATABASE, DATABASETABLE, id) => {
    const dbName = DATABASE;

    const deleteRequest = indexedDB.open(dbName);

    deleteRequest.onsuccess = (event) => {
        const db = event.target.result;

        // Check if the object store exists
        if (!db.objectStoreNames.contains(DATABASETABLE)) {
            console.error(`Object store not found: ${DATABASETABLE}`);
            db.close();
            return;
        }

        const transaction = db.transaction(DATABASETABLE, "readwrite");
        const objectStore = transaction.objectStore(DATABASETABLE);

        // Delete data from the object store
        const deleteDataRequest = objectStore.delete(id);

        deleteDataRequest.onsuccess = () => {
            console.log("Data deleted successfully!");
            db.close();
        };

        deleteDataRequest.onerror = (error) => {
            console.error("Error deleting data:", error.target.error);
            db.close();
        };
    };

    deleteRequest.onerror = (event) => {
        console.error("Error opening database:", event.target.error);
    };
};

export { REMOVEINDEXEDDB };
