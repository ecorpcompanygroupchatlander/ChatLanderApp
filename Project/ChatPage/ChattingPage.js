import { CHATPAGE } from "./ChatPage.js";

export const CHATTINGPAGE=()=>{

    BACKHEADERWIDGET(()=>{CHATPAGE()},
        `
            <img class='UserIcon' src='${WHITEICONS}user.png'/>

        `, 
        `
            <div class='ChattingDiv'></div>

            <div class='ChatHolders'>

                <img  src='${WHITEICONS}post.png'/>

                <textarea class='ChatInput'  placeholder='Text'></textarea>

                <img  src='${WHITEICONS}send.png'/>
            
            </div>

        `,''

    );

}