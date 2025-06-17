// Filtrage des produits sur la page categories.html
document.addEventListener("DOMContentLoaded", function () {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const products = document.querySelectorAll("#product-grid .col-md-4");

  filterButtons.forEach(button => {
    button.addEventListener("click", () => {
      const category = button.getAttribute("data-category");

      products.forEach(product => {
        const productCategory = product.getAttribute("data-category");
        if (category === "all" || productCategory === category) {
          product.style.display = "block";
        } else {
          product.style.display = "none";
        }
      });
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form.needs-validation");

  if (form) {
    form.addEventListener("submit", function (event) {
  event.preventDefault(); // On empêche le rechargement de la page

  if (!form.checkValidity()) {
    form.classList.add("was-validated");
    return;
  }
  const code = promoInput.value.trim().toLowerCase();
  if (code === "master feg") {
    window.location.href = "../index.html"; // Redirige vers l'accueil
  } else {
    window.location.href = "success.html"; // Redirige vers la page de succès normale
  }
});
document.addEventListener("DOMContentLoaded", function() {
  const urlParams = new URLSearchParams(window.location.search);
  const products = urlParams.get('products') ? urlParams.get('products').split('|') : [];
  const prices = urlParams.get('prices') ? urlParams.get('prices').split('|').map(Number) : [];
  const quantities = urlParams.get('qtys') ? urlParams.get('qtys').split('|').map(Number) : [];

  const container = document.getElementById('cart-items-container');
  let subtotal = 0;
  container.innerHTML = '';

  if (products.length > 0) {
    products.forEach((product, index) => {
      const price = prices[index] || 0;
      const qty = quantities[index] || 1;
      const total = price * qty;
      subtotal += total;

      container.innerHTML += `
        <div class="cart-item">
          <div class="d-flex justify-content-between">
            <div>
              <h6 class="my-0">${product}</h6>
              <small class="text-muted">Quantité: ${qty}</small>
            </div>
            <span class="text-muted">${total.toFixed(2)} MAD</span>
          </div>
        </div>
      `;
    });

    document.getElementById('subtotal').textContent = subtotal.toFixed(2) + ' MAD';
    document.getElementById('total').textContent = subtotal.toFixed(2) + ' MAD';
  } else {
    container.innerHTML = '<p>Aucun article dans le panier</p>';
  }
});