import { HOMEPAGE } from "../HomePage/HomePage.js";

export const PROFILEPAGE=()=>{

    DEJSON('Local','UserData',(data)=>{

        let FRIENDS;

        if (data.UserFriends) {

            JSONLENGTH(data.UserFriends,(data)=>{

                FRIENDS=data;

            })
            
        }

        BACKHEADERWIDGET(()=>{HOMEPAGE()},
            `
                
                <img class='Section' src='${WHITEICONS}setting.png'/>

            `, 
            `

                <div id='UserDetailsDiv' class='View'>

                    <img class='ProfileImage' src='${data.UserPhoto}'/>

                    <h3 class='UserName'>${data.UserName}</h3>

                    <div class='MyFriendsOptionsHolder'>

                        <img class='UserIDImages' src='${WHITEICONS}group-users.png'/>

                        <p class='MyLocation'>${FRIENDS}</p>

                    </div>

                    <div class='UserOptionsHolder'>

                        <img class='UserIDImages' src='${WHITEICONS}library.png'/>

                        <p class='MyLocation'>${data.UserUploads}</p>

                    </div>

                    <div class='UserLocatonHolder'>

                        <img class='UserIDImages' src='${WHITEICONS}location.png'/>

                        <p class='MyLocation'>${data.UserLocation}</p>

                    </div>
                
                </div>

            
                <div class='UserDetailsDiv'>

                    <img src='${WHITEICONS}profile.png'/>

                    <img src='${WHITEICONS}review.png'/>

                    <img src='${WHITEICONS}location.png'/>
                
                </div>

            `,''

        )

    });

}