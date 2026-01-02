function signup() {
    let user = document.getElementById("signUser").value;
    let email = document.getElementById("signEmail").value;
    let pass = document.getElementById("signPass").value;

    if (user === "" || email === "" || pass === "") {
        document.getElementById("signMsg").innerHTML = "❌ All fields required";
    } else {
        document.getElementById("signMsg").innerHTML = "✅ Signup Successful!";
    }
}

function login() {
    let user = document.getElementById("loginUser").value;
    let pass = document.getElementById("loginPass").value;

    if (user === "admin" && pass === "1234") {
        document.getElementById("loginMsg").innerHTML = "🎉 Login Successful!";
    } else {
        document.getElementById("loginMsg").innerHTML = "❌ Invalid Credentials";
    }
}

function playGame() {
    document.getElementById("gameMsg").innerHTML =
        "🚀 Game Loading... Get Ready!";
}
