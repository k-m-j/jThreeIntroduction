jThree( function( j3 ) {

	$( "#loading" ).remove();
	
	j3.Trackball();
	j3.Stats();
	jThree.MMD.play();

	jThree(function ( j3 ) {
        j3( "#cube" ).animate( { positionX: "-=50", positionY: "-=50"}, 20000);
    });

},
function() {
	alert( "このブラウザはWebGLに対応していません。" );
} );
