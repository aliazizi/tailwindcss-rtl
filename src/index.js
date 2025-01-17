const plugin = require('tailwindcss/plugin');

const paddingUtilities = require('./paddingUtilities');
const marginUtilities = require('./marginUtilities');
const floatUtilities = require('./floatUtilities');
const insetUtilities = require('./insetUtilities');
const clearUtilities = require('./clearUtilities');
const borderRadiusUtilities = require('./borderRadiusUtilities');
const borderWidthUtilities = require('./borderWidthUtilities');
const textAlignUtilities = require('./textAlignUtilities');
const transformOriginUtilities = require('./transformOriginUtilities');
const spaceUtilities = require('./spaceUtilities');
const divideUtilities = require('./divideUtilities');

module.exports = plugin(({ addUtilities, theme, variants }) => {
  addUtilities(paddingUtilities(theme), variants('padding'), {
    supportsNegativeValues: true,
  });
  addUtilities(marginUtilities(theme), variants('margin'), {
    supportsNegativeValues: true,
  });
  addUtilities(insetUtilities(theme), variants('inset'), {
    supportsNegativeValues: true,
  });
  addUtilities(borderRadiusUtilities(theme), variants('borderRadius'));
  addUtilities(clearUtilities(), variants('clear'));
  addUtilities(floatUtilities(), variants('float'));
  addUtilities(borderWidthUtilities(theme), variants('borderWidth'));
  addUtilities(textAlignUtilities(), variants('textAlign'));
  addUtilities(transformOriginUtilities(), variants('transformOrigin'));
  addUtilities(spaceUtilities(theme), variants('space'), {
    supportsNegativeValues: true,
  });
  addUtilities(divideUtilities(theme), variants('divide'));
});
