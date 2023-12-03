//James Smith, CIS 311 Assignment 5, 12/1/2023


document.addEventListener('DOMContentLoaded', function () {
   
    var nav = document.querySelector("nav");
    var menuIcon = document.getElementById("menu-icon");

  
    menuIcon.addEventListener("click", function () {
        nav.style.display = (nav.style.display === "block" ? "none" : "block");
    });
});
