var express = require('express');
var router = express.Router();

const ourServicesController = require("../../Controllers/PagesControllers/ourServicesController")
router.get('/',ourServicesController.GetService);

router.get('/:id',ourServicesController.GetServiceById);

router.post("/",ourServicesController.PostService);


router.put('/:id' ,ourServicesController.PutService);


module.exports = router;
