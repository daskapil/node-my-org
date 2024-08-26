const express = require("express");
const morgan = require("morgan");
const email = require("./services/email");
const dotenv = require("dotenv").config();

const app = express();

const port = process.env.PORT || 3000;

// register view engine
app.set("view engine", "ejs");

// Middleware & static file
app.use(express.static("public"));
app.use(express.json());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.redirect("/home");
});

app.get("/home", (req, res) => {
  res.render("index", { title: "Home" });
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About Us" });
});

app.get("/contact", (req, res) => {
  res.render("contact", { title: "Contact Us" });
});

app.post("/contact", (req, res) => {
  const requestBody = req.body;
  console.log(requestBody);

  email
    .sendEmail(
      requestBody.name,
      requestBody.email,
      requestBody.subject,
      requestBody.message
    )
    .then((result) => res.json(result))
    .catch((error) => res.json(error));
});

// 404 page - should alway at the end
app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});

app.listen(port, () => console.log(`Server is running on port: ${port}`));
