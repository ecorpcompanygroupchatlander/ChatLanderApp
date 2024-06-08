export const POSTERSNAME=(DIV,element)=>{

    const POSTEDIMAGE=document.createElement('h1');

    POSTEDIMAGE.classList.add('PostersName');

    POSTEDIMAGE.innerHTML=element.PosterName;

    ADD(DIV,POSTEDIMAGE);

}