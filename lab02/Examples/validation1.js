

function validateForm() {
    var firstname = document.forms["form1"]["firstname"].value;
    var lastname = document.forms["form1"]["lastname"].value;
    var gender = document.forms["form1"]["gender"].value;
    var state = document.forms["form1"]["state"].value;
    var validFirstname = validateFirstname(firstname);
    var validLastname = validateLastname(lastname);
    var vaildGender = validateGender(gender);
    var validState = validateState(state);

    if (validFirstname==false || validLastname==false || validGender==false || validState==false) {
	return false;
    }

}

function validateFirstname(firstname) {    
    if (firstname == "") {
	alert("Please enter first name.");
	document.getElementById('firstname-wrong').style.display='inline';
	return false;
    }
    else if ( /[^a-zA-Z0-9]/.test(firstname)) {
	alert("First name must contain only letters or numbers");
	document.getElementById('firstname-wrong').style.display='inline';
	return false;
    }
    else {
	document.getElementById('firstname-correct').style.display='inline';
	return true;
    }
}

function validateLastname(lastname) {
    if (lastname == "") {
	alert("Please enter last name.");
	document.getElementById('lastname-wrong').style.display='inline'
	return false;
    }
    else if ( /[^a-zA-Z0-9]/.test(lastname)) {
	alert("Last name must contain only letters or numbers");
	document.getElementById('lastname-wrong').style.display='inline'
	return false;
    }
    else {
	document.getElementById('lastname-correct').style.display='inline'
	return true;
    }

}

function validateGender(gender) {
    if (gender ==  "") {
	alert("Please select gender.");
	document.getElementById('gender-wrong').style.display='inline'
	return false;
    }

    document.getElementById('gender-correct').style.display='inline'
    return true;
}

function validateState(state) {
    if (state == "") {
	alert("Please select state.");
	document.getElementById('state-wrong').style.display='inline'
	return false;
    }

    if (state == "california") {
	document.cookie="state=California";
    }
    else if (state == "florida") {
	document.cookie="state=Florida";
    }
    else if (state == "newyork") {
	document.cookie="state=New York";
    }
    else if (state == "texas") {
	document.cookie="state=Texas";
    }
    else if (state == "hawaii") {
	document.cookie="state=Hawaii";
    }
    else if (state == "washington") {
	document.cookie="state=Washington";
    }
    else if (state == "colorado") {
	document.cookie="state=Colorado";
    }
    else if (state == "virginia") {
	document.cookie="state=Virginia";
    }
    else if (state == "iowa") {
	document.cookie="state=Iowa";
    }
    else if (state == "arizona")  {
	document.cookie="state=Arizona";
    }
    
    
    document.getElementById('state-correct').style.display='inline'
    return true;
}
