function enter() {
    password = "Cheese1203$"
    guess = document.getElementById("password_input").value;

    if (password == guess) {
        window.location = "admin.html"
        console.log("logged in as admin");
    }
    else {
        console.log("incorrect password");
        console.log(password);
        document.getElementById("incorrect").innerHTML = "Incorrect Password";
        document.getElementById("incorrect").style.color = "red";
    }
}