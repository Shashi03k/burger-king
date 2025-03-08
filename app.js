document.getElementById('orderBtn').addEventListener('click', function() {
    const selectedItems = Array.from(document.querySelectorAll('input[type="checkbox"]:checked'))
      .map(checkbox => checkbox.value);

    if (selectedItems.length === 0) {
      alert("Please select at least one item.");
      return;
    }

    document.getElementById('orderDisplay').innerHTML = 'Preparing your food...';

    const orderId = `BK${Math.floor(Math.random() * 10000)}`;
    const preparationTime = Math.floor(Math.random() * 5) + 1; // Random time between 1-5 seconds

    // Food images mapping
    const foodImages = {
        burger: "burger.webp",
        fries: "Homemade-French-Fries_8.webp",
        drink: "soft-drink.jpg"
    };

    new Promise((resolve) => {
      setTimeout(() => {
        resolve(orderId);
      }, preparationTime * 1000);
    })
    .then(id => {
      let imagesHtml = selectedItems.map(item => 
        `<img src="${foodImages[item]}" alt="${item}">`
      ).join("");

      document.getElementById('orderDisplay').innerHTML = `
        <div id="foodImageContainer">${imagesHtml}</div>
        <span id="orderId">Order ID: ${id}</span>
      `;
    });
});
