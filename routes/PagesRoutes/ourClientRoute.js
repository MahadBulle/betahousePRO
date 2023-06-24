var express = require('express');
var router = express.Router();

const ourClientController = require("../../Controllers/PagesControllers/ourClientController")
router.get('/',ourClientController.GetClient);

router.get('/:id',ourClientController.GetClientById);

router.post("/",ourClientController.PostClient);


router.put('/:id' ,ourClientController.PutClient);


module.exports = router;
