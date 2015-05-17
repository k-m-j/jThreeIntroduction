jThree( function( j3 ) {

	$( "#loading" ).remove();
	jThree.MMD.play();

	j3.Trackball();

},
function() {
	alert( "このブラウザはWebGLに対応していません。" );
} );
