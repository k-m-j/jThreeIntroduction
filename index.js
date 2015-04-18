jThree( function( j3 ) {

	$( "#loading" ).remove();

	j3.Trackball();
	j3.Stats();
	jThree.MMD.sync('#audio');

},
function() {
	alert( "このブラウザはWebGLに対応していません。" );
} );
