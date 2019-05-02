
//to add new table row
function addFunction() {
    var table = document.getElementById("tblStudent");
    //   var table = document.getElementsByTagName("table");
    var row = table.insertRow(1);
    var id = row.insertCell(0);
    var name = row.insertCell(1);
    var email = row.insertCell(2);
    var clas = row.insertCell(3);
    var date = row.insertCell(4);
    var city = row.insertCell(5);
    var country = row.insertCell(6);
    var ed = row.insertCell(7);
    var del = row.insertCell(8);
    id.innerHTML = "120";
    name.innerHTML = document.getElementById('fname').value + ' ' + document.getElementById('mname').value + ' ' + document.getElementById('lname').value;
    email.innerHTML = document.getElementById('mail').value;
    clas.innerHTML = '';
    date.innerHTML = sysDate();
    city.innerHTML = '';
    country.innerHTML = '';
    ed.innerHTML = '<button id="btnEdit1" class="btn btn-sm btn-primary" onClick="editFunction1()">Edit</button>';
    del.innerHTML = '<button id="btnDelete1" class="btn btn-sm btn-primary" onClick="delFunction1()">Delete</button>';

}

// function to check login credentials in home page
function loginFunction() {
    var em = document.getElementById("email").value;
    var pass = document.getElementById("password").value;
    var fr = document.getElementsByName('frmLogin');

    if ((em == "nayana.2301@gmail.com" && pass == "123456") ||
        (em == "user@gmail.com" && pass == "123456") ||
        (em == "ann@gmail.com" && pass == "123") ||
        (em == "joe@gmail.com" && pass == "456") ||
        (em == "manu@gmail.com" && pass == "111") ||
        (em == "mary@gmail.com" && pass == "123")) {
        document.location = 'dashboard.html';
        //   alert(" Login Successful!");
        fr.reset();  // reset form data
    }
    else if (em == "") {
        alert("Email cannot be empty");
        return false;
    }
    else if (pass == "") {
        alert("Password cannot be empty");
        return false;
    }
    else {
        alert("Credentials do not match. Please register if new user!");
        fr.reset();
        //   return false;
    }
}

//function to check if email is empty or valid during resgistration
function checkEmail() {
    var em = document.getElementById("mail").value;
    if (em == "") {
        alert("Email cannot be empty");
        return false;
    }
    else if (!(em.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/))) {
        alert("Invalid Email id");
        return false;
    }
    else {
        return true;
    }
}

//function to check if mobile number is empty or valid during resgistration
function checkMobile() {
    var mob = document.getElementById("mobile").value;
    if (mob == "") {
        alert("Mobile number cannot be empty");
        return false;
    }
    else if (!(mob.match(/^\d{10}$/))) {
        alert("Invalid Mobile number");
        return false;
    }
    else {
        return true;
    }
}

//function to check valid password during resgistration
function checkPassword() {
    var pw = document.getElementById("pword").value;

    if (pw == "") {
        alert("Password cannot be empty!");
        //   return false;
    }
    else if (pw.length < 8 || pw.length > 15) {
        alert("Password cannot be less than 8 or greater than 15 characters!");
        return false;
    }
    else if ((pw.search(/[0-9]+/) == -1)) {
        alert("Password must contain atleast one digit!");
        return false;
    }
    else if ((pw.search(/[a-z]+/) == -1)) {
        alert("Password must contain atleast one lowercase letter!");
        return false;
    }
    else if ((pw.search(/[A-Z]+/) == -1)) {
        alert("Password must contain atleast one uppercase letter!");
        return false;
    }
    else {
        return true;
    }
}


//function to check confirm password during resgistration
function confirmPassword() {
    var pw = document.getElementById("pword").value;
    var con = document.getElementById("confirm").value;

    if (con == "") {
        alert("Confirm Password cannot be empty!");
        return false;
    }
    else if (pw != con) {
        alert("Confirm password is not same as password!");
        return false;
    }
    else {
        return true;
    }
}


//function to check first name during resgistration
function checkFirst() {
    var fn = document.getElementById("fname").value;

    if (fn == "") {
        alert("First name cannot be empty");
        return false;
    }
    else {
        return true;
    }
}

//function to check last name during resgistration
function checkLast() {
    var ln = document.getElementById("lname").value;

    if (ln == "") {
        alert("Last name cannot be empty");
        return false;
    }
    else {
        return true;
    }
}

// registration button click function
function registrationFunction() {
  var fr = document.getElementsByName('frmRegister')[0];

    if (checkFirst() && checkLast() && checkEmail() && checkMobile() && checkPassword() && confirmPassword()) {
        //    addFunction();
        document.location = 'home.html';  // redirect to home page after registration
        alert(" Registration Successful!");
        fr.reset();  // reset form data
    }
}

// logout button click function
function logoutFunction() {
    document.location = 'home.html'; // redirect to home page after logout
}

