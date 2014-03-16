jQuery(document).ready(function($) {
	$("#sub").click(function() {
		password = $("#password").val();
		email = $("#email").val();

		$.ajax({
			url: 'ajax/createAcount.php',
			type: 'POST',
			data: { email: email, password:password},
		})
		.done(function() {
			console.log("success");
			window.location.href="login.php";
		});
	});
	//klikniecia przy liscie pokoi
	$("#roomList").click(function() {
		$.ajax({
			url: 'ajax/roomsList.php',
			type: 'POST',
		})
		.complete(function(e){
			/*$("#content").html(e.responseText);
			console.log(e.responseText);*/
			/*console.log(e.responseText)
			rooms = e.responseText[0];
			p1 = e.responseText[1];
			p2 = e.responseText[2];

			$("#content").html(rooms[0] + p1[0] + p2[0]);*/
			tab = jQuery.parseJSON(e.responseText);


			table="
			<table class='table'>
			<tr>
			<td></td>
			</tr>

			";

			for(i=0;i<tab[0].length;i++){

			}



		});
		


	});



});