import { MediatingProducts } from "./jsonCreator.js";
const productsContainer = document.querySelector("#products-container");

// Запускаем getProducts

// getProducts();

// // Асинхронная функция получения данных из файла products.json
// async function getProducts() {
//   // Получаем данные из products.json
//   const response = await fetch("./js/products.json");
//   // Парсим данные из JSON формата в JS
//   const productsArray = await response.json();
//   // Запускаем ф-ю рендера (отображения товаров)
//   renderProducts(productsArray);
// }

function getProducts() {
  const mp = new MediatingProducts();
  renderProducts(mp.getAllProducts()); //
}

let newMP = new MediatingProducts();
productsContainer.innerHTML = "";
newMP.getAllProducts().forEach(function (item) {
  const productHTML = `<div class="col-md-6 ${item.platform} allProducts">
						<div class="card mb-4" data-id="${item.id}">
							<img class="product-img" src="${item.imgSrc}" alt="">
							<div class="card-body text-center">
								<h4 class="item-title">${item.title}</h4>
								<p><small data-items-in-box class="text-muted">${item.releaseYear} year.</small></p>

								<div class="details-wrapper">

									<!-- Счетчик -->
									<div class="items counter-wrapper">
										<div class="items__control" data-action="minus">-</div>
										<div class="items__current" data-counter>1</div>
										<div class="items__control" data-action="plus">+</div>
									</div>
									<!-- // Счетчик -->

									<div class="price">
										<div class="price__weight">${item.platform}</div>
										<div class="price__currency">${item.price} ₪</div>
									</div>
								</div>

								<button data-cart type="button" class="btn btn-block btn-outline-warning">
									+ add to cart
								</button>

							</div>
						</div>
					</div>`;
  //   productsContainer.insertAdjacentHTML("beforeend", "");
  //   productsContainer.insertAdjacentHTML("beforeend", productHTML);

  productsContainer.innerHTML += productHTML;
});

document.getElementById("allLink").addEventListener("click", () => {
  document
    .querySelectorAll("#products-container .allProducts")
    .forEach((product) => {
      product.style.display = "block";
    });
});
document.getElementById("nintendoLink").addEventListener("click", () => {
  document
    .querySelectorAll("#products-container .allProducts")
    .forEach((product) => {
      product.style.display = "none";
    });
  document
    .querySelectorAll("#products-container .nintendo")
    .forEach((product) => {
      product.style.display = "block";
    });
});
document.getElementById("pcLink").addEventListener("click", () => {
  document
    .querySelectorAll("#products-container .allProducts")
    .forEach((product) => {
      product.style.display = "none";
    });
  document.querySelectorAll("#products-container .pc").forEach((product) => {
    product.style.display = "block";
  });
});
document.getElementById("pcLink").addEventListener("click", () => {
  document
    .querySelectorAll("#products-container .allProducts")
    .forEach((product) => {
      product.style.display = "none";
    });
  document.querySelectorAll("#products-container .pc").forEach((product) => {
    product.style.display = "block";
  });
});

document.getElementById("xboxLink").addEventListener("click", () => {
  document
    .querySelectorAll("#products-container .allProducts")
    .forEach((product) => {
      product.style.display = "none";
    });
  document.querySelectorAll("#products-container .Xbox").forEach((product) => {
    product.style.display = "block";
  });
});
document.getElementById("ps5Link").addEventListener("click", () => {
  document
    .querySelectorAll("#products-container .allProducts")
    .forEach((product) => {
      product.style.display = "none";
    });
  document.querySelectorAll("#products-container .ps5").forEach((product) => {
    product.style.display = "block";
  });
});
