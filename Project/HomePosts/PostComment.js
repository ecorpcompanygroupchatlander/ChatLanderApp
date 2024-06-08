export const COMMENTDIV=(DIV,element)=>{

    const LIKEDIV=document.createElement('div');

    LIKEDIV.classList.add('CommentDiv');

        const LIKEIMAGE=document.createElement('img');

        LIKEIMAGE.src=WHITEICONS+'comment.png';

        ADD(LIKEDIV,LIKEIMAGE);

    ADD(DIV,LIKEDIV);

}