
exports.transform = function( model, options ) {
    model.fields = [];

    model.each( ".$src > .$json >.model > .fields > *", function( fieldDef ) {
        console.log( "-- build field: %j", fieldDef );

        var fieldTmpl = "private final <%= text( '.type' ) %>  <%= text( '.name' ) %>;";
        var field = fieldDef.render( fieldTmpl );

        model.fields.push(field);
    });

    return model;
};