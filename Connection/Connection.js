import { AUTODOWNLOADPOST } from "../Project/AutoDownloadPage/AutoDownloadPosts.js";
import { HOMEPAGE } from "../Project/HomePage/HomePage.js"
import { LOGINPAGE } from "../Project/LoginPage/LoginPage.js"

export const CONNECTION=()=>{

    AUTODOWNLOADPOST();

    CONDITION(localStorage.getItem('User'),

        ()=>HOMEPAGE(),
        ()=>LOGINPAGE()

    );

   

}