// clear button click function
function clearFunction() {
    document.getElementById('frmDashboard').reset();
}

//function to  delete first row
function delFunction1() {
    var r = confirm("Are you sure you want to delete this record?");
    if (r == true) {
        if (document.getElementById('btnDelete1').onclick) {
            document.getElementById("tblStudent").deleteRow(1);
        }
    }
}

//function to delete second row
function delFunction2() {
    var r = confirm("Are you sure you want to delete this record?");
    if (r == true) {
        if (document.getElementById('btnDelete2').onclick) {
            document.getElementById("tblStudent").deleteRow(2);
        }

    }
}

//function to delete third row
function delFunction3() {
    var r = confirm("Are you sure you want to delete this record?");
    if (r == true) {
        if (document.getElementById('btnDelete3').onclick) {
            document.getElementById("tblStudent").deleteRow(3);
        }

    }
}

//function to delete fourth row
function delFunction4() {
    var r = confirm("Are you sure you want to delete this record?");
    if (r == true) {
        if (document.getElementById('btnDelete4').onclick) {
            document.getElementById("tblStudent").deleteRow(4);
        }
    }
}

//function to edit first row
function editFunction1() {

    if (document.getElementById('btnEdit1').onclick) {
        var x = document.getElementById("tblStudent").rows[1].cells;

        /*  x[0].innerHTML = "1";
          x[1].innerHTML = "abc";
          x[2].innerHTML = "abc@gmail.com";
          x[3].innerHTML = "QA";
          x[4].innerHTML = "04/04/2019";
          x[5].innerHTML = "Dublin";
          x[6].innerHTML = "USA";   */

        document.getElementById('dashid').value = x[0].innerHTML;
        document.getElementById("dashname").value = x[1].innerHTML;
        document.getElementById("dashemail").value = x[2].innerHTML;
        document.getElementById("dashclass").value = x[3].innerHTML;
        document.getElementById("dashdate").value = x[4].innerHTML;
        document.getElementById("dashcity").value = x[5].innerHTML;
        document.getElementById("dashcountry").value = x[6].innerHTML;
    }
}

//function to edit second row
function editFunction2() {
    if (document.getElementById('btnEdit2').onclick) {
        var x = document.getElementById("tblStudent").rows[2].cells;
        document.getElementById('dashid').value = x[0].innerHTML;
        document.getElementById("dashname").value = x[1].innerHTML;
        document.getElementById("dashemail").value = x[2].innerHTML;
        document.getElementById("dashclass").value = x[3].innerHTML;
        document.getElementById("dashdate").value = x[4].innerHTML;
        document.getElementById("dashcity").value = x[5].innerHTML;
        document.getElementById("dashcountry").value = x[6].innerHTML;
    }
}
//function to edit third row
function editFunction3() {
    if (document.getElementById('btnEdit3').onclick) {
        var x = document.getElementById("tblStudent").rows[3].cells;
        document.getElementById('dashid').value = x[0].innerHTML;
        document.getElementById("dashname").value = x[1].innerHTML;
        document.getElementById("dashemail").value = x[2].innerHTML;
        document.getElementById("dashclass").value = x[3].innerHTML;
        document.getElementById("dashdate").value = x[4].innerHTML;
        document.getElementById("dashcity").value = x[5].innerHTML;
        document.getElementById("dashcountry").value = x[6].innerHTML;
    }
}
//function to edit fourth row
function editFunction4() {
    if (document.getElementById('btnEdit4').onclick) {
        var x = document.getElementById("tblStudent").rows[4].cells;
        document.getElementById('dashid').value = x[0].innerHTML;
        document.getElementById("dashname").value = x[1].innerHTML;
        document.getElementById("dashemail").value = x[2].innerHTML;
        document.getElementById("dashclass").value = x[3].innerHTML;
        document.getElementById("dashdate").value = x[4].innerHTML;
        document.getElementById("dashcity").value = x[5].innerHTML;
        document.getElementById("dashcountry").value = x[6].innerHTML;
    }
}

//function to edit and save first row
function saveFunction1() {
       var table = document.getElementById("tblStudent");
       var row = table.insertRow(table.rows.length);
       var id = row.insertCell(0);
       var name = row.insertCell(1);
       var email = row.insertCell(2);
       var clas = row.insertCell(3);
       var date = row.insertCell(4);
       var city = row.insertCell(5);
       var country = row.insertCell(6);
       var ed = row.insertCell(7);
       var del = row.insertCell(8);
       id.innerHTML = document.getElementById('dashid').value;
       name.innerHTML = document.getElementById('dashname').value;
       email.innerHTML = document.getElementById('dashemail').value;
       clas.innerHTML = document.getElementById('dashclass').value;
       date.innerHTML = document.getElementById('dashdate').value;
       city.innerHTML = document.getElementById('dashcity').value;
       country.innerHTML = document.getElementById('dashcountry').value;
       ed.innerHTML = '<button id="btnEdit1" class="btn btn-sm btn-primary" onClick="editFunction1()">Edit</button>';
       del.innerHTML = '<button id="btnDelete1" class="btn btn-sm btn-primary" onClick="delFunction1()">Delete</button>';  
}

