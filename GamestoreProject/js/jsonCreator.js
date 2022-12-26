class Product {
  id;
  title;
  platform;
  productionYear;
  price;
  imgSrc;
  constructor(id, title, platform, productionYear, price, imgSrc) {
    this.id = id;
    this.title = title;
    this.platform = platform;
    this.roductionYear = productionYear;
    this.price = price;
    this.imgSrc = imgSrc;
  }
}

let defaultProducts = [
  {
    id: 1,
    title: "Need For Speed",
    releaseYear: 2006,
    platform: "pc",
    price: 300,
    imgSrc: "/img/roll/1054469.jpg",
  },
  {
    id: 2,
    title: "Heroes 3",
    releaseYear: 1993,
    platform: "pc",
    price: 250,
    imgSrc: "/img/roll/1591858.jpg",
  },
  {
    id: 3,
    title: "Cyberpunk",
    releaseYear: 2005,
    platform: "ps5",
    price: 230,
    imgSrc: "/img/roll/1811246.jpg",
  },
  {
    id: 4,
    title: "God Of War",
    releaseYear: 2015,
    platform: "ps5",
    price: 320,
    imgSrc: "/img/roll/1888202.jpg",
  },
  {
    id: 5,
    title: "Spider Man",
    releaseYear: 2016,
    platform: "Xbox",
    price: 320,
    imgSrc: "/img/roll/1924844.jpg",
  },
  {
    id: 6,
    title: "Red Dead Redemption 2",
    releaseYear: 2018,
    platform: "Xbox",
    price: 320,
    imgSrc: "/img/roll/RDR2.jpg",
  },
  {
    id: 7,
    title: "Far Cry 5",
    releaseYear: 2018,
    platform: "Xbox",
    price: 290,
    imgSrc: "/img/roll/4b22bdba8b73d82275f554edbe1f2763.jpg",
  },
  {
    id: 8,
    title: "Far Cry 6",
    releaseYear: 2021,
    platform: "Xbox",
    price: 350,
    imgSrc: "/img/roll/5a9c4156d6811c239bb8b9ffa8826e5e.jpg",
  },
  {
    id: 9,
    title: "Diablo II: Resurrected",
    releaseYear: 2021,
    platform: "pc",
    price: 299,
    imgSrc: "/img/roll/Diablo2.jpg",
  },
  {
    id: 10,
    title: "Stray",
    releaseYear: 2022,
    platform: "ps5",
    price: 299,
    imgSrc: "/img/roll/5ba15263b8ee8142ad50bc953a53d366.jpg",
  },
  {
    id: 11,
    title: "Resident Evil Village",
    releaseYear: 2021,
    platform: "ps5",
    price: 299,
    imgSrc: "/img/roll/40e52b44263ffe15f0ff64b62b426166.jpg",
  },
  {
    id: 12,
    title: "Anno 1800. Complete Edition",
    releaseYear: 2019,
    platform: "pc",
    price: 250,
    imgSrc: "/img/roll/1816214.jpg",
  },
  {
    id: 13,
    title: "Need for Speed: Underground 2",
    releaseYear: 2006,
    platform: "pc",
    price: 120,
    imgSrc: "/img/roll/8313e2c6bb1532ad6bfe9681668e70a5.jpg",
  },
  {
    id: 14,
    title: "Mass Effect Legendary Edition",
    releaseYear: 2021,
    platform: "pc",
    price: 210,
    imgSrc: "/img/roll/MELE.jpg",
  },
  {
    id: 15,
    title: "The Elder Scrolls V: Skyrim. Anniversary Edition",
    releaseYear: 2021,
    platform: "pc",
    price: 210,
    imgSrc: "/img/roll/1875891.jpg",
  },
  {
    id: 16,
    title: "Half-Life 2. Complete Edition",
    releaseYear: 2007,
    platform: "pc",
    price: 240,
    imgSrc: "/img/roll/590b5548d95e19bdfe845a485bf987c7.jpg",
  },
  {
    id: 17,
    title: "DEATH STRANDING. Director's Cut",
    releaseYear: 2019,
    platform: "ps5",
    price: 370,
    imgSrc: "/img/roll/bd61933d29f801ec3ad5a9889523415c.jpg",
  },
  {
    id: 18,
    title: "The Legend of Zelda: Breath of the Wild",
    releaseYear: 2016,
    platform: "nintendo",
    price: 370,
    imgSrc:
      "/img/roll/the-legend-of-zelda-breath-of-the-wild-nintendo-switch-exon-1_1024x1024.jpg",
  },
  {
    id: 19,
    title: "GTA The Trilogy The Definitive Edition",
    releaseYear: 2020,
    platform: "nintendo",
    price: 390,
    imgSrc: "/img/roll/b_1.jpg",
  },
  {
    id: 20,
    title: "NBA 2K22",
    releaseYear: 2021,
    platform: "nintendo",
    price: 270,
    imgSrc:
      "/img/roll/nba-2k22-standard-edition-nintendo-switch-exon-1_1024x1024.jpg",
  },
];

class ProdcutsStorage {
  //Storage "מחסן"
  products; //array that contains the products
  constructor() {
    this.products = [];

    const local = localStorage.getItem("savedProducts");
    if (local === null) {
      this.products = defaultProducts;
    } else {
      this.products = JSON.parse(local);
    }
  }
  saveProductToStorage(product) {
    //Save to storage
    this.products.push(product);
    this.saveToLocalStorage();
  }
  saveToLocalStorage() {
    localStorage.setItem("savedProducts", JSON.stringify(this.products)); //array to string, and then save in localStorage
  }
}
export class MediatingProducts {
  products; //contains an array with all the products
  constructor() {
    //sets the products to property 'products'
    this.getAllProducts();
  }
  addNewProduct(title, platform, productionYear, price, imgSrc) {
    let id = 0;
    this.products.forEach((x) => {
      if (id <= x.id) {
        id = x.id + 1;
      }
    });

    let newProduct = new Product(
      id,
      title,
      platform,
      productionYear,
      price,
      imgSrc
    );
    let newStorage = new ProdcutsStorage();
    newStorage.saveProductToStorage(newProduct);
  }
  getAllProducts(platform) {
    let newStorage = new ProdcutsStorage();
    this.products = newStorage.products;
    if (platform) {
      let filteredProducts = [];
      this.products.forEach((product) => {
        if (product.platform == platform) {
          filteredProducts.push(product);
        }
      });
      return filteredProducts;
    } else {
      return this.products;
    }
  }
  deleteProductsFromStorage(title) {
    let newStorage = new ProdcutsStorage();
    let foundIndex = newStorage.products.findIndex(
      (product) => product.title === title
    );
    if (foundIndex !== -1) {
      newStorage.products.splice(foundIndex, 1);
      newStorage.saveToLocalStorage();
    }
    this.products = newStorage.products;

    // this.products.forEach((product) => {
    //   if (product.title == title) {
    //     this.products.splice(title, 1);
    //   }
    // });
  }
}
