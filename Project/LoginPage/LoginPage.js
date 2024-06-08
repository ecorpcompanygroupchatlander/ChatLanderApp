import { USERSAPI } from "../../Connection/Api.js";
import { CREATEACCOUNTPAGE } from "../CreateAccountPage/CreateAccountPage.js";
import { HOMEPAGE } from "../HomePage/HomePage.js";

export const LOGINPAGE=()=>{

    WIDGET(`

        <h1>Chat</h1>

        <input class='Email' type='email' placeholder='Enter User Email'/>

        <input class='Password' type='password' placeholder='Enter User Password'/>

        <h3 class='ForgotPassword'>Forgot Password?</h3>

        <button class='forestgreen'>Sign In</button>

        <button class='blue'>Create Account</button>

    `);

    CLICKED('.blue',()=>{CREATEACCOUNTPAGE()});

    CLICKED('.forestgreen',()=>{

        const USEREMAIL=document.querySelector('.Email');
        const USERPASSWORD=document.querySelector('.Password');
        const BUTTON=document.querySelector('.forestgreen');

        if (!USEREMAIL.value) {

            MESSAGE('Enter User Email')

            return;
            
        }

        if (!USERPASSWORD.value) {

            MESSAGE('Enter User Password')

            return;
            
        }

        LOADER(BUTTON);

        GETPACKAGE(USERSAPI,'cors',(data)=>{

            FINDER(data,'UserEmail',USEREMAIL.value,(user)=>{

                if (user.UserEmail === USEREMAIL.value ) {

                    PASSWORDDEHASH(user.UserPassword,USERPASSWORD.value,(correct)=>{

                        if (correct === true) {

                            STORE('local','User',user.UserID);

                            JSONIFICATION(user,(usersdata)=>{

                                STORE('local','UserData',usersdata);

                                HOMEPAGE();

                            })

                        } else {

                            ORIGIN(BUTTON,'Sign In');
                        
                            MESSAGE('Enter Corrrect User Password')
        
                            return;
                            
                        }

                    })
                    
                } else {
                    
                    ORIGIN(BUTTON,'Sign In');
                        
                    MESSAGE('Enter Corrrect User Email')

                    return;

                }

            })

        })


    });

}