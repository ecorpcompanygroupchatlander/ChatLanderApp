const INDEXEDDB = (DATABASE) => {

  const dbName = DATABASE;

  const dbRequest = indexedDB.open(dbName);

  // Handle successful database open
  dbRequest.onsuccess = (event) => {

    const db = event.target.result;
    
    console.log(`${DATABASE} opened successfully!`);

    // Don't forget to close the database connection when done
    db.close();

  };

  // Handle database errors
  dbRequest.onerror = (event) => {

    console.error("Error opening database:", event.target.error);

  };

};

export { INDEXEDDB };
