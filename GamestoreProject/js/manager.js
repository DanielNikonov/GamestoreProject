import { MediatingProducts } from "./jsonCreator.js";

document.getElementById("createBtn").addEventListener("click", () => {
  let producttitle = document.getElementById("titleInput").value;
  let productPlatform = document.getElementById("platformInput").value;
  let productionYear = document.getElementById("productionYear").value;
  let productPrice = document.getElementById("price").value;
  let productImg = document.getElementById("imgSrc").value;
  let newMP = new MediatingProducts();
  newMP.addNewProduct(
    producttitle,
    productPlatform,
    productionYear,
    productPrice,
    productImg
  );
});
document.getElementById("deleteBtn").addEventListener("click", () => {
  let producttitle = document.getElementById("titleInput").value;
  let newMP = new MediatingProducts();
  newMP.deleteProductsFromStorage(producttitle);
  console.log("from manager");
});
