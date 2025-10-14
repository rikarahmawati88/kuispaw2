const express = require("express")
const router = express.Router();

// impor fakultasController
const beritaController = require("../controllers/beritaController")

// route GET barita
router.get("/", beritaController.getAllBerita)

// export module
module.exports = router