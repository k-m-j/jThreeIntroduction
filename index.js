jThree( function( j3 ) {

	$( "#loading" ).remove();
	
	j3.Trackball();
	j3.Stats();
	jThree.MMD.play();

	function revolveEearth() {
		j3("#earthWrapper").animate({ positionX: "+=20", rotateY: "+=3.14" }, 5000, revolveEearth);
	};
	revolveEearth();

},
function() {
	alert( "このブラウザはWebGLに対応していません。" );
} );
