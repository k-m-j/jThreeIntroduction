jThree( function( j3 ) {

	$( "#loading" ).remove();

	j3.Trackball();
	j3.Stats();

	j3("camera").animate({positionZ: 500}, 10000);

},
function() {
	alert( "このブラウザはWebGLに対応していません。" );
} );
