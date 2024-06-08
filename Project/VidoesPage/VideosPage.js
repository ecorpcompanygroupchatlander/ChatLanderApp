import { HOMEPAGE } from "../HomePage/HomePage.js";
import { VIDEOSPOSTPAGE } from "../PostPage/VideoPost.js";

export const VIDEOSPAGE=()=>{

    BACKHEADERWIDGET(()=>{HOMEPAGE()},
        `
            <h1 class='Section'>Vidoes</h1>

        `, 
        `
            <div class='PostsDiv'></div>

            <button class='floatbutton'>

                <img src='${WHITEICONS}movies.png'/>
            
            </button>

        `,''

    );

    CLICKED('.floatbutton',()=>{

        VIDEOSPOSTPAGE();

    })

}