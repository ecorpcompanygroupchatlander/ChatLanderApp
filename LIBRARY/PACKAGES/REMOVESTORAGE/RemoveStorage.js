const REMOVESTORAGE=(STORAGE,PROPERTY)=>{

    if (STORAGE==='local') {
      
        STORAGE=localStorage;
        
    } else {
        
        STORAGE=sessionStorage;

    }

    STORAGE.removeItem(PROPERTY);

}


export {REMOVESTORAGE}