

exports.transform = function( model, options ) {
    var methods = [];

    var tmpl = "file://" + __dirname +"/../templates/GetterMethod.java.tmpl";

    model.each( ".$src > .$json > .model > .fields > *",
        function( fieldDef ) {
            var field = fieldDef.render( tmpl );
            methods.push(field);
        });

    model.put( '#methods', methods);

    return model;
};