
exports.exec = function( config ) {
    console.log( "-- main.exec()" );

    var _ = require( "underscore" );

    if(_.isNull(config) ) {
        console.log( "ERROR: needs config. passed param:config is NULL/undefined.");
        return;
    }

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
                      var field = fieldDef.render( 'file://../templates/GetterMethod.java.tmpl');
                      element.methods.push(field);
                });

            return element;
        })
        .transform( function(element) {
            return element;
        })
        .render( "./<%= output %>" );

};


/*
TODO: hier weiter machen: transformation etc... aktuell ist nicht klar, was mit den daten passiert.



{
    "version" : 1,

    "type" : "java",

    "artefact" : "EnumObjectPattern",

    "name"     : "TestEnum",

    "output"   : "{{project.src}}/java/main/src/{{path}}/{{name}}.{{type}}",

    "model"    : {

    "imports" : [ "java.lang.String" ],

        "fields"  : [
        {
            "name" : "_id",
            "type" : "String"
        }
    ],

        "values" : [
        {
            "_id" : "XYZ"
        }
    ]
}
}
    */