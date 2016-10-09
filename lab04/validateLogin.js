
function validateLogin() {
    var username = document.forms["loginForm"]["username"].value;
    var password = document.forms["loginForm"]["password"].value;
    var admin = validateAdmin(username, password);
    var undergrad = validateUndergrad(username);

    if (admin==false && undergrad==false) {
	alert("Error. Please re-enter login credentials.");
	return false;
    }
    var user = {
        name: username,
        password: password,
        borrowed1:"",
        borrowed2:""
    };
    localStorage.setItem("user",JSON.stringify(user));
}

function validateAdmin(username, password) {
    if (username == "admin" && password == "admin") {
	return true;
    }
    else {
	return false;
    }
}

function validateUndergrad(username) {
    if (username.charAt(0) == 'U') {
	return true;
    }
    else {
	return false;
    }
}
