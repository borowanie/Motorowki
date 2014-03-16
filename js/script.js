jQuery(document).ready(function($) {
	//const
	table="";
	//functions
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
			tab = jQuery.parseJSON(e.responseText);
			table='<table class="table"><tr><th>#</th><th>gracz 1</th><th>gracz 2</th><th>nazwa pokoju</th></tr>';

			for(i=0;i<tab[0].length;i++){
				table+="<tr><td>" + i +"</td><td>" + tab[1][i] + "</td><td>" + tab[2][i] + "</td><td>" + tab[0][i] + "</td></tr>";
			}

			table+="</table>";
			$("#content").html(table);
		});

		$("#createRoom").parent().removeClass('active');
		$("#roomList").parent().addClass('active')
		$("#setings").parent().removeClass('active')

	});
	//klikniecie stworz pokoj
	$("#createRoom").click(function() {
		$("#createRoom").parent().addClass('active');
		$("#roomList").parent().removeClass('active')
		$("#setings").parent().removeClass('active')

		$("#content").html('<div class="form-group form-inline"><label class="control-label" for="roomName">Nazwa pokoju</label><input type="text" class="form-control" id="roomName"><button type="button" id="submitRoom" class="btn btn-primary">Stworz pokoj</button></div>');


			//tworzneie pokoju
			$("#submitRoom").click(function() {
				roomName = $("#roomName").val();
				$.ajax({
					url: 'ajax/createRoom.php',
					type: 'POST',
					data: {roomName: roomName},
				});				
			});

		//
	});


});