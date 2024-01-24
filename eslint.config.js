import { eslint } from '@axa-ch/easy-config';
import path from 'node:path';
import { fileURLToPath } from 'url';
import js from '@eslint/js';

const dirname = path.dirname(fileURLToPath(import.meta.url));

export default [
  js.configs.recommended,
  ...eslint.base(dirname),
  ...eslint.react(dirname),
  ...eslint.typescript(dirname),
  {
    rules: {
      'import/no-absolute-path': 'off',
    },
  },
];
