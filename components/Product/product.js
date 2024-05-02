import Loader from "../Loader/loader.js";
const loadMoreBtn = document.getElementById("loadMoreBtn");
const loader = document.getElementById("loader");
const productList = document.getElementById("productList");

let currentPage = 1;
const productsPerPage = 10;
let isLoading = false;
let allProductsLoaded = false;

const Product = {
  fetchProducts: async function () {
    Loader.show(loader);
    const response = await fetch("https://fakestoreapi.com/products");
    const products = await response.json();
    Loader.hide(loader);
    return products;
  },
  renderTile: function (product) {
    // Render product tile
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");
    this.setAttributes(productCard, {
      id: product.id,
      price: Number(product.price),
      category: product.category,
      name: product.title,
    });

    const productImage = document.createElement("img");
    productImage.classList.add("product-card__image");
    productImage.src = product.image;
    productImage.alt = product.title;

    const productName = document.createElement("div");
    productName.classList.add("product-card__name");
    productName.textContent = product.title;

    const productPrice = document.createElement("div");
    productPrice.classList.add("product-card__price");
    productPrice.textContent = product.price;

    const productSaveLater = document.createElement("img");
    productSaveLater.classList.add("product-card__save-later");
    productSaveLater.src = "assets/icons/heart.png";
    productSaveLater.alt = "heart icon";

    const productDescription = document.createElement("div");
    productDescription.classList.add("product-card__description");
    productDescription.textContent = product.description;

    productCard.appendChild(productImage);
    productCard.appendChild(productName);
    productCard.appendChild(productPrice);
    productCard.appendChild(productSaveLater);
    productCard.appendChild(productDescription);

    productList.appendChild(productCard);
  },
  load: async function () {
    // Load products
    if (isLoading || allProductsLoaded) return;
    isLoading = true;
    try {
      const products = await this.fetchProducts();
      if (products.length === 0) {
        allProductsLoaded = true;
        Loader.hide(loadMoreBtn);
        return;
      }

      const startIndex = (currentPage - 1) * productsPerPage;
      const endIndex = startIndex + productsPerPage;
      const productsToRender = products.slice(startIndex, endIndex);
      productsToRender.forEach((product) => this.renderTile(product));
      if (products.length <= currentPage * productsPerPage) {
        allProductsLoaded = true;
        Loader.hide(loadMoreBtn);
      } else {
        Loader.show(loadMoreBtn);
      }
      productList.classList.remove("loading");
      productList.classList.add("loaded");
      currentPage++;
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      isLoading = false;
    }
  },
  setAttributes: function (el, attrs) {
    for (var key in attrs) {
      el.setAttribute(key, attrs[key]);
    }
  },
};

export default Product;
