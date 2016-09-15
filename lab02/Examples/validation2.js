function validateForm() {
    var email = document.forms["address_form"]["email"].value;
    var phone = document.forms["address_form"]["phone"].value;
    var address = document.forms["address_form"]["address"].value;
    return validateEmail(email) && validateAddress(address) && validatePhone(phone);
}


function validateEmail(emailID)
{
    var atpos = emailID.indexOf("@");
    var dotpos = emailID.lastIndexOf(".");
    var before_at = emailID.substr(0,atpos);
    var after_at = emailID.substr(atpos+1,dotpos);
    if (atpos < 1 || ( dotpos - atpos < 2 ))
    {
        alert("Please enter correct email");
        document.forms["address_form"]["email"].focus() ;
        return false;
    }
    else if (!(/^[a-z0-9]+$/i.test(before_at) && /^[a-z\.0-9]+$/i.test(after_at))){
        alert("Please enter correct email");
        document.forms["address_form"]["email"].focus();
        return false;
    }
    else if (dotpos == emailID.length-1){
        alert("Please enter correct email");
        document.forms["address_form"]["email"].focus();
        return false;
    }
    return( true );

}


function validateAddress(address){
    commapos = address.indexOf(",");
    if (commapos < 2 || address.length <= commapos+2){
        alert("Please enter correct Address");
        document.forms["address_form"]["address"].focus() ;
        return false;
    }
    return true;
}


function validatePhone(phone){
    return true;
}