import { readdirSync, writeFileSync, readFileSync } from "fs";
import { marked } from "marked";
import HTMLTemplate from "./templates/html";
import { mkdirIfNotExits } from "./util";
import fm from "front-matter";

const MARK_DOWN_DIR = `${process.cwd()}/markdowns`;
const PUBLIC_DIR = `${process.cwd()}/public`;

mkdirIfNotExits(PUBLIC_DIR);
mkdirIfNotExits(MARK_DOWN_DIR);

const markDownFiles = readdirSync(MARK_DOWN_DIR);
const STYLE_SHEET_PATHS = ["./styles/markdown.css"];

markDownFiles.forEach(async file=> {
    const mdContent = readFileSync(`${MARK_DOWN_DIR}/${file}`, "utf-8")
    const metaData = fm(mdContent).attributes as any
    
    writeFileSync(`${PUBLIC_DIR}/${file.replace(".md",".html")}`, HTMLTemplate({
        title: metaData.title, 
        description: metaData.description,
        theme: metaData.theme,
        content: (await marked.parse(mdContent.replace(/---[\s\S]*?---/, ""))), 
        styleSheetPaths: STYLE_SHEET_PATHS,
        linkCSS: "internal"
    })); 
});
