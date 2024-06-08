export const POSTTIME=(DIV,element)=>{

    const POSTEDIMAGE=document.createElement('h1');

    POSTEDIMAGE.classList.add('PostersTime');

    TIMER(element.PostTime,(data)=>{

        POSTEDIMAGE.innerHTML=data;

    });

    ADD(DIV,POSTEDIMAGE);

}