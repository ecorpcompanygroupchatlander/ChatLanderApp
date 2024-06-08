import { POSTSAPI } from "../../Connection/Api.js";

export const AUTODOWNLOADPOST=()=>{

    if (localStorage.getItem('NetWork')) {

        GETPACKAGE(POSTSAPI,'cors',(data)=>{

            console.log(data)

            const POSTSDATA={
                "Name":"Posts",
                "Posts":data
    
            }
    
            if (localStorage.getItem('Posts')) {
    
                UPDATEINDEXED('Socilite','Posts',POSTSDATA);
                
            } else {
                
                STOREINDEXED('Socilite','Posts',POSTSDATA);
    
                STORE('local','Posts','On');
    
            }
    
        });
    
    } else {
        
        console.log('Using Back Up Copy');

    }


}