import { LOGINAPI } from "../../APIS/AndroidApi.js";
import { CREATEACCOUNTPAGE } from "../CREATEACCOUNTPAGE/CreateAccountPage.js";

const LOGINPAGE=(DIV,ADVANCE)=>{

    ADVANCE.CLEAR(DIV);

    ADVANCE.DISPLAYDATA(DIV,`

        <h1>Socilite</h1>

        <input type="email" id='Email' placeholder='Enter Email'>

        <input type="password" id='Password' placeholder='Enter Password'>

        <button id='LoginButton'>LogIn</button>

        <button id='CreateAccountButton'>Create Account</button>

        <div class='Message'></div>
    

    `);

    const EMAIL=document.querySelector('#Email');

    const PASSWORD=document.querySelector('#Password');

    const LOGINBUTTON=document.querySelector('#LoginButton');

    const MESSAGE=document.querySelector('.Message');

    LOGINBUTTON.addEventListener('click',()=>{

        if (EMAIL.value && PASSWORD.value) {

            const USERDATA={
                "Email":EMAIL.value,
                "password":PASSWORD.value
            }

            ADVANCE.POSTPACKAGE(LOGINAPI,USERDATA,'no-cors')

            .then((result) => {
                console.log(result);
            }).catch((err) => {
                console.log(err);
            });
            
            
        } else {
           
            ADVANCE.STYLED(MESSAGE,'display','block');

            ADVANCE.DISPLAYDATA(MESSAGE,'<h3>Fill All parts</h3>');

            setTimeout(() => {
               
                ADVANCE.STYLED(MESSAGE,'display','none');
  
            }, 2000);
  
        }

    })

    const CREATEACCOUNTBUTTON=document.querySelector('#CreateAccountButton');

    CREATEACCOUNTBUTTON.addEventListener('click',()=>{

        CREATEACCOUNTPAGE(DIV,ADVANCE);

    })

}

export{LOGINPAGE}