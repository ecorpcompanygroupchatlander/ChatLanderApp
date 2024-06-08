export const POSTERSIMAGE=(DIV,element)=>{

    const POSTEDIMAGE=document.createElement('img');

    POSTEDIMAGE.classList.add('postersImage');

    POSTEDIMAGE.src=element.PostersImage||WHITEICONS+'user.png';

    ADD(DIV,POSTEDIMAGE);

}