import { HOMEDIVPOSTS } from "./PostsDiv.js";

export const HOMEPOSTS=()=>{

    DECLARATION('.PostsDiv',(ELEMENT)=>{

        GETINDEXED('Socilite','Posts',(data)=>{

            CLEAR(ELEMENT);

            REDUX(data,(Element)=>{

                REDUX(Element.Posts.reverse(),(element)=>{

                    HOMEDIVPOSTS(ELEMENT,element);
    
                });
    
            });

        });

    });

};