var path = require('path');

module.exports = {
	port: '8080',
    build: 'dev',                  /* 'dev' | 'prod' */
    isWatching: false,

    appStartFileName: 'main.js',

    buildPath: path.join(__dirname, '..', '.tmp'),
    sailsConfigPath: path.join(__dirname, '..', 'config'),

    scriptSrcPath: path.join(__dirname, '..', 'src/scripts'),
    libSrcPath: path.join(__dirname, '..', 'src/lib'),
    styleSrcPath: path.join(__dirname, '..', 'src/styles'),
    imageSrcPath: path.join(__dirname, '..', 'src/images'),

    scriptDestPath: path.join('public/scripts'),
    libDestPath: path.join('public/lib'),
    styleDestPath: path.join('public/styles'),
    imageDestPath: path.join('public/images')

};
