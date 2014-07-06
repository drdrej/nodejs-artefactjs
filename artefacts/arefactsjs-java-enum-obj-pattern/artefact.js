

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
        .transform( 'file://' + __dirname + '/transform/addCtxPaths' )

        .transform( 'file://' + __dirname + '/transform/setClassName' )
        .transform( 'file://' + __dirname + '/transform/setFileType' )
        .transform( 'file://' + __dirname + '/transform/setOutput' )
        .transform( 'file://' + __dirname + '/transform/addFields' )
        .transform( 'file://' + __dirname + '/transform/addMethods' )
        .transform( 'file://' + __dirname + '/transform/addImplements' )
        .transform( 'file://' + __dirname + '/transform/addConstructor' )

        // .dump( "file://" + __dirname + "/test/TestEnumRendered.json" )
        .render( "file://" + __dirname +"/templates/EnumObjectClass.java.tmpl",
                "file://<%= $output %>" );

};

/*
rendering after dump() do not work.
 */

