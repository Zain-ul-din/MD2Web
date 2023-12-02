import { readdirSync, mkdirSync, existsSync, writeFileSync, readFileSync } from "fs";
import { marked } from "marked";
import HTMLTemplate from "./templates/html";

const MARK_DOWN_DIR = `${process.cwd()}/markdowns`;
const TEMPLATE_DIR = `${process.cwd()}/templates`;
const STYLE_SHEET_PATHS = ["./styles/markdown.css"];

const mkdirIfNotExits = (path:string)=> {
    if(existsSync(path)) return;
    mkdirSync(path);
}

mkdirIfNotExits(TEMPLATE_DIR);
mkdirIfNotExits(MARK_DOWN_DIR);

const markDownFiles = readdirSync(MARK_DOWN_DIR);

markDownFiles.forEach(async file=> {
    writeFileSync(`${TEMPLATE_DIR}/${file.replace(".md",".html")}`, HTMLTemplate({
        title: 'Notes', 
        content: (await marked.parse(readFileSync(`${MARK_DOWN_DIR}/${file}`, "utf-8"))), 
        styleSheetPaths: STYLE_SHEET_PATHS,
        linkCSS: "internal"
    })); 
});
