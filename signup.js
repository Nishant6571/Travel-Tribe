function redirectToPage(pagename) {
  var loginPageUrl = `${pagename}`;
  window.location.href = loginPageUrl;
}

async function signup() {
  const firstName = document.getElementById("NFname").value;
  const lastName = document.getElementById("NLname").value;
  const age = document.getElementById("Nage").value;
  const mobileNumber = document.getElementById("Nmobnumber").value;
  const username = document.getElementById("Nusername").value;
  const email = document.getElementById("Nemail").value;
  const password = document.getElementById("Npassword").value;

  const user = {
    firstName,
    lastName,
    age,
    mobileNumber,
    username,
    email,
    password,
  };

  try {
    const checkEmailResponse = await fetch(
      "https://loginpage-olv8.onrender.com/users"
    );
    const users = await checkEmailResponse.json();
    const emailExists = users.some((user) => user.email === email);

    if (emailExists) {
      alert("Email is already registered. Please use a different email.");
      return;
    }

    const response = await fetch("https://loginpage-olv8.onrender.com/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });

    if (response.ok) {
      alert("Registration successful!");
    } else {
      alert("An unexpected error occurred. Please try again later.");
    }
  } catch (error) {
    console.error("Error during signup:", error);
    alert("An unexpected error occurred. Please try again later.");
  }
}

document.getElementById("Nsign-id").addEventListener("click", signup);
