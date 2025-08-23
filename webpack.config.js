const createExpoWebpackConfigAsync = require('@expo/webpack-config');

module.exports = async function (env, argv) {
  const config = await createExpoWebpackConfigAsync(env, argv);
  
  // Fix for GitHub Pages deployment
  if (env.mode === 'production') {
    config.output.publicPath = '/ricardo-ornelas-portfolio/';
  }
  
  return config;
};
