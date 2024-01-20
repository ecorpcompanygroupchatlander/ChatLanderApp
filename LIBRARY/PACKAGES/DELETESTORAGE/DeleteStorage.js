const DELETESTORAGE=(STORAGE)=>{

    if (STORAGE==='local') {
          
        STORAGE=localStorage;
            
    } else {
            
        STORAGE=sessionStorage;
    
    }
    
    STORAGE.clear();
    
}
    

export {DELETESTORAGE}