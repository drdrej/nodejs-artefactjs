/**
 * loads config object and returns a wrapped object with some additional values:
 * $path, $artefact and $json.
 *
 * @param path
 * @return {{$path: *, $artefact: string, $json: *}}
 */
exports.load = function( path ) {
   var S = require( 'string' );
   var str = S(path);

    if( !str.endsWith( '.json' ) ) {
        console.log( "[ERROR] couldn't load config. path is not valid: " + path );
        return;
    }

    var json = require( path );
    console.log( "[INFO] config/json loaded. path = " + path);

    var artefactName = "artefactjs-" + json.type + "-" + json.artefact;

    return {
        "$path" : path,
        "$artefact" : artefactName,
        "$json" : json
    }
};
