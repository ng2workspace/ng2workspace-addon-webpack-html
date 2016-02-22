module.exports = function(options, workspace) {
  var config = workspace.get('webpack').webpackConfig;

  config.module.loaders.push({
    test: /\.html?$/,
    loader: 'raw-loader',
    exclude: workspace.util.toAbsolute(workspace.config.dir_src, 'index.html')
  });
};