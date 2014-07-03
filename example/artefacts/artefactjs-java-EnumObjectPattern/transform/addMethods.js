

exports.transform = function( model, options ) {
    model.methods = [];

    var tmpl = "file://" + __dirname +"/../templates/GetterMethod.java.tmpl";

    model.each( ".$src > .$json > .model > .fields > *",
        function( fieldDef ) {
            var field = fieldDef.render( tmpl );
            model.methods.push(field);
        });

    return model;
}