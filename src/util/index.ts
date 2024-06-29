import {existsSync, mkdirSync} from 'fs';

/**
 * Creates directory if not exists before
 */
export const mkdirIfNotExits = (path: string) => {
  if (existsSync(path)) return;
  mkdirSync(path);
};

/**
 * Generates heading id
 * @example "Documents & Reports" ==> "documents--reports"
 * @param children
 * @returns string
 */
export function generateHeadingId(children?: string) {
  if (typeof children !== 'string') return '';

  return children
    .toLowerCase()
    .replace(/\s/g, '-')
    .replace(/[^a-zA-Z0-9-]/g, '');
}
