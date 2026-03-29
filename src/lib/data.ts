import yaml from 'js-yaml';
import fs from 'node:fs';
import path from 'node:path';

const dataDir = path.join(process.cwd(), 'src/data');

export function load(file: string) {
  return yaml.load(fs.readFileSync(path.join(dataDir, file), 'utf8')) as any;
}

// Lord Icon color themes
export const LI = {
  dark: 'primary:#1A1D23,secondary:#2E5090',
  light: 'primary:#ffffff,secondary:#ffffff',
  blue: 'primary:#2E5090,secondary:#2E5090',
};

// Lord Icon CDN URL from hash
export const liSrc = (hash: string) => `https://cdn.lordicon.com/${hash}.json`;
