import { HOMEPAGE } from "../HomePage/HomePage.js";

export const CHATPAGE=()=>{

    BACKHEADERWIDGET(()=>{HOMEPAGE()},
        `
            <h1 class='Section'>chat</h1>

        `, 
        `
            <div class='PostsDiv'></div>

            <button class='floatbutton'>

                <img src='${WHITEICONS}chat.png'/>
            
            </button>

        `,''

    );

}