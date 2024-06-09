import { HOMEPAGE } from "../HomePage/HomePage.js";

export const PROFILEPAGE=()=>{

    DEJSON('Local','UserData',(data)=>{

        BACKHEADERWIDGET(()=>{HOMEPAGE()},
            `
                
                <h1 class='Section'>Profile</h1>

            `, 
            `

                <img class='ProfileImage' src='${data.UserPhoto}'/>

                <p class='UserName'>${data.UserName}</p>

                <div class='UserDetailsDiv'>

                    <img src='${WHITEICONS}profile.png'/>

                    <img src='${WHITEICONS}review.png'/>

                    <img src='${WHITEICONS}location.png'/>
                
                </div>

                




            `,''

        );

    });

}