export const POSTERDIMAGE=(DIV,element)=>{

    const POSTEDIMAGE=document.createElement('img');

    POSTEDIMAGE.classList.add('PostedImage');

    POSTEDIMAGE.src=element.PostersImage||WHITEICONS+'user.png';

    ADD(DIV,POSTEDIMAGE);

}