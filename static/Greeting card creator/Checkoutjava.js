// Get a reference to the form element
var orderForm = document.getElementById("orderForm");

// Add a submit event listener to the form
orderForm.addEventListener("submit", function(event) {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Retrieve form input values
  var fullName = document.getElementById("fullName").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;

  // Display a confirmation message in a pop-up box
  var message = "Thank you, " + fullName + "! Your order has been placed.";
  alert(message);

  // You can also clear the form inputs if desired
  orderForm.reset();
});
