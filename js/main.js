window.onload = function() {
  var icon = document.querySelector(".nav__icon");
  var navDetails = document.querySelector(".nav__details");
  var openNav = false;

  icon.addEventListener("click", toggleNav);
  function toggleNav() {
    openNav = openNav ? false : true;

    if (openNav === true) {
      icon.innerHTML = "&#xf00d";
      navDetails.style.display = "block";
    } else {
      icon.innerHTML = "&#xf0c9";
      navDetails.style.display = "none";
    }
  }
};
