
exports.transform = function( model, options ) {
    var fields = [];

    model.each( ".$src > .$json >.model > .fields > *", function( fieldDef ) {
        var fieldTmpl = "private final <%= text( '.type' ) %>  <%= text( '.name' ) %>;";
        var field = fieldDef.render( fieldTmpl );

        fields.push(field);
    });

    model.put( "#fields", fields );

    return model;
};