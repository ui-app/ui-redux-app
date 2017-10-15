var config = {
   entry: './index.js',

   output: {
      path:'/',
      filename: 'index.js',
   },

   devServer: {
      inline: true,
      port: 3001
   },

   module: {
      loaders: [
         {
            loader: 'babel-loader',
            test: /\.js?$/,
            exclude: /node_modules/
         }
      ]
   }
}

module.exports = config;
