const categoryCheckboxes = document.querySelectorAll('input[type="checkbox"]');
const productList = document.getElementById("productList");
const Filter = {
  byCategory: function () {
    // Filter the products on the basis checkboxes checked
    const selectedCategories = Array.from(categoryCheckboxes)
      .filter(function (checkbox) {
        return checkbox.checked;
      })
      .map(function (checkbox) {
        return checkbox.value;
      });

    const products = Array.from(productList.children);

    products.forEach(function (product) {
      const category = product.getAttribute("category");
      if (
        selectedCategories.length === 0 ||
        selectedCategories.includes(category)
      ) {
        product.style.display = "block";
      } else {
        product.style.display = "none";
      }
    });
  },
};

export default Filter;
