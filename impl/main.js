/**
 * loads config of an artefact.
 *
 * @type {Object} or NULL if json not found.
 */
exports.config = function(path) {
    var pathUtil = require( 'path' );
    var resolved = pathUtil.resolve( process.cwd(), path);

    var load = require('./loadConfig').load;

    return load(resolved);
};

/**
 * load and exec an artefact.
 *
 * @param {config} config for an artefact.
 */
exports.exec = function( config ) {
    console.log( "-- main.exec()" );

    var exec = require( './execArtefact' ).exec;
    exec(config);
};

/**
 *
 * @param path config-path of an artefact. never NULL!
 */
exports.artefact = function( path ) {
    var config = exports.config(path);
    exports.exec(config);
};
