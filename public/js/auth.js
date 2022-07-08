const registerForm = document.getElementById("registerForm");

const titleCaseName = function (name) {
    let formattedName = name.toLowerCase().split("");
    formattedName[0] = formattedName[0].toUpperCase();
    formattedName = formattedName.join("");
    return(formattedName);
}

registerForm.addEventListener("submit", async function (event) {

    event.preventDefault();

    const formData = {
        firstName: titleCaseName(registerForm.firstName.value),
        lastName: titleCaseName(registerForm.lastName.value),
        username: registerForm.username.value.toLowerCase(),
        password: registerForm.password.value
    },
    options = {
        method: "POST",
        headers:{"Content-Type": "application/json"},
        body: JSON.stringify(formData)
    };

    const response = await fetch("/register", options);
    const status = response.status;

    switch (status) {
        case 500:
            window.location.href = "/register";
            break;

        case 409:
            const emailInput = document.getElementById("registerEmail"),
            error = document.getElementById("auth-err"); 
    
            emailInput.setAttribute("style", "border-color: #F0240A;");
            error.classList.remove("hidden");
            error.classList.add("register-error");
            break;

        default:
            window.location.href = "/login";
    }
});