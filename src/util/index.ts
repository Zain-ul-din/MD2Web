import { existsSync, mkdirSync } from "fs";

/** 
 * Creates directory if not exists before
*/
export const mkdirIfNotExits = (path:string)=> {
    if(existsSync(path)) return;
    mkdirSync(path);
}
