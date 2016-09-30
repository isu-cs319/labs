function validateForm() {
    var email = document.forms["address_form"]["email"].value;
    var phone = document.forms["address_form"]["phone"].value;
    var address = document.forms["address_form"]["address"].value;
    var validEmail = validateEmail(email);
    var validAddress = validateAddress(address);
    var validPhone = validatePhone(phone);

    document.cookie = "state=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
    
    if (validEmail && validAddress && validPhone){
        // Make images visible
         makeVisible("verify-box","inline-block");
        // Store
        localStorage.setItem("address", address);
        return true;
    }
    
    // Make images visible
    makeVisible("verify-box","inline-block");
    return false; //http://stackoverflow.com/questions/9686538/align-labels-in-form-next-to-input
}

function makeVisible(divClass, displayVal){
    var verifiers = document.getElementsByClassName(divClass);
    for(var i=0; i < verifiers.length;i++){
        verifiers[i].style.display=displayVal;
    }
}


function validateEmail(emailID)
{
    var atpos = emailID.indexOf("@");
    var dotpos = emailID.lastIndexOf(".");
    var before_at = emailID.substr(0,atpos);
    var after_at = emailID.substr(atpos+1,dotpos);
    if (atpos < 1 || ( dotpos - atpos < 2 ))
    {
        return verificationFailed("email");
    }
    else if (!(/^[a-z0-9]+$/i.test(before_at) && /^[a-z\.0-9]+$/i.test(after_at))){
        return verificationFailed("email");
    }
    else if (dotpos == emailID.length-1){
        return verificationFailed("email");
    }
    document.getElementById("email-verify-box").src= "../correct.png";
    return( true );

}


function validateAddress(address){
    commapos = address.indexOf(",");
    if (commapos < 2 || address.length <= commapos+2){
        return verificationFailed("address");
    }
    document.getElementById("address-verify-box").src= "../correct.png";
    return true;
}


function validatePhone(phone){
    if (phone == ""){
        document.getElementById("phone-verify-box").src= "../correct.png";
        return true;
    }
    var numbers = phone.split("-",3);
    if (numbers.length == 0 && isNaN(phone)){
        return verificationFailed("phone");
    }
    var sum_len = 0;
    for (var i=0; i< numbers.length; i++ ){
        if (isNaN(numbers[i])){
            return verificationFailed("phone");
        }
        sum_len += numbers[i].length;
    }
    if (sum_len == 10){
        document.getElementById("phone-verify-box").src= "../correct.png";
        return true;
    }
    else{
        if (phone.length != 10){
           return verificationFailed("phone");
        }
        else{
            document.getElementById("phone-verify-box").src= "../correct.png";
            return true;
        }
    }
}

function verificationFailed(field){
    document.getElementById(field+"-verify-box").src= "../wrong.png";
    alert("Please enter correct "+field);
    document.forms["address_form"][field].focus();
    return false;
}

function getFromLocalStorage(key){
    return localStorage.getItem(key);
}
function drawMap() {
    var address = getFromLocalStorage("address");
    var addressArray = address.split(",");  // not needed?
    var data = google.visualization.arrayToDataTable([
        ["street_address"],
        [address]
    ]);

    var options = {};
    options['region'] = 'US';
    options['colors'] = [0xFF8747, 0xFFB581, 0xc06000]; //orange colors
    options['dataMode'] = 'markers';
    options['showLegend'] = false;

    var container = document.getElementById("map_canvas");
    var geomap = new google.visualization.GeoMap(container);
    geomap.draw(data, options);
};
