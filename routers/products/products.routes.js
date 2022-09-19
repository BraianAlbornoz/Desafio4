const express = require("express");
const Products = require("../../database/data");

let products = new Products();

const route = express.Router();

route.get("/", async (req, res) => {
  const data = await products.getAll().then((res) => res);
  res.json(data);
});

route.get("/:id", async (req, res) => {
  const { id } = req.params;
  const product = await products.getById(+id);
  if (!product) {
    return res.status(404).json({
      status: false,
      error: `Product with id: ${id} not found`,
    });
  }
  return res.json({ status: "located", result: product });
});

route.post("/", (req, res) => {
  const { title, price, thumbnail } = req.body;
  if (title === Number(title) || !title || !price || !thumbnail) {
    return res.status(404).json({
      status: false,
      error: `product does not comply with the required format`,
    });
  }
  const newProduct = {
    id: products.products.length + 1,
    title,
    price,
    thumbnail,
  };

  products.products.push(newProduct);
  res.json({
    status: "successfull",
    result: newProduct,
    "new Products": products.products,
  });
});

route.put("/:id", async (req, res) => {
  const {
    params: { id },
    body: { title, price, thumbnail },
  } = req;
  if (!title || title === Number(title) || !price || !thumbnail) {
    return res.status(404).json({
      status: false,
      error: `product does not comply with the required format`,
    });
  }
  const productIndex = await products.getFindIndex(id);
  if (productIndex < 0) {
    return res.status(404).json({
      status: false,
      error: `Product with id: ${id} not found`,
    });
  }
  const newProduct = {
    ...products[productIndex],
    title,
    price,
    thumbnail,
  };
  //Reemplazamos los valores por el nuevo producto.
  products.products[productIndex] = newProduct;
  return res.json({ success: true, result: newProduct });
});

route.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deleteProduct = await products.getById(+id);
  if (deleteProduct === undefined) {
    return res.status(404).json({
      status: false,
      error: `Product with id: ${id} not found`,
    });
  }
  const newListProduct = await products.deleteProduct(deleteProduct);
  res.json({
    success: true,
    result: newListProduct,
  });
});

module.exports = route;
