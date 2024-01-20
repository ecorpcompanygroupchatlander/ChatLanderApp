import { APPSTART } from "../CONNECTION/Connection.js"
import * as ADVANCE from "../LIBRARY/CONNECTION/Connection.js"

console.log(ADVANCE);

ADVANCE.OPERATINGSYSTEM();

const CONNECTION=(DIV)=>{

    APPSTART(DIV,ADVANCE);

}

export{CONNECTION}