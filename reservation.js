document.addEventListener("DOMContentLoaded", async function () {
  async function displayProducts() {
    try {
      const response = await fetch("http://localhost:3000/api/order/");
      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }
      const products = await response.json();
      console.log("Products fetched successfully:", products);

      const productList = document.querySelector(".list-group");
      productList.innerHTML = "";

      products.forEach((product) => {
        const listItem = document.createElement("li");
        listItem.classList.add("list-group-item");
        listItem.textContent = `${product.name}: ${product.quantity}`;
        productList.appendChild(listItem);
      });
    } catch (error) {
      console.error(error.message);
    }
  }

  displayProducts();

  document
    .getElementById("productForm")
    .addEventListener("submit", async function (event) {
      event.preventDefault();

      const productName = document.getElementById("dishName").value;
      const productQuantity = parseInt(
        document.getElementById("quantity").value
      );

      try {
        const response = await fetch("http://localhost:3000/api/order/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: productName,
            quantity: productQuantity,
          }),
        });

        if (!response.ok) {
          throw new Error("Failed to add product");
        }

        console.log("Product added successfully");

        displayProducts();
      } catch (error) {
        console.error(error.message);
      }
    });
});
