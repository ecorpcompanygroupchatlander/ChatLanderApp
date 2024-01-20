import { CREATEACCOUNTAPI } from "../../APIS/AndroidApi.js";

const CREATEACCOUNTPAGE = (DIV, ADVANCE) => {
    ADVANCE.CLEAR(DIV);

    ADVANCE.DISPLAYDATA(DIV, `

        <h1>Socilite</h1>

        <input type="text" id='UserFullName' placeholder='Enter UserFullName'>
       
        <input type="text" id='UserName' placeholder='Enter UserName'>
        
        <input type="email" id='UserEmail' placeholder='Enter UserEmail'>
        
        <input type="password" id='UserPassword' placeholder='Enter UserPassword'>
        
        <input type="tel" id='UserTelephone' placeholder='Enter UserTelephone'>
        
        <button id='CreateUserAccount'>Create Account</button>
        
        <button id='LoginButton'>LogIn</button>
        
        <div class='Message'></div>
        
    `);


    const CREATEACCOUNTBUTTON = document.querySelector('#CreateUserAccount');
    const FULLUSERNAME = document.querySelector('#UserFullName');
    const USERNAME = document.querySelector('#UserName');
    const EMAIL = document.querySelector('#UserEmail');
    const PASSWORD = document.querySelector('#UserPassword');
    const TELEPHONE = document.querySelector('#UserTelephone');
    const MESSAGE = document.querySelector('.Message');

    CREATEACCOUNTBUTTON.addEventListener('click', () => {
        
        if (FULLUSERNAME.value && USERNAME.value && EMAIL.value && PASSWORD.value && TELEPHONE.value) {
            
            ADVANCE.DISPLAYDATA(DIV,`

            <div class='ProfileImageHolder'></div>

            <button id='ProfileImageSelector'>Select A Profile Image</button>

            <button>Continue</button>

        `);

        const PROFILEMAGEDISPLAY=document.querySelector('.ProfileImageHolder');

        const PROFILEIMAGEPICKER=document.querySelector('#ProfileImageSelector');

        PROFILEIMAGEPICKER.addEventListener('click',()=>{

            ADVANCE.FILESTORAGE(PROFILEMAGEDISPLAY,'ProfileImage');

        })

            
         

        } else {

            ADVANCE.STYLED(MESSAGE, 'display', 'block');

            ADVANCE.DISPLAYDATA(MESSAGE, '<h3>Fill All parts</h3>');

            setTimeout(() => {

                ADVANCE.STYLED(MESSAGE, 'display', 'none');

            }, 2000);

        }

    });
    

};

export { CREATEACCOUNTPAGE };
