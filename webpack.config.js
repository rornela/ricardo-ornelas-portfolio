const createExpoWebpackConfigAsync = require('@expo/webpack-config');

module.exports = async function (env, argv) {
  const config = await createExpoWebpackConfigAsync(env, argv);
  
  // Fix for GitHub Pages deployment
  if (env.mode === 'production' && process.env.PUBLIC_URL) {
    config.output.publicPath = '/ricardo-ornelas-portfolio/';
  }
  
  return config;
};
