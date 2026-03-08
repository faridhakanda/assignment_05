






// Login function javascript code
// for user authentication with 
// user-name and user-password
const loginBtn = document.getElementById('login-btn');
loginBtn.addEventListener('click', () => {
    const userName = document.getElementById('user-name');
    const userPassword = document.getElementById('user-password');
    const user = userName.value;
    const password = userPassword.value;
    // console.log(user, password);
    if (user == "admin" && password == "admin123") {
        console.log(user, password);
        console.log("User is authenticated!");
    } else {
        alert("Login is failed!");
    }
});

