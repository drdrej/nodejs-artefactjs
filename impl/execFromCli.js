/**
 * parse cli-options and exec placeholder.
 *
 * @type {exports}
 */
var nopt = require("nopt");

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

    console.log( "-- cli options parsed." );
    
    return parsed;
};