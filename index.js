jThree( function( j3 ) {

	$( "#loading" ).remove();

	j3.Trackball();
	j3.Stats();

    jThree.MMD.sync('#audio');

/*
	j3( "mesh" ).animate( function() {

		var mode = + ( j3( this ).attr( "geo" ) == "#geo0" );
		j3( this ).attr( "geo", "#geo" + mode )
		.animate( { mtlColor: mode ? "#f00" : "#00f" }, 500 );

	} );
*/


	$(function () {
		j3( "#cube" ).animate( { rotateY: "-=50"}, 10000);
	});


},
function() {
	alert( "このブラウザはWebGLに対応していません。" );
} );
