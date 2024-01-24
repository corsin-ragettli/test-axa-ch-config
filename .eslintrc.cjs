const { eslint } = require('@axa-ch/easy-config');

module.exports = {
  extends: [eslint.base, eslint.react, eslint.typescript],
};
