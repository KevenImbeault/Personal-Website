"use strict";

function load() {
  let button = document.getElementById("login-button");
  let loadingAnimation = document.getElementById("login-loading");
  let skillsDiv = document.getElementById("skills");

  button.style.display = "none";
  loadingAnimation.style.display = "block";

  setTimeout(function() {
    skillsDiv.scrollIntoView({ behavior: "smooth" });
    button.style.display = "block";
    loadingAnimation.style.display = "none";
  }, 1500);
}
