const productList = document.getElementById("productList");
const Search = {
  // search the products in the list by using the keywords in the name
  byName: function (query) {
    const products = Array.from(productList.children);
    products.forEach(function (product) {
      const productName = product.getAttribute("name").toLowerCase();
      const display = productName.includes(query) ? "block" : "none";
      product.style.display = display;
    });
  },
};

export default Search;
