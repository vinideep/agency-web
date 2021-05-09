const plasmic = require('@plasmicapp/loader/next');
const withPlasmic = plasmic({
  projects: ['https://studio.plasmic.app/projects/6zmZWV6KtSMsshvR8B5pN5'] // An array of project ids.
});
module.exports = withPlasmic({
  // Your NextJS config.
});