//function to edit and save second row
function saveFunction2() {
      var table = document.getElementById("tblStudent");
       var row = table.insertRow(table.rows.length);
       var id = row.insertCell(0);
       var name = row.insertCell(1);
       var email = row.insertCell(2);
       var clas = row.insertCell(3);
       var date = row.insertCell(4);
       var city = row.insertCell(5);
       var country = row.insertCell(6);
       var ed = row.insertCell(7);
       var del = row.insertCell(8);
       id.innerHTML = document.getElementById('dashid').value;
       name.innerHTML = document.getElementById('dashname').value;
       email.innerHTML = document.getElementById('dashemail').value;
       clas.innerHTML = document.getElementById('dashclass').value;
       date.innerHTML = document.getElementById('dashdate').value;
       city.innerHTML = document.getElementById('dashcity').value;
       country.innerHTML = document.getElementById('dashcountry').value;
       ed.innerHTML = '<button id="btnEdit1" class="btn btn-sm btn-primary" onClick="editFunction1()">Edit</button>';
       del.innerHTML = '<button id="btnDelete1" class="btn btn-sm btn-primary" onClick="delFunction1()">Delete</button>';
}

//function to edit and save third row
function saveFunction3() {
       var table = document.getElementById("tblStudent");
       var row = table.insertRow(table.rows.length);
       var id = row.insertCell(0);
       var name = row.insertCell(1);
       var email = row.insertCell(2);
       var clas = row.insertCell(3);
       var date = row.insertCell(4);
       var city = row.insertCell(5);
       var country = row.insertCell(6);
       var ed = row.insertCell(7);
       var del = row.insertCell(8);
       id.innerHTML = document.getElementById('dashid').value;
       name.innerHTML = document.getElementById('dashname').value;
       email.innerHTML = document.getElementById('dashemail').value;
       clas.innerHTML = document.getElementById('dashclass').value;
       date.innerHTML = document.getElementById('dashdate').value;
       city.innerHTML = document.getElementById('dashcity').value;
       country.innerHTML = document.getElementById('dashcountry').value;
       ed.innerHTML = '<button id="btnEdit1" class="btn btn-sm btn-primary" onClick="editFunction1()">Edit</button>';
       del.innerHTML = '<button id="btnDelete1" class="btn btn-sm btn-primary" onClick="delFunction1()">Delete</button>';
}

//function to edit and save fourth row
function saveFunction4() {
    var table = document.getElementById("tblStudent");
    var row = table.insertRow(table.rows.length);
    var id = row.insertCell(0);
    var name = row.insertCell(1);
    var email = row.insertCell(2);
    var clas = row.insertCell(3);
    var date = row.insertCell(4);
    var city = row.insertCell(5);
    var country = row.insertCell(6);
    var ed = row.insertCell(7);
    var del = row.insertCell(8);
    id.innerHTML = document.getElementById('dashid').value;
    name.innerHTML = document.getElementById('dashname').value;
    email.innerHTML = document.getElementById('dashemail').value;
    clas.innerHTML = document.getElementById('dashclass').value;
    date.innerHTML = document.getElementById('dashdate').value;
    city.innerHTML = document.getElementById('dashcity').value;
    country.innerHTML = document.getElementById('dashcountry').value;
    ed.innerHTML = '<button id="btnEdit1" class="btn btn-sm btn-primary" onClick="editFunction1()">Edit</button>';
    del.innerHTML = '<button id="btnDelete1" class="btn btn-sm btn-primary" onClick="delFunction1()">Delete</button>';
}

function saveFunction() {
    if (document.getElementById('btnEdit1').onclick) {
        saveFunction1();
    }
    else if (document.getElementById('btnEdit2').onclick) {
        saveFunction2();
    }
    else if (document.getElementById('btnEdit3').onclick) {
        saveFunction3();
    }
    else if (document.getElementById('btnEdit4').onclick) {
        saveFunction4();
    }

   /*
    if (document.getElementById('btnEdit1').onclick) {
        var x = document.getElementById("tblStudent").rows[1].cells;
        x[0].innerHTML = document.getElementById('dashid').value;
        x[1].innerHTML = document.getElementById('dashname').value;
        x[2].innerHTML = document.getElementById('dashemail').value;
        x[3].innerHTML = document.getElementById('dashclass').value;
        x[4].innerHTML = document.getElementById('dashdate').value;
        x[5].innerHTML = document.getElementById('dashcity').value;
        x[6].innerHTML = document.getElementById('dashcountry').value;
    }
    */

}
