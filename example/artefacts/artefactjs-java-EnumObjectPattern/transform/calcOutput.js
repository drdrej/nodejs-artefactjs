/**
 * This path will be used for generating output if no .output configured in JSON/MODEL.
 *
 * @type {string}
 */
var DEFAULT_OUTPUT_PATH = "<%= $process %>/<%= $path %>/<%= name %>.<%= type %>"

exports.transform = function( model ) {
    // "output"   : "{{project.src}}/java/main/src/{{path}}/{{name}}.{{type}}",

    var get = function( container, key, defaultVal ) {
        var rval = container[key];
        if( rval )
            return rval;

        return defaultVal;
    };

    var output = get( model, "output", DEFAULT_OUTPUT_PATH);

    element.output = _.template(output, {
        $process : process.cwd(),
        $path : ".",
        name : element.name,
        type : element.type
    });

    return element;
};

/* TODO: transform $process to ctx.process */


