import Product from './product.js';
import Sort from './sort.js';
import Filter from './filter.js';
import Search from './search.js';
import Drawer from './drawer.js';

document.addEventListener("DOMContentLoaded", () => {
  const loadMoreBtn = document.getElementById("loadMoreBtn");
  const searchInput = document.getElementById("searchInput");
  const sortDropdown = document.getElementById("sortDropdown");
  const openDrawerBtn = document.getElementById("openDrawerBtn");
  const closeDrawerBtn = document.getElementById("closeDrawerBtn");
  const categoryCheckboxes = document.querySelectorAll('input[type="checkbox"]');


  // Initial load
  Product.load();

  // Load more on button click
  loadMoreBtn.addEventListener("click", function() {
    Product.load();
  });

  // Sort Dropdown Click
  sortDropdown.addEventListener("change", function () {
    Sort.byPrice(this.value);
  });

  // Filter Checkbox Click
  categoryCheckboxes.forEach(function (checkbox) {
    checkbox.addEventListener("change", Filter.byCategory);
  });

  // Search input click
  searchInput.addEventListener("input", function () {
    Search.byName(this.value.toLowerCase());
  });

  // Drawer open for mobile
  openDrawerBtn.addEventListener("click", Drawer.open);

  // Drawer close for mobile
  closeDrawerBtn.addEventListener("click", Drawer.close);
});
