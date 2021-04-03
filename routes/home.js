const router = require("express").Router();
const homeController = require("../controllers/home");

router.get("/", homeController.getHome);
router.post("/", homeController.postData);

module.exports = router;
