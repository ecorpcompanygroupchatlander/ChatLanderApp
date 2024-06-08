export const SHAREDIV=(DIV,element)=>{

    const LIKEDIV=document.createElement('div');

    LIKEDIV.classList.add('ShareDiv');

        const LIKEIMAGE=document.createElement('img');

        LIKEIMAGE.src=WHITEICONS+'send.png';

        ADD(LIKEDIV,LIKEIMAGE);

    ADD(DIV,LIKEDIV);

}