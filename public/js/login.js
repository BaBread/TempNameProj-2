
const loginFormHandler = async (event) => {
  console.log("test console", event);
  // Stop the browser from submitting the form so we can do so with JavaScript
  event.preventDefault();

  // Gather the data from the form elements on the page
  const email = document.querySelector("#email-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();

  if (email && password) {
    // Send the e-mail and password to the server
    const response = await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      console.log("Failed to log in");
    }
  }
};




window.onload=function(){

  let loginForm = document.querySelector(".login-form");


  loginForm.addEventListener('submit', loginFormHandler);
};
