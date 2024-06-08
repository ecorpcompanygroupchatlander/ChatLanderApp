import { HOMEPAGE } from "../HomePage/HomePage.js";

export const VIDEOSPOSTPAGE=()=>{

    BACKHEADERWIDGET(()=>{HOMEPAGE()},
        `

            <img src='${WHITEICONS}location.png'/>

            <img src='${WHITEICONS}group-users.png'/>

            <button class='CreatePost'>Post</button>

        `, 
        `
            <textarea placeholder='Whats On Your Mind'></textarea>

            <input type='email' placeholder='Enter Video Tags'/>

            <input type='file' class='Video' accept='Video/*'/>

            <video controls class='SelectedImage' src='${VIDEOPATH}video.mp4' ></video>

        `,''

    );

    VIDEOPICKER('.Video','.SelectedImage',()=>{

    });

}