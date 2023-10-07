document.addEventListener("DOMContentLoaded", function () {

    const cardContainer = document.querySelector(".card-container");
    const addButton = document.getElementById("addProductButton");
    const removeButton = document.getElementById("removeProductButton");
  
    function addProduct() {
      const newCard = document.createElement("div");
      newCard.className = "card";
  
      newCard.innerHTML = `
      <img src="img/Tourmaline & Eucalyptus.png" alt="Tourmaline & Eucalyptus">
      <h2>Tourmaline & Eucalyptus</h2>
      <div class="price-and-quantity">
          <p>$12.00</p>
          <div class="quantity">
              <input type="number" value="1">
          </div>
      </div>
      <p>Recharge your skin with the super energizing power of finely crushed turmaline powder blended with
      natural complexion</p>
      <button>Add to Cart</button>
      <a href="#">Learn More</a>
      `;
  
      cardContainer.appendChild(newCard);
    }
  
    function removeProduct() {
      const cards = cardContainer.querySelectorAll(".card");
  
      if (cards.length > 0) {
        cardContainer.removeChild(cards[cards.length - 1]);
      }
    }
  
    addButton.addEventListener("click", addProduct);
    removeButton.addEventListener("click", removeProduct);
  });
  