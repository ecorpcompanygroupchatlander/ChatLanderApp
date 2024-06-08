import { HOMEPAGE } from "../HomePage/HomePage.js";

export const POSTPAGE=()=>{

    BACKHEADERWIDGET(()=>{HOMEPAGE()},
        `

            <img src='${WHITEICONS}location.png'/>

            <img src='${WHITEICONS}group-users.png'/>

            <button class='CreatePost'>Post</button>

        `, 
        `
            <textarea placeholder='Whats On Your Mind'></textarea>

            <input type='email' placeholder='Enter Post Tags'/>

            <input type='file' class='Images' accept='image/*'/>

            <img class='SelectedImage' src='${BLACKICONS}image.png'/>

        `,''

    );

    IMAGEPICKER('.Images','.SelectedImage',()=>{

    })

}