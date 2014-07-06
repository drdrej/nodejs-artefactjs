

exports.transform = function( model, options ) {
    var tmpl = "file://" + __dirname +"/../templates/Constructor.java.tmpl";
    var constructor = model.render(tmpl);
    model.put( '#constructors', [constructor]);

    return model;
};