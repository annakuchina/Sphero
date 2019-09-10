$(document).ready(function() {
    console.log("ready!");
    $("#menu a ili").on("click", function(e) {
      function toggleCheckbox() {
        let checkbox = $("#menu-checkbox")[0];
        console.log("toggleCheckbox", checkbox);
        checkbox.checked = false;
      }
      toggleCheckbox();
    });
  });