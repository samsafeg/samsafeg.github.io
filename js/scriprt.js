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
