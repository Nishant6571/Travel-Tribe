// -------------------dropdown menu Click functionality--------------------------------------

let button = document.getElementById("menuBtn");
    button.addEventListener('click', () => {
      let dropdown = document.getElementById("myDropdown");
      dropdown.classList.toggle("show");
});

// --------------------login page attach-----------------------------

function redirectToPage(pagename) {
  var loginPageUrl = `${pagename}`;

  window.location.href = loginPageUrl;
}