$(document).ready(function() {
	$("#form").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
			alert("Спасибо за ваше письмо!");
			$("#form").trigger("reset");
		});
		return false;
	});
});