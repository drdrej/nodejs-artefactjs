

exports.transform = function( model, options ) {
    var methods = [];

    var tmpl = "file://" + __dirname +"/../templates/GetterMethod.java.tmpl";

    model.each( ".$src > .$json > .model > .fields > *",
        function( fieldDef ) {
            var S = require( 'string' );
            var name = fieldDef.text( '#name' );
            var methodName = "get" + S(name).capitalize();

            fieldDef.put( '#methodName', methodName);

            var field = fieldDef.render( tmpl );
            methods.push(field);
        });

    model.put( '#methods', methods);

    return model;
};