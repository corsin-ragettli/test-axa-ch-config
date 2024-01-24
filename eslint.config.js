import { eslint } from '@axa-ch/easy-config';
import path from 'node:path';
import { fileURLToPath } from 'url';
import js from '@eslint/js';

const dirname = path.dirname(fileURLToPath(import.meta.url));

export default [
  ...eslint.base(dirname),
  ...eslint.react(dirname),
  ...eslint.typescript(dirname),
  js.configs.recommended,
];
