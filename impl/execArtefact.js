
exports.exec = function( config ) {
    var _ = require( "underscore" );
    var name = config.$artefact;

    if(_.isNull(name) ) {
        console.log( "ERROR: needs config. passed param:config is NULL/undefined.");
        return;
    }

    var pathUtil = require( 'path' );
    var path = pathUtil.normalize(pathUtil.resolve( process.cwd(), 'artefacts' ));

    console.log( "[LOAD_ARTEFACT] " + path );
    var artefacts = require( path).load;
    var artefact = artefacts( name );

    artefact.exec(config, {
        $prjDir : process.cwd(),
        $path : pathUtil.dirname(config.$path)
    });
};


