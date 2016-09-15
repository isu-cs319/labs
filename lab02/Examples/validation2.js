google.charts.load('upcoming', {'packages': ['geomap']});
google.charts.setOnLoadCallback(drawMap);

function validateForm() {
    var email = document.forms["address_form"]["email"].value;
    var phone = document.forms["address_form"]["phone"].value;
    var address = document.forms["address_form"]["address"].value;
    if (validateEmail(email) && validateAddress(address) && validatePhone(phone)){
        // Store
        localStorage.setItem("address", address);
        return true;
    }
    return false;
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
    if (phone == ""){
        return true;
    }
    var numbers = phone.split("-",3);
    if (numbers.length == 0 && isNaN(phone)){
        alert("Please enter correct Phone");
        document.forms["address_form"]["phone"].focus();
        return false;
    }
    var sum_len = 0;
    for (var i=0; i< numbers.length; i++ ){
        if (isNaN(numbers[i])){
            alert("Please enter correct Phone");
            document.forms["address_form"]["phone"].focus();
            return false;
        }
        sum_len += numbers[i].length;
    }
    if (sum_len == 10){
        return true;
    }
    else{
        if (phone.length != 10){
            alert("Please enter correct Phone");
            document.forms["address_form"]["phone"].focus();
        }
        return phone.length == 10;
    }
}

function getFromLocalStorage(key){
    return localStorage.getItem(key);
}

function drawMap() {
    var address = getFromLocalStorage("address");
    var addressArray = address.split(",");
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