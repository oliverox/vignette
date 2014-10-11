var path = require('path');
var version = '0.0.1';
var tmpPath = path.join(__dirname, '..', '.tmp');
var buildPath = path.join(tmpPath, version);
var sailsConfigPath = path.join(__dirname, '..', 'config');
var scriptSrcPath = path.join(__dirname, '..', 'src/scripts');
var libSrcPath = path.join(__dirname, '..', 'src/lib');
var styleSrcPath = path.join(__dirname, '..', 'src/styles');
var imageSrcPath = path.join(__dirname, '..', 'src/images');

module.exports = {
	port: '8080',
	environment: 'development',
    isWatching: false,
    appStartFileName: 'main.js',

	tmpPath: tmpPath,
    buildPath: buildPath,
    sailsConfigPath: sailsConfigPath,

    scriptSrcPath: scriptSrcPath,
    libSrcPath: libSrcPath,
    styleSrcPath: styleSrcPath,
    imageSrcPath: imageSrcPath,

    scriptDestPath: path.join('public/scripts'),
    libDestPath: path.join('public/lib'),
    styleDestPath: path.join('public/styles'),
    imageDestPath: path.join('public/images')

};
