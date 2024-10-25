
function validateForm() {

    var username = document.getElementById("username").value;

    var email = document.getElementById("email").value;

    var phone = document.getElementById("phone").value;

    var password = document.getElementById("password").value;

    var error = document.getElementById("error");

    var text = "";

    if (username.length < 4) {
        text = "Please Enter a Valid Username";
        error.innerHTML = text;
        return false;
    }
    else if (email.indexOf("@") && email.length < 12) {
        text = "Please Enter a Valid Email";
        error.innerHTML = text;
        return false;
    }


    else if (isNaN(phone) || phone.length < 7) {
        text = "Please Enter a Valid Phone";
        error.innerHTML = text;
        return false;
    }

    else if (password.length < 4) {
        text = "Please Enter a Valid Password";
        error.innerHTML = text;
        return false;
    }
    else {
        alert("Done");
        return true;
    }
}

let content = document.getElementsByTagName('body')[0];
let darkMode = document.getElementById('darkmode');
darkMode.addEventListener('click', function () {
    darkMode.classList.toggle('active');
    content.classList.toggle('night');
})