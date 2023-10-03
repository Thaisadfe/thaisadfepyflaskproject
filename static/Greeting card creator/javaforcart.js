document.addEventListener("DOMContentLoaded", function () {
    const cartItems = document.querySelectorAll('.cart-item');
    const totalPriceElement = document.getElementById('totalPrice');
    let totalPrice = 0;
  
    function updateTotalPrice(price) {
      totalPrice += price;
      totalPriceElement.textContent = totalPrice;
    }
  
    cartItems.forEach((item) => {
      const addToCartBtn = item.querySelector('.add-to-cart');
      const removeFromCartBtn = item.querySelector('.remove-from-cart');
      const price = parseInt(addToCartBtn.dataset.price);
  
      addToCartBtn.addEventListener('click', () => {
        updateTotalPrice(price);
        addToCartBtn.disabled = true;
      });
  
      removeFromCartBtn.addEventListener('click', () => {
        // Check if the total price is greater than or equal to the item price
        if (totalPrice >= price) {
          updateTotalPrice(-price);
          addToCartBtn.disabled = false;
        }
      });
    });
  
    const checkoutButton = document.querySelector('.cart-button');
  
    checkoutButton.addEventListener('click', () => {
      window.location.href = 'checkout.html';
    });
  });
  
