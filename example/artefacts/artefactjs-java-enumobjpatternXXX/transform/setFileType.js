
exports.transform = function( model, options ) {
    var _ = require( 'underscore' );

    model.json.fileType = model.text( '.$src > .$json > .type' );

    return model;
};