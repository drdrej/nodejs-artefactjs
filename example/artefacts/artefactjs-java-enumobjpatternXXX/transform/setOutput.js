/**
 * This path will be used for generating output if no .output configured in JSON/MODEL.
 *
 * @type {string}
 */
var DEFAULT_OUTPUT_PATH = "<%= $path %>/<%= $fileName %>.<%= $fileType %>";

exports.transform = function( model ) {
    var get = function( container, key, defaultVal ) {
        var rval = container[key];
        if( rval )
            return rval;

        return defaultVal;
    };

    var pathUtil = require( 'path' );
    var output = pathUtil.normalize(get( model, "output", DEFAULT_OUTPUT_PATH))
        ;
    var fileName = model.text( '#className' );
    var fileType = model.text( '#fileType' );

    var _ = require( 'underscore' );

    model.$output = _.template(output, {
        $prjDir : model.$prjDir,
        $path : model.$path,
        $fileName : fileName,
        $fileType : fileType
    });

    return model;
};



