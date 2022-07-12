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

    const response = await fetch("/register", options),
    status = response.status;

    if (status === 201) {
        window.location.href = "/login";
        return;
    }

    const error = document.getElementById("auth-err");
    switch (status) {
        case 500:
            error.innerHTML = "Unable to register you at this time. Please try again later..."
            break;
        case 409:
            const emailInput = document.getElementById("registerEmail");

            emailInput.setAttribute("style", "border-color: #F0240A;");
            error.innerHTML = "User already exists!";
            break;
        default:
            break;
    }
    error.classList.add("register-error"); 
    error.classList.remove("hidden"); 
});