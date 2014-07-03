
exports.transform = function( model, options ) {
    model.$prjDir = process.cwd();
    model.$path = (options && _.isObject(options) && options.$path && _.isString(options.$path)) ? options.$path : ".";

    return model;
};