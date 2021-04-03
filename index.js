const path = require("path");
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const homeRoutes = require("./routes/home");

const app = express();
const port = process.env.PORT || 5000;

// global middlewares
app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        scriptSrc: ["'self'", "'unsafe-eval'"],
        styleSrc: [
          "'self'",
          "'unsafe-inline'",
          "'unsafe-eval'",
          "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css",
        ],
        fontSrc: [
          "'self'",
          "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/fonts/",
        ],
      },
    },
  })
);
app.use(cors());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

// routes
app.use(homeRoutes);

// listener
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
