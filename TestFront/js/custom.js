function changeErroDisplay(){


	document.getElementById("form_error_name").style.display = 'none';
	document.getElementById("form_error_Sname").style.display = 'none';
	document.getElementById("form_error_country").style.display = 'none';
	document.getElementById("form_error_phone").style.display = 'none';
	document.getElementById("form_error_password").style.display = 'none';
	document.getElementById("form_error_CPassword").style.display = 'none';
	document.getElementById("form_error_email").style.display = 'none';



	/*____________________________________________ First Name check_____________________*/


	var SizeOfText = document.getElementById("firstName").value;
	var arr = SizeOfText.split('');
	if (arr.length < 3 ){
		document.getElementById("form_error_name").style.display = 'block';
	}
	else {
		null;
	}


	/*____________________________________________ Second Name check_____________________*/

	var SizeOfText = document.getElementById("secondName").value;
	var arr = SizeOfText.split('');
	if (arr.length < 3 ){
		document.getElementById("form_error_Sname").style.display = 'block';
	}
	else {
		null;
	}


	/*____________________________________________ Phone check_____________________*/


	var SizeOfText = document.getElementById("Phone").value;
	var arr = SizeOfText.split('');
	if (arr.length < 10 ){
		document.getElementById("form_error_phone").style.display = 'block';
	}
	else {
		null;
	}

	/*____________________________________________ Password check_____________________*/

	var SizeOfText = document.getElementById("Password").value;
	var arr = SizeOfText.split('');
	let arr_en = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
	let arr_symb = ['!', '@', '#', '$', '%', '&', '?', '-', '+', '=', '~', '_', '"', '?', '<', '>', "'", '[', ']', '{', '}' ];

	var arr_en_true = 0;
	var arr_number_true = 0;
	var arr_symb_true = 0;
	var password_true = 0;

	for (var i = 0; i < arr.length; i++) {
		for(var arr_en_numb = 0; arr_en_numb < arr_en.length; arr_en_numb++){
			if (arr[i] == arr_en[arr_en_numb]){
				arr_en_true = 1;
			}
			else{
				null;
			}

	 		/*if(arr[i] == arr_en_numb){
	 			arr_number_true = 1;
	 		}*/
	 	}

	 	for(var arr_number_numb = 0; arr_number_numb <= 9; arr_number_numb++){
	 		if(arr[i] == arr_number_numb){
	 			arr_number_true = 1;
	 		}
	 		else{
	 			null;
	 		}
	 	}

	 	for (var arr_symb_numb = 0; arr_symb_numb < arr_symb.length; arr_symb_numb++){
	 		if(arr[i] == arr_symb[arr_symb_numb]){
	 			arr_symb_true = 1;
	 		}
	 		else{
	 			null;
	 		}
	 	}
	 }





	 var password_true = arr_number_true + arr_en_true + arr_symb_true;

	 if ( password_true !== 3){
	 	document.getElementById("form_error_password").style.display = 'block';
	 }
	 else{
	 	null;
	 }


	 /*____________________________________________ ConfirmPassword check_____________________*/


	 var SizeOfText = document.getElementById("Password").value;
	 var SizeOfText2 = document.getElementById("ConfirmPassword").value;

	 if( SizeOfText !== SizeOfText2){
	 	document.getElementById("form_error_CPassword").style.display = 'block';
	 }
	 else{
	 	null;
	 }

	 /*____________________________________________ Email check_____________________*/

	 var SizeOfText = document.getElementById("Email").value;
	 var arr = SizeOfText.split('');
	 var dot_true = 0;
	 var dog_true = 0;
	 var email_true = 0;
	 for (var i = 0; i < arr.length; i++){
	 	if(arr[i] == '.'){
	 		dot_true = 1;
	 	}
	 	else {
	 		null;
	 	}

	 	if(arr[i] == '@'){
	 		dog_true = 1;
	 	}
	 	else {
	 		null;
	 	}
	 }

	 email_true = dot_true + dog_true;

	 if (email_true !== 2){
	 	document.getElementById("form_error_email").style.display = 'block';
	 }
	 else {
	 	null;
	 }

	 /*____________________________________________ Country check_____________________*/

	 var SizeOfText = 0 + document.getElementById("Country").value;

	 if (SizeOfText == 0) {
	 	document.getElementById("form_error_country").style.display = 'block';
	 }
	 else{
	 	null;
	 }



	 /*____________________________________________ CUSTOM CHECKBOX check______________________*/


	 if ( $('#confrim_click').is(':checked') ) {
	 	null;
	 } 
	 else {
	 	document.getElementById("checkbox_icon_empty").style.display = 'none';
	 	document.getElementById("checkbox_icon_full").style.display = 'none';
	 	document.getElementById("checkbox_icon_error").style.display = 'flex';
	 	setTimeout(function(){
	 		if ( $('#confrim_click').is(':checked') ) {
	 			document.getElementById("checkbox_icon_empty").style.display = 'none';
	 			document.getElementById("checkbox_icon_full").style.display = 'flex';
	 			document.getElementById("checkbox_icon_error").style.display = 'none';
	 		}  
	 		else {
	 			document.getElementById("checkbox_icon_empty").style.display = 'flex';
	 			document.getElementById("checkbox_icon_full").style.display = 'none';
	 			document.getElementById("checkbox_icon_error").style.display = 'none';
	 		}
	 	}, 4000);
	 }

	 

	 setTimeout(function(){
	 	document.getElementById("form_error_name").style.display = 'none';
	 	document.getElementById("form_error_Sname").style.display = 'none';
	 	document.getElementById("form_error_country").style.display = 'none';
	 	document.getElementById("form_error_phone").style.display = 'none';
	 	document.getElementById("form_error_password").style.display = 'none';
	 	document.getElementById("form_error_CPassword").style.display = 'none';
	 	document.getElementById("form_error_email").style.display = 'none';
	 }, 4000);

	 var Leght = arr.length;
	 SizeOfText = document.getElementById("firstName").value;
	 document.getElementById('str').innerHTML="Вы ввели: "+control_click_check;

	}





	/*____________________________________________ First Country recall_____________________*/

	function countrySelectCallFirst (){
		
		document.getElementById("Country_sel").style.display = 'block';
		document.getElementById("country_open_icon").style.display = 'none';
		document.getElementById("country_close_icon").style.display = 'flex';
		document.getElementById('Country').removeAttribute("onclick");

	}


	/*____________________________________________ Country recall_____________________*/

	function countrySelectCall(){
		document.getElementById("Country_sel").style.display = 'block';
		document.getElementById("country_open_icon").style.display = 'none';
		document.getElementById("country_close_icon").style.display = 'flex';
		
	}

	/*____________________________________________ Country creation_____________________*/

	function countryCreate(){
		let contry_name = ['Afghanistan', 	'Albania', 	'Algeria', 	'American Samoa', 	'Andorra', 	'Angola', 	'Anguilla', 	'Antigua and Barbuda', 	'Armenia', 	'Argentina', 	'Australia', 	'Austria', 	'Azerbaijan', 	'Bahamas', 	'Bahrain', 	'Bangladesh', 	'Barbados', 	'Belarus', 	'Belgium', 	'Belize', 	'Benin', 	'Bermuda', 	'Bolivia', 	'Bosnia and Herzegovina', 	'Botswana', 	'Brazil', 	'British Virgin Islands', 	'Brunei Darusalaam', 	'Bulgaria', 	'Burkina Faso', 	'Burundi', 	'Byelorussian', 	'Cambodia', 	'Cameroon', 	'Canada', 	'Cape Verde', 	'Cayman Islands', 	'Central African Republic', 	'Chad', 	'Chile', 	'China', 	'Christmas Island', 	'Cocos Islands', 	'Colombia', 	'Commonwealth of the Northern Mariana Islands', 	'Comoros and Mayotte Island', 	'Congo', 	'Cook Islands', 	'Costa Rica', 	'Croatia', 	'Cuba', 	'Cyprus', 	'Czech Republic', 	'Denmark', 	'Diego Garcia', 	'Djibouti', 	'Dominica', 	'Dominican Republic', 	'East Timor', 	'Ecuador', 	'Egypt', 	'El Salvador', 	'Equatorial Guinea', 	'Estonia', 	'Ethiopia', 	'Faeroe Islands', 	'Falkland Islands', 	'Fiji', 	'Finland', 	'France', 	'French Antilles', 	'French Guiana', 	'French Polynesia', 	'Gabon', 	'Gambia', 	'Georgia', 	'Germany', 	'Ghana', 	'Gibraltar', 	'Greece', 	'Greenland', 	'Grenada', 	'Guam', 	'Guatemala', 	'Guinea', 	'Guinea-Bissau', 	'Guyana', 	'Haiti', 	'Honduras', 	'Hong Kong', 	'Hungary', 	'Iceland', 	'India', 	'Indonesia', 	'Iran', 	'Iraq', 	'Irish Republic', 	'Israel', 	'Italy', 	'Ivory Coast', 	'Jamaica', 	'Japan', 	'Jordan', 	'Kazakhstan', 	'Kenya', 	'Kiribati Republic', 	'Kirg(h)izia', 	'Kuwait', 	'Laos', 	'Latvia', 	'Lebanon', 	'Lesotho', 	'Liberia', 	'Libya', 	'Liechtenstein', 	'Lithuania', 	'Luxembourg', 	'Macao', 	'Macedonia', 	'Madagascar', 	'Malawi', 	'Malaysia', 	'Maldives', 	'Mali', 	'Malta', 	'Marshall Islands', 	'Martinique', 	'Mauritania', 	'Mauritius', 	'Mexico', 	'Micronesia', 	'Monaco', 	'Mongolia', 	'Montserrat', 	'Morocco', 	'Mozambique', 	'Myanmar', 	'Namibia', 	'Nauru', 	'Nepal', 	'Netherlands', 	'Netherlands Antilles', 	'New Caledonia', 	'New Zealand', 	'Nicaragua', 	'Niger', 	'Nigeria', 	'Niue', 	'Norfolk Island', 	'North Korea', 	'North Yemen', 	'Northern Mariana Islands', 	'Norway', 	'Oman', 	'Pakistan', 	'Panama', 	'Papua New Guinea', 	'Paraguay', 	'Peru', 	'Philippines', 	'Poland', 	'Portugal', 	'Puerto Rico', 	'Qatar', 	'Republic of San Marino', 	'Reunion', 	'Romania', 	'Russia', 	'Rwandese Republic', 	'Saint Helena and Ascension Island', 	'Saint Pierre et Miquelon', 	'San Marino', 	'Sao Tome e Principe', 	'Saudi Arabia', 	'Senegal', 	'Seychelles', 	'Sierra Leone', 	'Singapore', 	'Slovakia', 	'Slovenia', 	'Solomon Islands', 	'Somalia', 	'South Africa', 	'South Korea', 	'South Yemen', 	'Spain', 	'Sri Lanka', 	'St.Kitts and Nevis', 	'St.Lucia', 	'St.Vincent and the Grenadines', 	'Sudan', 	'Suriname', 	'Svalbard and Jan Mayen Islands', 	'Swaziland', 	'Sweden', 	'Switzerland', 	'Syria', 	'Ta(d)jikistan', 	'Taiwan', 	'Tanzania', 	'Thailand', 	'Togolese Republic', 	'Tokelau', 	'Tonga', 	'Trinidad and Tobago', 	'Tunisia', 	'Turkey', 	'Turkmenistan', 	'Turks & Caicos Islands', 	'Tuvalu', 	'US Virgin Islands', 	'Uganda', 	'Ukraine', 	'United Arab Emirates', 	'United Kingdom', 	'Uruguay', 	'USA', 	'Uzbekistan', 	'Vanuatu', 	'Vatican City', 	'Venezuela', 	'Vietnam', 	'Wallis and Futuna Islands', 	'Western Sahara', 	'Western Samoa', 	'Yugoslavia', 	'Zaire', 	'Zambia', 	'Zimbabwe'];

		for(i = contry_name.length - 1; i >= 0; i = i-1){
			let liFirst = document.createElement('option');
			liFirst.value = contry_name[i];
			liFirst.id = contry_name[i];
			liFirst.innerHTML = contry_name[i];
			Country_sel.prepend(liFirst);
		}
	}


	/*____________________________________________ Country number enter_____________________*/

	function countrySelect(){
		

		document.getElementById("Country").value = document.getElementById("Country_sel").value;

		document.getElementById("Country_sel").style.display = 'none';
		document.getElementById("country_open_icon").style.display = 'flex';
		document.getElementById("country_close_icon").style.display = 'none';

		let contry_phone = ['+93', 	'+355', '+21', 	'+684', 	'+376', '+244', 	'+1-264', 	'+1-268', 	'+374', 	'+54', 	'+61', 	'+43', 	'+994', 	'+1-242', 	'+973', 	'+880', 	'+1-246', 	'+375', 	'+32', 	'+501', 	'+229', 	'+1-441', 	'+591', 	'+387', 	'+267', 	'+55', 	'+1-284', 	'+673', 	'+359', 	'+226', 	'+257', 	'+7', 	'+855', 	'+237', 	'+1', 	'+238', 	'+1-345', 	'+236', 	'+235', 	'+56', 	'+86', 	'+672', 	'+672', 	'+57', 	'+1-670', 	'+269', 	'+242', 	'+682', 	'+506', 	'+385', 	'+53', 	'+357', 	'+420', 	'+45', 	'+246', 	'+253', 	'+1-767', 	'+1-809', 	'+62', 	'+593', 	'+20', 	'+503', 	'+240', 	'+372', 	'+251', 	'+298', 	'+500', 	'+679', 	'+358', 	'+33', 	'+590', 	'+594', 	'+689', 	'+241', 	'+220', 	'+995', 	'+49', 	'+233', 	'+350', 	'+30', 	'+299', 	'+1-473', 	'+1-671 ', 	'+502', 	'+224', 	'+245', 	'+592', 	'+509', 	'+504', 	'+852', 	'+36', 	'+354', 	'+91', 	'+62', 	'+98', 	'+964', 	'+353', 	'+972', 	'+39', 	'+225', 	'+1-876', 	'+81', 	'+962', 	'+7', 	'+254', 	'+686', 	'+996', 	'+965', 	'+856', 	'+371', 	'+961', 	'+266', 	'+231', 	'+21', 	'+41', 	'+370', 	'+352', 	'+853', 	'+389', 	'+261', 	'+265', 	'+60', 	'+960', 	'+223', 	'+356', 	'+692', 	'+596', 	'+222', 	'+230', 	'+1-706', 	'+691', 	'+377', 	'+976', 	'+1-664', 	'+212', 	'+258', 	'+95', 	'+264', 	'+674', 	'+977', 	'+31', 	'+599', 	'+687', 	'+64', 	'+505', 	'+227', 	'+234', 	'+683', 	'+672', 	'+850', 	'+967', 	'+670', 	'+47', 	'+968', 	'+92', 	'+507', 	'+675', 	'+595', 	'+51', 	'+63', 	'+48', 	'+351', 	'+1-787', 	'+974', 	'+378', 	'+262', 	'+40', 	'+7', 	'+250', 	'+247', 	'+508', 	'+39', 	'+239', 	'+966', 	'+221', 	'+248', 	'+232', 	'+65', 	'+421', 	'+386', 	'+677', 	'+252', 	'+27', 	'+82', 	'+969', 	'+34', 	'+94', 	'+1-869', 	'+1-758', 	'+1-784', 	'+249', 	'+597', 	'+47', 	'+268', 	'+46', 	'+41', 	'+963', 	'+992', 	'+886', 	'+255', 	'+66', 	'+228', 	'+690', 	'+676', 	'+1-868', 	'+21', 	'+90', 	'+993', 	'+1-649', 	'+688', 	'+1-340', 	'+256', 	'+380', 	'+971', 	'+44', 	'+598', 	'+1', 	'+998', 	'+678', 	'+39', 	'+58', 	'+84', 	'+681', 	'+21', 	'+685', 	'+381', 	'+243', 	'+260', 	'+263'];
		let contry_name = ['Afghanistan', 	'Albania', 	'Algeria', 	'American Samoa', 	'Andorra', 	'Angola', 	'Anguilla', 	'Antigua and Barbuda', 	'Armenia', 	'Argentina', 	'Australia', 	'Austria', 	'Azerbaijan', 	'Bahamas', 	'Bahrain', 	'Bangladesh', 	'Barbados', 	'Belarus', 	'Belgium', 	'Belize', 	'Benin', 	'Bermuda', 	'Bolivia', 	'Bosnia and Herzegovina', 	'Botswana', 	'Brazil', 	'British Virgin Islands', 	'Brunei Darusalaam', 	'Bulgaria', 	'Burkina Faso', 	'Burundi', 	'Byelorussian', 	'Cambodia', 	'Cameroon', 	'Canada', 	'Cape Verde', 	'Cayman Islands', 	'Central African Republic', 	'Chad', 	'Chile', 	'China', 	'Christmas Island', 	'Cocos Islands', 	'Colombia', 	'Commonwealth of the Northern Mariana Islands', 	'Comoros and Mayotte Island', 	'Congo', 	'Cook Islands', 	'Costa Rica', 	'Croatia', 	'Cuba', 	'Cyprus', 	'Czech Republic', 	'Denmark', 	'Diego Garcia', 	'Djibouti', 	'Dominica', 	'Dominican Republic', 	'East Timor', 	'Ecuador', 	'Egypt', 	'El Salvador', 	'Equatorial Guinea', 	'Estonia', 	'Ethiopia', 	'Faeroe Islands', 	'Falkland Islands', 	'Fiji', 	'Finland', 	'France', 	'French Antilles', 	'French Guiana', 	'French Polynesia', 	'Gabon', 	'Gambia', 	'Georgia', 	'Germany', 	'Ghana', 	'Gibraltar', 	'Greece', 	'Greenland', 	'Grenada', 	'Guam', 	'Guatemala', 	'Guinea', 	'Guinea-Bissau', 	'Guyana', 	'Haiti', 	'Honduras', 	'Hong Kong', 	'Hungary', 	'Iceland', 	'India', 	'Indonesia', 	'Iran', 	'Iraq', 	'Irish Republic', 	'Israel', 	'Italy', 	'Ivory Coast', 	'Jamaica', 	'Japan', 	'Jordan', 	'Kazakhstan', 	'Kenya', 	'Kiribati Republic', 	'Kirg(h)izia', 	'Kuwait', 	'Laos', 	'Latvia', 	'Lebanon', 	'Lesotho', 	'Liberia', 	'Libya', 	'Liechtenstein', 	'Lithuania', 	'Luxembourg', 	'Macao', 	'Macedonia', 	'Madagascar', 	'Malawi', 	'Malaysia', 	'Maldives', 	'Mali', 	'Malta', 	'Marshall Islands', 	'Martinique', 	'Mauritania', 	'Mauritius', 	'Mexico', 	'Micronesia', 	'Monaco', 	'Mongolia', 	'Montserrat', 	'Morocco', 	'Mozambique', 	'Myanmar', 	'Namibia', 	'Nauru', 	'Nepal', 	'Netherlands', 	'Netherlands Antilles', 	'New Caledonia', 	'New Zealand', 	'Nicaragua', 	'Niger', 	'Nigeria', 	'Niue', 	'Norfolk Island', 	'North Korea', 	'North Yemen', 	'Northern Mariana Islands', 	'Norway', 	'Oman', 	'Pakistan', 	'Panama', 	'Papua New Guinea', 	'Paraguay', 	'Peru', 	'Philippines', 	'Poland', 	'Portugal', 	'Puerto Rico', 	'Qatar', 	'Republic of San Marino', 	'Reunion', 	'Romania', 	'Russia', 	'Rwandese Republic', 	'Saint Helena and Ascension Island', 	'Saint Pierre et Miquelon', 	'San Marino', 	'Sao Tome e Principe', 	'Saudi Arabia', 	'Senegal', 	'Seychelles', 	'Sierra Leone', 	'Singapore', 	'Slovakia', 	'Slovenia', 	'Solomon Islands', 	'Somalia', 	'South Africa', 	'South Korea', 	'South Yemen', 	'Spain', 	'Sri Lanka', 	'St.Kitts and Nevis', 	'St.Lucia', 	'St.Vincent and the Grenadines', 	'Sudan', 	'Suriname', 	'Svalbard and Jan Mayen Islands', 	'Swaziland', 	'Sweden', 	'Switzerland', 	'Syria', 	'Ta(d)jikistan', 	'Taiwan', 	'Tanzania', 	'Thailand', 	'Togolese Republic', 	'Tokelau', 	'Tonga', 	'Trinidad and Tobago', 	'Tunisia', 	'Turkey', 	'Turkmenistan', 	'Turks & Caicos Islands', 	'Tuvalu', 	'US Virgin Islands', 	'Uganda', 	'Ukraine', 	'United Arab Emirates', 	'United Kingdom', 	'Uruguay', 	'USA', 	'Uzbekistan', 	'Vanuatu', 	'Vatican City', 	'Venezuela', 	'Vietnam', 	'Wallis and Futuna Islands', 	'Western Sahara', 	'Western Samoa', 	'Yugoslavia', 	'Zaire', 	'Zambia', 	'Zimbabwe'];

		var contry_tru_name = document.getElementById("Country").value;

		for(var i = 0; i < contry_name.length; i++ ){
			if(contry_tru_name == contry_name[i]){
				var phone_true_value = contry_phone[i];
			}
			else{
				null;
			}
		}
		document.getElementById("Phone").value = phone_true_value;
		$("#placeholder_move_Phone").animate({ marginTop: "-21px"},{duration:300, queue: false});
		$("#placeholder_move_Phone").animate({ fontSize: "11px"},{duration:300, queue: false});
		$("#Phone").animate({ marginTop: "8px"},{duration:300, queue: false});
		document.getElementById("placeholder_move_Phone").style.color = '#67D9B7';




	}

	function countrySelectClose(){
		document.getElementById("Country_sel").style.display = 'none';
		document.getElementById("country_open_icon").style.display = 'flex';
		document.getElementById("country_close_icon").style.display = 'none';
	}



	function countrySelectInt(){
		

		

		document.getElementById("Country_sel").style.display = 'none';
		document.getElementById("country_open_icon").style.display = 'flex';
		document.getElementById("country_close_icon").style.display = 'none';

		let contry_phone = ['+93', 	'+355', '+21', 	'+684', 	'+376', '+244', 	'+1-264', 	'+1-268', 	'+374', 	'+54', 	'+61', 	'+43', 	'+994', 	'+1-242', 	'+973', 	'+880', 	'+1-246', 	'+375', 	'+32', 	'+501', 	'+229', 	'+1-441', 	'+591', 	'+387', 	'+267', 	'+55', 	'+1-284', 	'+673', 	'+359', 	'+226', 	'+257', 	'+7', 	'+855', 	'+237', 	'+1', 	'+238', 	'+1-345', 	'+236', 	'+235', 	'+56', 	'+86', 	'+672', 	'+672', 	'+57', 	'+1-670', 	'+269', 	'+242', 	'+682', 	'+506', 	'+385', 	'+53', 	'+357', 	'+420', 	'+45', 	'+246', 	'+253', 	'+1-767', 	'+1-809', 	'+62', 	'+593', 	'+20', 	'+503', 	'+240', 	'+372', 	'+251', 	'+298', 	'+500', 	'+679', 	'+358', 	'+33', 	'+590', 	'+594', 	'+689', 	'+241', 	'+220', 	'+995', 	'+49', 	'+233', 	'+350', 	'+30', 	'+299', 	'+1-473', 	'+1-671 ', 	'+502', 	'+224', 	'+245', 	'+592', 	'+509', 	'+504', 	'+852', 	'+36', 	'+354', 	'+91', 	'+62', 	'+98', 	'+964', 	'+353', 	'+972', 	'+39', 	'+225', 	'+1-876', 	'+81', 	'+962', 	'+7', 	'+254', 	'+686', 	'+996', 	'+965', 	'+856', 	'+371', 	'+961', 	'+266', 	'+231', 	'+21', 	'+41', 	'+370', 	'+352', 	'+853', 	'+389', 	'+261', 	'+265', 	'+60', 	'+960', 	'+223', 	'+356', 	'+692', 	'+596', 	'+222', 	'+230', 	'+1-706', 	'+691', 	'+377', 	'+976', 	'+1-664', 	'+212', 	'+258', 	'+95', 	'+264', 	'+674', 	'+977', 	'+31', 	'+599', 	'+687', 	'+64', 	'+505', 	'+227', 	'+234', 	'+683', 	'+672', 	'+850', 	'+967', 	'+670', 	'+47', 	'+968', 	'+92', 	'+507', 	'+675', 	'+595', 	'+51', 	'+63', 	'+48', 	'+351', 	'+1-787', 	'+974', 	'+378', 	'+262', 	'+40', 	'+7', 	'+250', 	'+247', 	'+508', 	'+39', 	'+239', 	'+966', 	'+221', 	'+248', 	'+232', 	'+65', 	'+421', 	'+386', 	'+677', 	'+252', 	'+27', 	'+82', 	'+969', 	'+34', 	'+94', 	'+1-869', 	'+1-758', 	'+1-784', 	'+249', 	'+597', 	'+47', 	'+268', 	'+46', 	'+41', 	'+963', 	'+992', 	'+886', 	'+255', 	'+66', 	'+228', 	'+690', 	'+676', 	'+1-868', 	'+21', 	'+90', 	'+993', 	'+1-649', 	'+688', 	'+1-340', 	'+256', 	'+380', 	'+971', 	'+44', 	'+598', 	'+1', 	'+998', 	'+678', 	'+39', 	'+58', 	'+84', 	'+681', 	'+21', 	'+685', 	'+381', 	'+243', 	'+260', 	'+263'];
		let contry_name = ['Afghanistan', 	'Albania', 	'Algeria', 	'American Samoa', 	'Andorra', 	'Angola', 	'Anguilla', 	'Antigua and Barbuda', 	'Armenia', 	'Argentina', 	'Australia', 	'Austria', 	'Azerbaijan', 	'Bahamas', 	'Bahrain', 	'Bangladesh', 	'Barbados', 	'Belarus', 	'Belgium', 	'Belize', 	'Benin', 	'Bermuda', 	'Bolivia', 	'Bosnia and Herzegovina', 	'Botswana', 	'Brazil', 	'British Virgin Islands', 	'Brunei Darusalaam', 	'Bulgaria', 	'Burkina Faso', 	'Burundi', 	'Byelorussian', 	'Cambodia', 	'Cameroon', 	'Canada', 	'Cape Verde', 	'Cayman Islands', 	'Central African Republic', 	'Chad', 	'Chile', 	'China', 	'Christmas Island', 	'Cocos Islands', 	'Colombia', 	'Commonwealth of the Northern Mariana Islands', 	'Comoros and Mayotte Island', 	'Congo', 	'Cook Islands', 	'Costa Rica', 	'Croatia', 	'Cuba', 	'Cyprus', 	'Czech Republic', 	'Denmark', 	'Diego Garcia', 	'Djibouti', 	'Dominica', 	'Dominican Republic', 	'East Timor', 	'Ecuador', 	'Egypt', 	'El Salvador', 	'Equatorial Guinea', 	'Estonia', 	'Ethiopia', 	'Faeroe Islands', 	'Falkland Islands', 	'Fiji', 	'Finland', 	'France', 	'French Antilles', 	'French Guiana', 	'French Polynesia', 	'Gabon', 	'Gambia', 	'Georgia', 	'Germany', 	'Ghana', 	'Gibraltar', 	'Greece', 	'Greenland', 	'Grenada', 	'Guam', 	'Guatemala', 	'Guinea', 	'Guinea-Bissau', 	'Guyana', 	'Haiti', 	'Honduras', 	'Hong Kong', 	'Hungary', 	'Iceland', 	'India', 	'Indonesia', 	'Iran', 	'Iraq', 	'Irish Republic', 	'Israel', 	'Italy', 	'Ivory Coast', 	'Jamaica', 	'Japan', 	'Jordan', 	'Kazakhstan', 	'Kenya', 	'Kiribati Republic', 	'Kirg(h)izia', 	'Kuwait', 	'Laos', 	'Latvia', 	'Lebanon', 	'Lesotho', 	'Liberia', 	'Libya', 	'Liechtenstein', 	'Lithuania', 	'Luxembourg', 	'Macao', 	'Macedonia', 	'Madagascar', 	'Malawi', 	'Malaysia', 	'Maldives', 	'Mali', 	'Malta', 	'Marshall Islands', 	'Martinique', 	'Mauritania', 	'Mauritius', 	'Mexico', 	'Micronesia', 	'Monaco', 	'Mongolia', 	'Montserrat', 	'Morocco', 	'Mozambique', 	'Myanmar', 	'Namibia', 	'Nauru', 	'Nepal', 	'Netherlands', 	'Netherlands Antilles', 	'New Caledonia', 	'New Zealand', 	'Nicaragua', 	'Niger', 	'Nigeria', 	'Niue', 	'Norfolk Island', 	'North Korea', 	'North Yemen', 	'Northern Mariana Islands', 	'Norway', 	'Oman', 	'Pakistan', 	'Panama', 	'Papua New Guinea', 	'Paraguay', 	'Peru', 	'Philippines', 	'Poland', 	'Portugal', 	'Puerto Rico', 	'Qatar', 	'Republic of San Marino', 	'Reunion', 	'Romania', 	'Russia', 	'Rwandese Republic', 	'Saint Helena and Ascension Island', 	'Saint Pierre et Miquelon', 	'San Marino', 	'Sao Tome e Principe', 	'Saudi Arabia', 	'Senegal', 	'Seychelles', 	'Sierra Leone', 	'Singapore', 	'Slovakia', 	'Slovenia', 	'Solomon Islands', 	'Somalia', 	'South Africa', 	'South Korea', 	'South Yemen', 	'Spain', 	'Sri Lanka', 	'St.Kitts and Nevis', 	'St.Lucia', 	'St.Vincent and the Grenadines', 	'Sudan', 	'Suriname', 	'Svalbard and Jan Mayen Islands', 	'Swaziland', 	'Sweden', 	'Switzerland', 	'Syria', 	'Ta(d)jikistan', 	'Taiwan', 	'Tanzania', 	'Thailand', 	'Togolese Republic', 	'Tokelau', 	'Tonga', 	'Trinidad and Tobago', 	'Tunisia', 	'Turkey', 	'Turkmenistan', 	'Turks & Caicos Islands', 	'Tuvalu', 	'US Virgin Islands', 	'Uganda', 	'Ukraine', 	'United Arab Emirates', 	'United Kingdom', 	'Uruguay', 	'USA', 	'Uzbekistan', 	'Vanuatu', 	'Vatican City', 	'Venezuela', 	'Vietnam', 	'Wallis and Futuna Islands', 	'Western Sahara', 	'Western Samoa', 	'Yugoslavia', 	'Zaire', 	'Zambia', 	'Zimbabwe'];

		var contry_tru_name = document.getElementById("Country").value;

		for(var i = 0; i < contry_name.length; i++ ){
			if(contry_tru_name == contry_name[i]){
				var phone_true_value = contry_phone[i];
			}
			else{
				null;
			}
		}
		document.getElementById("Phone").value = phone_true_value;
		$("#placeholder_move_Phone").animate({ marginTop: "-21px"},{duration:300, queue: false});
		$("#placeholder_move_Phone").animate({ fontSize: "11px"},{duration:300, queue: false});
		$("#Phone").animate({ marginTop: "8px"},{duration:300, queue: false});
		document.getElementById("placeholder_move_Phone").style.color = '#67D9B7';




	}

	function countrySelectClose(){
		document.getElementById("Country_sel").style.display = 'none';
		document.getElementById("country_open_icon").style.display = 'flex';
		document.getElementById("country_close_icon").style.display = 'none';
	}



	/*____________________________________________ CUSTOM CHECKBOX______________________*/

	$('#checkbox_icon_empty').on('click', function () {
		$('#confrim_click').prop('checked', true);
		document.getElementById("checkbox_icon_empty").style.display = 'none';
		document.getElementById("checkbox_icon_full").style.display = 'flex';
	})

	$('#checkbox_icon_error').on('click', function () {
		$('#confrim_click').prop('checked', true);
		document.getElementById("checkbox_icon_empty").style.display = 'none';
		document.getElementById("checkbox_icon_error").style.display = 'none';
		document.getElementById("checkbox_icon_full").style.display = 'flex';
	})

	$('#checkbox_icon_full').on('click', function () {
		$('#confrim_click').prop('checked', false);
		document.getElementById("checkbox_icon_empty").style.display = 'flex';
		document.getElementById("checkbox_icon_full").style.display = 'none';
	})



	/*____________________________________________ placeholder move______________________*/


	$(document).ready(function(){
		$("#firstName").on({
			mouseenter: function() {
				$("#placeholder_move_firstName").animate({ marginTop: "-21px"},{duration:300, queue: false});
				$("#placeholder_move_firstName").animate({ fontSize: "11px"},{duration:300, queue: false});
				$(this).animate({ marginTop: "8px"},{duration:300, queue: false});
				document.getElementById("placeholder_move_firstName").style.color = '#67D9B7';
			}
		})
		$("#secondName").on({
			mouseenter: function() {
				$("#placeholder_move_secondName").animate({ marginTop: "-21px"},{duration:300, queue: false});
				$("#placeholder_move_secondName").animate({ fontSize: "11px"},{duration:300, queue: false});
				$(this).animate({ marginTop: "8px"},{duration:300, queue: false});
				document.getElementById("placeholder_move_secondName").style.color = '#67D9B7';
			}
		})
		$("#Country").on({
			mouseenter: function() {
				$("#placeholder_move_Country").animate({ marginTop: "-21px"},{duration:300, queue: false});
				$("#placeholder_move_Country").animate({ fontSize: "11px"},{duration:300, queue: false});
				$(this).animate({ marginTop: "8px"},{duration:300, queue: false});
				document.getElementById("placeholder_move_Country").style.color = '#67D9B7';
			}
		})
		$("#Phone").on({
			mouseenter: function() {
				$("#placeholder_move_Phone").animate({ marginTop: "-21px"},{duration:300, queue: false});
				$("#placeholder_move_Phone").animate({ fontSize: "11px"},{duration:300, queue: false});
				$(this).animate({ marginTop: "8px"},{duration:300, queue: false});
				document.getElementById("placeholder_move_Phone").style.color = '#67D9B7';
			}
		})
		$("#Password").on({
			mouseenter: function() {
				$("#placeholder_move_Password").animate({ marginTop: "-21px"},{duration:300, queue: false});
				$("#placeholder_move_Password").animate({ fontSize: "11px"},{duration:300, queue: false});
				$(this).animate({ marginTop: "8px"},{duration:300, queue: false});
				document.getElementById("placeholder_move_Password").style.color = '#67D9B7';
			}
		})
		$("#ConfirmPassword").on({
			mouseenter: function() {
				$("#placeholder_move_ConfirmPassword").animate({ marginTop: "-21px"},{duration:300, queue: false});
				$("#placeholder_move_ConfirmPassword").animate({ fontSize: "11px"},{duration:300, queue: false});
				$(this).animate({ marginTop: "8px"},{duration:300, queue: false});
				document.getElementById("placeholder_move_ConfirmPassword").style.color = '#67D9B7';
			}
		})
		$("#Email").on({
			mouseenter: function() {
				$("#placeholder_move_Email").animate({ marginTop: "-21px"},{duration:300, queue: false});
				$("#placeholder_move_Email").animate({ fontSize: "11px"},{duration:300, queue: false});
				$(this).animate({ marginTop: "8px"},{duration:300, queue: false});
				document.getElementById("placeholder_move_Email").style.color = '#67D9B7';
			}
		})

	});


	/*____________________________________Form animarion GSAP__________________*/

	const tl1 = new TimelineMax()

	const tl2 = new TimelineMax()

	tl2.from('#form_field_firstName', 0.5, {y : '110%', delay:0.3})
	tl2.from('#form_field_secondName', 0.5, {y : '110%', delay:0.3})
	tl2.from('#form_field_Country', 0.5, {y : '110%', delay:0.3})
	tl2.from('#form_field_Phone', 0.5, {y : '110%', delay:0.3})
	tl2.from('#form_field_Password', 0.5, {y : '110%', delay:0.3})
	tl2.from('#form_field_ConfirmPassword', 0.5, {y : '110%', delay:0.3})
	tl2.from('#form_field_Email', 0.5, {y : '110%', delay:0.3})
	tl2.from('#form_field_confrim_click', 0.5, {y : '110%', delay:0.3})
	tl2.from('#form-field_button', 0.5, {y : '110%', delay:0.3})
	

		
	ScrollTrigger.create({

		animation: tl2,
		trigger: '#trigger_form_field_ConfirmPassword',
		start: 'bottom bottom',
	});





function slowScroll (id) {
    var offset = 0;
    $('html, body').animate ({
      scrollTop: $(id).offset ().top - offset
    }, 100);
    return false;
  }
