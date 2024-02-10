// To the top button function ////
document.addEventListener("DOMContentLoaded", function() {
  // Get the button element
  var toTopBtn = document.getElementById("toTopBtn");

  // Show or hide the button based on scroll position
  window.addEventListener("scroll", function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      toTopBtn.style.display = "block";
    } else {
      toTopBtn.style.display = "none";
    }
  });

  // Scroll to the top smoothly when the button is clicked
  toTopBtn.addEventListener("click", function() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
  });
});


// // // // display gallery toggle//

document.addEventListener("DOMContentLoaded", function () {
   const galleryButton = document.getElementById("galleryButton");
   const plusIcon = document.getElementById("plus");
   const hiddenContent = document.getElementById("hiddenContent");

   galleryButton.addEventListener("click", function () {
     plusIcon.style.transform =
       plusIcon.style.transform === "rotate(45deg)"
         ? "rotate(0deg)"
         : "rotate(45deg)";

     // Toggle the display of the gallery
     hiddenContent.style.display =
       hiddenContent.style.display === "grid" ? "none" : "grid";
   });
 });

