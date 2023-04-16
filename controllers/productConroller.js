const db = require("../model/User");

//create main model

const Product = db.products;
const Review = db.reviews;

//create product

const addProduct = async (req, res) => {
    console.log(req.body,'jdcnjdscnjscn');
  let info = {
    title: req.body.title,
    price: req.body.price,
    description: req.body.description,
    published: req.body.published ? req.body.published : false,
  };
console.log(info);
  const product = await Product.create(info);
  res.status(200).send(product);
};

//get all products

const getAllProducts = async (req, res) => {
  let products = await Product.findAll({
    // attributes:[
    //     'title',
    //     'price'
    // ]
  });
  res.status(200).send(products);
};

//get one product

const getOneproduct = async (req, res) => {
  let id = req.params.id;
  let product = await Product.findOne({
    where: { id: id },
  });
  res.status(200).send(product);
};

//update product

const updateProduct = async (req, res) => {
  let id = req.params.id;
  const product = await Product.update(req.body, { where: { id: id } });
  res.status(200).send(product);
};

//delete product

const deleteProduct = async (req, res) => {
  let id = req.params.id;
  await Product.destroy({ where: { id: id } });
  res.status(200).send("product was successfully deleted");
};

//published product

const getPublishedProduct = async (req, res) => {
  const products = await Product.findAll({ where: { published: true } });
  res.status(200).send(products);
};
module.exports = {
  addProduct,
  getAllProducts,
  getOneproduct,
  updateProduct,
  deleteProduct,
  getPublishedProduct
};
