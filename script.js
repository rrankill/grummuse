const tabs = document.querySelectorAll(".tabs button");
const products = document.querySelectorAll(".product-card");
const hearts = document.querySelectorAll(".heart");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((item) => item.classList.remove("active"));
    tab.classList.add("active");

    const category = tab.dataset.category;

    products.forEach((product) => {
      const shouldShow = category === "all" || product.dataset.category === category;
      product.classList.toggle("hidden", !shouldShow);
    });
  });
});

hearts.forEach((heart) => {
  heart.addEventListener("click", () => {
    heart.classList.toggle("saved");
    heart.textContent = heart.classList.contains("saved") ? "♥" : "♡";
  });
});