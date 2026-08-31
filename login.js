function showRegister() {

        document.getElementById("loginForm").style.display = "none";

        document.getElementById("registerForm").style.display = "block";

        document.getElementById("subtitle").innerHTML = "Create your account";
    }


    function showLogin() {

        document.getElementById("registerForm").style.display = "none";

        document.getElementById("loginForm").style.display = "block";

        document.getElementById("subtitle").innerHTML = "Welcome back";
    }


    document.getElementById("registerForm").addEventListener("submit", function(event) {

        event.preventDefault();

        alert("Registration Successful!");

        showLogin();

    });
    

    function showRegister() {
        document.getElementById("loginForm").style.display = "none";
        document.getElementById("registerForm").style.display = "block";
    }

    function showLogin() {
        document.getElementById("registerForm").style.display = "none";
        document.getElementById("loginForm").style.display = "block";
    }

    document.getElementById("registerForm").addEventListener("submit", function(event) {
        event.preventDefault();

        alert("Registration Successful!");

        showLogin();
    });

    document.getElementById("loginForm").addEventListener("submit", function(event) {
        event.preventDefault();

        alert("Login Successful!");

      
        window.location.href = "dashboad.html";
    });



    document.getElementById("loginForm").addEventListener("submit", function(event) {

        event.preventDefault();

        alert("Login Successful!");

    });
    