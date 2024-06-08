export const LIKEDIV=(DIV,element)=>{

    const LIKEDIV=document.createElement('div');

    LIKEDIV.classList.add('LikeDiv');

        const LIKEIMAGE=document.createElement('img');

        LIKEIMAGE.src=WHITEICONS+'unheart.png';

        ADD(LIKEDIV,LIKEIMAGE);

        EVENT(LIKEIMAGE,'click',()=>{

            setTimeout(() => {

                LIKEIMAGE.src=WHITEICONS+'heart.png';
                
            }, 2000);
           
        });

    ADD(DIV,LIKEDIV);

}