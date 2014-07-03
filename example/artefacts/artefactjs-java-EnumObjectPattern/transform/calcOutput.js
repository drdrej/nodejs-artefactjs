

exports.transform = function( element ) {
    element.output = _.template( "<%= $processDir %>/<%= $path %>/<%= name %>.<%= type %>", {
        $processDir : process.cwd(),
        $path : ".",
        name : element.name,
        type : element.type
    });

    return element;
};


