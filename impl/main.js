
exports.exec = function( config ) {
    console.log( "-- main.exec()" );

    var _ = require( "underscore" );

    if(_.isNull(config) ) {
        console.log( "ERROR: needs config. passed param:config is NULL/undefined.");
        return;
    }

    var pathUtil = require( 'path' );

    var name = "artefactjs-java-EnumObjectPattern";

    var path = pathUtil.normalize(pathUtil.resolve( process.cwd(), 'artefacts' ));

    console.log( "[LOAD_ARTEFACT] " + path );
    var artefacts = require( path).load;

    var artefact = artefacts( name );


    artefact.exec(config);
};
