import { COMMENTDIV } from "./PostComment.js";
import { LIKEDIV } from "./PostLike.js";
import { SHAREDIV } from "./PostShare.js";
import { POSTTIME } from "./PostTime.js";
import { POSTERDIMAGE } from "./PostedImage.js";
import { POSTERSIMAGE } from "./PosterImage.js";
import { POSTERSNAME } from "./PostersName.js";

export const HOMEDIVPOSTS=(ELEMENT,element)=>{

    const DIV=document.createElement('div');

    DIV.classList.add('HomeDiv');

    POSTERSIMAGE(DIV,element);

    POSTERDIMAGE(DIV,element);

    POSTERSNAME(DIV,element);

    POSTTIME(DIV,element);

    LIKEDIV(DIV,element);

    COMMENTDIV(DIV,element);

    SHAREDIV(DIV,element);

    ADD(ELEMENT,DIV);

};