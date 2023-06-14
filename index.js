const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

app.use(cors());

const category = require("./data/categories.json");
const news = require("./data/news.json");

app.get("/", (req, res) => {
  res.send("News API running");
});

app.get("/news-categories", (req, res) => {
  res.send(category);
});

app.get("/news/:id", (req, res) => {
  const id = req.params.id;
  const selectedNews = news.find((n) => n._id === id);
  res.send(selectedNews)
});

app.get('/news', (req, res)=>{
    res.send(news)
})

app.get("/category/:id", (req, res) => {
  const id = req.params.id;

  if (id === "8") {
    res.send(news);
  } else {
    const category_news = news.filter((n) => n.category_id === id);
    res.send(category_news);
  }
});

app.listen(port, () => {
  console.log("Dragon News Server on port", port);
});

app.listenerCount(port, () => {
  console.log("fire news server running port", port);
});
