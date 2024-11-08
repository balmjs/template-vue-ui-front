const { appRoot } = require('./env');
const publish = require('./balm.publish');

module.exports = (mix) => {
  if (mix.env.isProd) {
    // publish(mix);
  } else {
    // For BalmUI iconfonts
    mix.copy('node_modules/balm-ui/fonts/*', `${appRoot}/fonts`);
  }
};
