


exports.exec = function( config ) {
    var _ = require( "underscore" );
    var json = require( 'json-tools' );

    json.json( config )
        .transform( function( element ) {

            var output = _.template( "<%= $processDir %>/<%= $path %>/<%= name %>.<%= type %>", {
                $processDir : process.cwd(),
                $path : ".",
                name : element.name,
                type : element.type
            });

            return {
                artefact : {
                    name : ("artefactjs-" + element.type + "-" + element.artefact)
                },
                output : output,
                src: element
            };
        })

        /* build fields ::: */
        .transform( function(element){
            element.fields = [];

            var selectable = json.selectable( element );
            selectable.each( ".src > .model > .fields", function( fieldDef ) {
                console.log( "-- build field: %j", fieldDef );
                var field = fieldDef.render( "private final <%= text( '.type' ) %>  <%= text( '.name' ) %>;");

                element.fields.push(field);
            });

            return element;
        })

        .transform( function( element ) {
            element.methods = [];

            json.selectable( element )
                .each( ".src > .model > .fields",
                function( fieldDef ) {
                    var field = fieldDef.render( "file://" + __dirname +"/templates/GetterMethod.java.tmpl" );
                    element.methods.push(field);
                });

            return element;
        })

        .asSelectable()

        .transform( function(element) {
            return element;
        })

        .render( "file://" + __dirname +"/templates/EnumObjectClass.java.tmpl", "file://<%= json.output %>" );

};
