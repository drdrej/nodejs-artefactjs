/**
 * parse cli-options and exec placeholder.
 *
 * @type {exports}
 */
var nopt = require("nopt");


var existsOptionConfig = function( parsed ) {
    var _ = require( "underscore" );

    if(_.isNull( parsed.config ) ) {
        throw "You need to pass option: --config=<path>";
    }
};

exports.cli = function() {
        var path = require("path");

            var knownOpts = {
                "config" : path,
                "version" : Boolean,
                "init"    : Boolean
            };

            var shortHands = {
                "c" : ["--config"],
                "v" : ["--version"],
                "i" : ["--init"]
            };

    var parsed = nopt(knownOpts, shortHands, process.argv, 2);
    existsOptionConfig(parsed);

    console.log( "-- cli options parsed." );
    
    return parsed;
};