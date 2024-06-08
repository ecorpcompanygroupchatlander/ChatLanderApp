import { CHATPAGE } from "../ChatPage/ChatPage.js";
import { HOMEPOSTS } from "../HomePosts/HomePosts.js";
import { POSTPAGE } from "../PostPage/PostPage.js";
import { PROFILEPAGE } from "../ProfilePage/ProfilePage.js";
import { VIDEOSPAGE } from "../VidoesPage/VideosPage.js";

export const HOMEPAGE=()=>{

    HEADERWIDGET(

        `

            <img class='Home'  src='${WHITEICONS}home.png'/>

            <img class='Chat'  src='${WHITEICONS}comment.png'/>

            <img class='Vidoes' src='${WHITEICONS}video-folder.png'/>

            <img class='UserAccount' src='${WHITEICONS}user.png'/>
    
        `,
        
        `
            <div class='PostsDiv'></div>

            <button class='floatbutton'>

                <img src='${WHITEICONS}post.png'/>
            
            </button>

        `,''

    );

    HOMEPOSTS()

    CLICKED('.Home',()=>{

        HOMEPAGE();

    });

    CLICKED('.UserAccount',()=>{
        PROFILEPAGE();
    });

    CLICKED('.floatbutton',()=>{

        POSTPAGE();

    });

    CLICKED('.Vidoes',()=>{

        VIDEOSPAGE();

    });

    CLICKED('.Chat',()=>{

        CHATPAGE();

    });

};