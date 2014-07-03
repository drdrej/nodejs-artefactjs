

// TODO: refactor transformations.
exports.exec = function( config ) {
    var _ = require( "underscore" );
    var json = require( 'json-tools' );

    json.json( config )
        .transform( function(element) {
            return {
                $src : element
            };
        })
        .asSelectable()
        .transform( 'file://' + __dirname + '/transform/createClassModel' );

};

