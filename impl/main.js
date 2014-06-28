
exports.exec = function( config ) {
    console.log( "-- main.exec()" );

    var _ = require( "underscore" );

    if(_.isNull(config) ) {
        console.log( "ERROR: needs config. passed param:config is NULL/undefined.");
        return;
    }

    var json = require( 'json-tools' );

    json.query( config )
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
        });

    TODO: hier weiter machen: transformation etc... aktuell ist nicht klar, was mit den daten passiert.

};
