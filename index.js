jThree( function( j3 ) {

	$( "#loading" ).remove();

	j3.Trackball();
	j3.Stats();

	$("#btn").click(function(){
		var text = $("#text").val();

		j3("import").contents().find('#text').html(text);
		j3('#txr').attr('html','#text');
	});
},
function() {
	alert( "このブラウザはWebGLに対応していません。" );
} );
