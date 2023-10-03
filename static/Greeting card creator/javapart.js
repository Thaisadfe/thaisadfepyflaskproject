document.getElementById('cardForm').addEventListener('submit', createCard);

function createCard(e) {
  e.preventDefault();

  // Get user input values
  const recipientName = document.getElementById('recipientName').value.trim();
  const message = document.getElementById('message').value.trim();

  // Check if required fields are filled
  if (recipientName === '' || message === '') {
    alert('Please fill in all the required fields.');
    return;
  }

  // Create the greeting card HTML
  const cardHTML = `
    <div class="card">
      <h2>${recipientName}</h2>
      <p>${message}</p>
    </div>
  `;

  // Display the card in the preview section
  const cardPreview = document.getElementById('cardPreview');
  cardPreview.innerHTML = cardHTML;
}

function generateTemplate() {
  var occasion = document.getElementById("occasionSelect").value;
  var name = document.getElementById("recipientName").value;
  var messageBox = document.getElementById("message");
  var preview = document.getElementById("previewBox");
  
  if (occasion === "Christmas") {
    var template = "Merry Christmas " + name;
    preview.value = template;
    messageBox.value = template;
  } else if (occasion === "Birthday") {
    var template = "Happy Birthday " + name;
    preview.value = template;
    messageBox.value = template;
  } else {
    preview.value = "";
    messageBox.value = "";
  }
}

// Buy button event listener
document.getElementById('buyButton').addEventListener('click', openCart);

function openCart() {
  window.open("cart.html", "_blank");
}
