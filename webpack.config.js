const path = require('path');

module.exports = {
    entry: './scripts/game.js', // Entry file
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js' // Bundled file
    },
    mode: 'development'
};