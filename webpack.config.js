var config = {
   entry: '/Users/Oukee/programming/reactApp/main.js',
  
   output: {
      path:'/Users/Oukee/programming/reactApp/',
      filename: 'index.js',
   },
  
   devServer: {
      inline: true,
      port: 8080
   },
  
   module: {
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
        
            query: {
               presets: ['es2015', 'react']
            }
         }
      ]
   }
}

module.exports = config;