const express = require("express");
const app = express();
const { products, people } = require("./data");

/////////////////////////////Route Parameter /////////////////////////////

app.get("/", (req, res) => {
  res.send('<h1>Home Page</h1><a href="/api/products">Link To products</a>');
});

app.get("/api/products", (req, res) => {
  const newProducts = products.map((product) => {
    const { id, name, image } = product;
    return { id, name, image };
  });

  res.json(newProducts);
});

app.get("/api/products/:productID", (req, res) => {
  // console.log(req.params); //{ productID: '1' }
  const { productID } = req.params;
  const singleProduct = products.find((product) => product.id == productID);
  if (!singleProduct) {
    return res.status(404).send("Product does not exit");
  }
  res.send(singleProduct);
});

app.get("/api/products/:productID/reviews/:reviewID", (req, res) => {
  console.log(req.params);
  res.send("Hello World");
});

/////////////////////////////Query/URL Parameter /////////////////////////////

//serach functioanlity
app.get("/api/v1/query", (req, res) => {
  // console.log(req.query);
  // URL: http://localhost:5000/api/v1/query?name=anush&id=30
  //Console log: { name: 'anush', id: '30' }

  const { search, limit } = req.query;
  let sortedProducts = [...products];

  if (search) {
    sortedProducts = sortedProducts.filter((product) => {
      return product.name.startsWith(search);
    });
  }

  if (limit) {
    sortedProducts = sortedProducts.slice(0, Number(limit));
    if (sortedProducts.length < 1) {
      // res.status(200).send("no product matched your serach");
      return res.status(200).json({ success: true, data: [] });
    }
  }

  res.status(200).json(sortedProducts);
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000....");
});
