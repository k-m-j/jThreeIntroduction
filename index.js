jThree( function( j3 ) {

	$( "#loading" ).remove();
	
	j3.Trackball();
	j3.Stats();

	function rotateEarth() {
		j3("#earth").animate({ rotateY: "+=3.14" }, 5000, rotateEarth);
	}
	rotateEarth();

},
function() {
	alert( "このブラウザはWebGLに対応していません。" );
} );
