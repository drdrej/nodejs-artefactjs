

exports.exec = function( config, options) {
    var _ = require( "underscore" );
    var json = require( 'json-tools' );

    json.json( config, options )
        .transform( function(element) {
            return {
                $src : element
            };
        })
        .asSelectable()

        .transform( 'file://' + __dirname + '/transform/createClassModel' )
        .transform( 'file://' + __dirname + '/transform/addCtxPaths' )

        .dump( 'file://' + __dirname + '/test.json' );
};

