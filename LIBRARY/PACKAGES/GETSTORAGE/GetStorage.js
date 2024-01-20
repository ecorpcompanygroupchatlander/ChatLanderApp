const GETSTORAGE=(STORAGE,PROPERTY)=>{

        if (STORAGE==='local') {
          
            STORAGE=localStorage;
            
        } else {
            
            STORAGE=sessionStorage;
    
        }
        
    STORAGE.getItem(PROPERTY);

}

export{GETSTORAGE}