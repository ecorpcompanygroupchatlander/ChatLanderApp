const ADDSTORAGE=(STORAGE,PROPERTY,DATA)=>{

    if (STORAGE==='local') {
      
        STORAGE=localStorage;
        
    } else {
        
        STORAGE=sessionStorage;

    }

    STORAGE.setItem(PROPERTY,DATA)

}

export{ADDSTORAGE}