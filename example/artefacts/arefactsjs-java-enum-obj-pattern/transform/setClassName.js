
exports.transform = function( model, options ) {
    var _ = require( 'underscore' );

    model.json.className = model.text( '.$src > .$json > .name');

    return model;
};