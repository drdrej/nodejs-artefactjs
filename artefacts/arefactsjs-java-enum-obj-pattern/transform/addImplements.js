
exports.transform = function( model, options ) {
    /*
    var methods = [];


    var tmpl = "file://" + __dirname +"/../templates/GetterMethod.java.tmpl";


    model.each( ".$src > .$json > .model > .implements > *",
        function( fieldDef ) {
            fieldDef.put( '#methodName', methodName);

            var field = fieldDef.render( tmpl );
            methods.push(field);
        });

    model.put( '#methods', methods);
*/
    var count = 0;
    var implements = "";

    model.each( '.$src > .$json > .model > .implements > *', function( impl )  {
        if( count < 1 )
           implements += "implements ";

        if( count > 0 )
           implements += ", ";

        implements += impl.text();
    });

    model.put( '#implements', implements );

    return model;
};