import { LOGINPAGE } from "../LoginPage/LoginPage.js";

export const CREATEACCOUNTPAGE=()=>{

    WIDGET(`

        <h1>Chat</h1>

        <input type='text' placeholder='Enter User Name'/>

        <input type='email' placeholder='Enter User Email'/>

        <input type='password' placeholder='Enter User Password'/>

        <button class='forestgreen'>Sign Up</button>

        <button class='blue'>Log In</button>

    `);

    CLICKED('.blue',()=>{LOGINPAGE()});


}