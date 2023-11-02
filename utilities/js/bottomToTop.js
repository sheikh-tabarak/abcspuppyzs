var toTopButton = document.getElementById("to-top-button");
var Header = document.getElementById('header-container');
window.onscroll = function () {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {

      toTopButton.classList.remove("hidden");
    //   Header.classList.add("bg-[#D0E2F2]");
  } else {
      toTopButton.classList.add("hidden");
    //   Header.classList.remove("bg-[#D0E2F2]");

  }
}

// When the user clicks on the button, scroll to the top of the document
function goToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
