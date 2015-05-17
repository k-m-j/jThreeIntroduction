jThree( function( j3 ) {

	$( "#loading" ).remove();

	j3.Trackball();
	j3.Stats();

	$("#btn").click( function() {
		j3("#cube").attr( "mtl", "#mtlBlue");
	} );

},
function() {
	alert( "このブラウザはWebGLに対応していません。" );
} );
