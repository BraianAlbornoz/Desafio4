class Products {
  constructor() {
    this.products = products;
  }

  async getAll() {
    return this.products;
  }

  async getById(number) {
    return this.products.find((product) => product.id === number);
  }

  async getFindIndex(id) {
    return this.products.findIndex((product) => product.id === Number(id));
  }

  async deleteProduct(id) {
    return this.products.filter((product) => product != id);
  }
}

const products = [
  {
    id: 1,
    title: "Filtro Donaldson",
    price: 100.00,
    thumbnail:
      "https://pldistribucion.com.ar/web/wp-content/uploads/p550020.700.700-600x600.jpg",
  },
  {
    id: 2,
    title: "Bateria Willard",
    price: 200.00,
    thumbnail:
      "https://http2.mlstatic.com/D_NQ_NP_2X_761308-MLA43579791788_092020-F.webp",
  },
  {
    id: 3,
    title: "Filtro aceite WEGA",
    price: 50.00,
    thumbnail:
      "https://http2.mlstatic.com/D_NQ_NP_662023-MLA45729223613_042021-O.webp",
  },
];



module.exports = Products;
