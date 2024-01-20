import { ANDROIDCONNECTION } from "../ENVIRONMENT/ANDROID/CONNECTION/Connection.js"
import { IOSCONNECTION } from "../ENVIRONMENT/IOS/CONNECTION/Connection.js";
import { WEBCONNECTION } from "../ENVIRONMENT/WEB/CONNECTION/Connection.js";
import { WINDOWSCONNECTION } from "../ENVIRONMENT/WINDOWS/CONNECTION/Connection.js";


const APPSTART=(DIV,ADVANCE)=>{

    if (localStorage.getItem('Device')==='Android') {
        
        ANDROIDCONNECTION(DIV,ADVANCE);

    } else {
        
        if (localStorage.getItem('Device')==='Ios') {
           
            IOSCONNECTION(DIV,ADVANCE);
            
        } else {
            
            if (localStorage.getItem('Device')==='Windows') {
           
                WINDOWSCONNECTION(DIV,ADVANCE);
                
            } else {
               
                WEBCONNECTION(DIV,ADVANCE);
                
            }

        }

    }

}

export{APPSTART}