import { readdirSync, writeFileSync, readFileSync } from "fs";
import { marked } from "marked";
import HTMLTemplate from "./templates/html";
import { mkdirIfNotExits } from "./util";

const MARK_DOWN_DIR = `${process.cwd()}/markdowns`;
const PUBLIC_DIR = `${process.cwd()}/public`;

mkdirIfNotExits(PUBLIC_DIR);
mkdirIfNotExits(MARK_DOWN_DIR);

const markDownFiles = readdirSync(MARK_DOWN_DIR);
const STYLE_SHEET_PATHS = ["./styles/markdown.css"];

markDownFiles.forEach(async file=> {
    writeFileSync(`${PUBLIC_DIR}/${file.replace(".md",".html")}`, HTMLTemplate({
        title: 'Notes', 
        content: (await marked.parse(readFileSync(`${MARK_DOWN_DIR}/${file}`, "utf-8"))), 
        styleSheetPaths: STYLE_SHEET_PATHS,
        linkCSS: "internal"
    })); 
});
