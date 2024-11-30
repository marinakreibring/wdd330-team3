document.getElementById('addToCart').addEventListener('click', () => {
    const cart = document.querySelector('.cart');
    const cartCount = document.querySelector('.cart-count');
  
    // Update the cart count
    cartCount.textContent = parseInt(cartCount.textContent) + 1;
  
    // Add shake animation
    cart.classList.add('shake');
  
    // Remove shake animation 
    setTimeout(() => {
      cart.classList.remove('shake');
    }, 500);
  
    // Add pulse animation to cart count
    cartCount.classList.add('pulse');
  });
  
  // Remove pulse animation when the cart is clicked
  document.querySelector('.cart').addEventListener('click', () => {
    const cartCount = document.querySelector('.cart-count');
    cartCount.classList.remove('pulse');
  });