
function studentData() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    if(email != "user@gmail.com" && password != "123456") {
        alert("wrong email id");
        return false;
    }
    else {
        window.location.href="./studentData.html";
        return true;
    }
}

function pswCheck() {
    var psw1 = document.getElementById("confirm_password").value;
    var psw2 = document.getElementById("password").value;
    var email = document.getElementById("email").value;

    if(psw1 !="123456"  && psw2 != "123456" && email != "user@gmail.com") {
        alert("Your passwords do not match. and mail id is wrong");
        document.getElementById("confirm_password").style.borderColor = "red";
        return false;
    }
    else {
        document.getElementById("confirm_password").style.borderColor = none;
        return true;
    }
}

function login() {
    var email = document.getElementById("email").value;
    var psw2 = document.getElementById("password").value;
    var email = document.getElementById("email").value;

    if(psw1 !="123456"  && psw2 != "123456" && email != "user@gmail.com") {
        alert("Your passwords do not match. and mail id is wrong");
        document.getElementById("confirm_password").style.borderColor = "red";
        return false;
    }
    else {
        window.location.href="./loginForm.html";
        return true;
    }
}


//dynamically populate table data from form
function save() {
    var form = document.getElementById("form");
    var id = document.getElementById("studentId").value;
    var name = fodocument.getElementByIdrm("studentName").value;
    var email = document.getElementById("email").value;
    var course = document.getElementById("course").value;
    var year = document.getElementById("en-year").value;
    var city = document.getElementById("city").value;
    var country = document.getElementById("country").value;
    
    var new_row = "<tr><td>" + id + "</td><td>" + name + "</td><td>" + email + "</td><td>" + course + "</td><td>" + year + "</td><td>" + city + "</td><td>" + country + "</td><td>" + "</td><td>" + "</td></tr>";
    console.log(new_row);

    var tbody = document.getElementById("tbody")
    tbody.append(new_row);
}
