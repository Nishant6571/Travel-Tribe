function redirectToPage(pagename) {
  var loginPageUrl = `${pagename}`;
  window.location.href = loginPageUrl;
}

async function fetchData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
fetchData();
async function validateLogin() {
  const emailInput = document.getElementById("email").value;
  const passwordInput = document.getElementById("password").value;

  const userData = await fetchData("https://loginpage-olv8.onrender.com/users");

  console.log(passwordInput);

  console.log("Email Input:", emailInput);
  console.log("Password Input:", passwordInput);

  const user = userData.find(
    (user) => user.email === emailInput && user.password === passwordInput
  );

  if (user) {
    window.location.href = "Home.html";
  } else {
    alert("Incorrect email or password. Please try again.");
  }
}
document.addEventListener("DOMContentLoaded", function () {
  const sign = document.querySelector(".login-button");
  sign.addEventListener("click", validateLogin);
});
