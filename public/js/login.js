const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", async function (event) {

    event.preventDefault();

    const formData = {
        username: loginForm.username.value.toLowerCase(),
        password: loginForm.password.value
    };

    const options = {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        credentials: "include",
        body: JSON.stringify(formData)
    }

    const response = await fetch("/login", options);
    const status = response.status;

    if (status === 200) {
        window.location.href = "/"
        return;
    }

    const error = document.getElementById("auth-err");
    switch (status) {
        case 401:
            error.innerHTML = "The username and/or password that you entered is incorrect!";
            break;
        case 500:
            error.innerHTML = "Unable to login at this time. Please try again later...";
            break;
        default:
            break;
    }
    error.classList.add("login-error");
    error.classList.remove("hidden");
});