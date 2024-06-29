import {marked} from 'marked';
import {generateHeadingId} from '../util';

const renderer = new marked.Renderer();

renderer.heading = (text: string, level: number, raw: string) => {
  const levels = [1, 2, 3];
  const idNode = levels.includes(level) ? `id="${generateHeadingId(raw)}"` : '';
  return `<h${level} ${idNode}>${text}</h${level}>`;
};

export default renderer;
