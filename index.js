jThree( function( j3 ) {

	$( "#loading" ).remove();
	
	j3.Trackball();
	j3.Stats();

	$("#btn").click(function (){
		var　positionX = parseInt(Math.random()*200)-100,
			 meshTag = '<mesh class="cube" geo="#geo" mtl="#mtl" style="positionX: ' + positionX +'; positionZ: -100;"></mesh>';

		j3("scene").prepend(meshTag);
	});
},
function() {
	alert( "このブラウザはWebGLに対応していません。" );
} );
