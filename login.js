function redirectToPage(pagename) {
  var loginPageUrl = `${pagename}`;
  window.location.href = loginPageUrl;
}

async function login() {
  const email = document.getElementById("Nemail").value;
  const password = document.getElementById("Npassword").value;

  try {
    const response = await fetch("https://loginpage-olv8.onrender.com/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      const responseData = await response.json();
      localStorage.setItem("token", responseData.token);
      alert("Login successful!");
      setTimeout(() => {
        redirectToPage("./Home.html");
      }, 2000);
    } else {
      alert("Login failed. Please check your credentials.");
    }
  } catch (error) {
    console.error("Error during login:", error);
    alert("An unexpected error occurred. Please try again later.");
  }
}

document.getElementById("Nlogin-id").addEventListener("click", login);
