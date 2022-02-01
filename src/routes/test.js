const router = require("express").Router();
const testController = require('../controller/testController'); 


router
.get("/",testController.test);
router
.get("/twit",testController.twit);
router
.get("/tickers",testController.tickers);

module.exports = router;
