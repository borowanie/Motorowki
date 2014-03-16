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
			//window.location.href="rooms/";
		})
		.fail(function() {
			console.log("error");
			//window.location.href="rooms/";
		});
	});
});