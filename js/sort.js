const productList = document.getElementById("productList");

const Sort = {
    // Sort the products from high to low and low to high prices
    byPrice: function (order) {
        const products = Array.from(productList.children);

        products.sort(function (a, b) {
          const priceA = parseFloat(a.getAttribute("price"));
          const priceB = parseFloat(b.getAttribute("price"));
    
          if (order === "lowest") {
            return priceA - priceB;
          } else if (order === "highest") {
            return priceB - priceA;
          }
        });
    
        // Clear the existing list
        while (productList.firstChild) {
          productList.removeChild(productList.firstChild);
        }
    
        // Append sorted products to the list
        products.forEach(function (product) {
          productList.appendChild(product);
        });
    },
  };
  
  export default Sort;
  