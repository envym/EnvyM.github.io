$(document).ready(function() {
	showStartModal();
	
})





function showStartModal(){
	//satrt timeout
	if(localStorage.getItem('modal_yes_btn')!=1 && localStorage.getItem('modal_no_btn')!=1){
	
	setTimeout(function(){

		$('#call').modal('show');
		$('#modal_yes_btn').on('click', function(){
			//save state
			localStorage.setItem('modal_yes_btn', 1);
			$('#call').modal('hide');
		})
		$('#modal_no_btn').on('click', function(){
			//save state
			localStorage.setItem('modal_no_btn', 1);
			$('#call').modal('hide');
		})
	}, 3000);	
	}
}
