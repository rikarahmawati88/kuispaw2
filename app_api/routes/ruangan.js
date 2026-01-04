const express = require("express")
const router = express.Router();

// impor ruanganController
const ruanganController = require("../controllers/ruanganController")
const authMiddleware = require("../middleware/authMiddleware")
const roleMiddleware = require("../middleware/roleMiddleware")

// route GET untuk mendapatkan semua data ruangan
router.get("/", authMiddleware, ruanganController.getAllRuangan)

// route GET id menampilkan satu data ruangan berdasarkan ID
router.get("/:id", authMiddleware, ruanganController.getRuanganById)

// route PUT untuk memperbarui/mengubah/UPDATE ruangan berdasarkan ID
router.put("/:id", authMiddleware, roleMiddleware("admin"), ruanganController.updateRuanganById)

// route Delete untuk menghapus data ruangan berdasarkan ID
router.delete("/:id", authMiddleware, roleMiddleware("admin"), ruanganController.deleteRuanganById)

// route POST untuk membuat data ruangan baru
router.post("/", authMiddleware, roleMiddleware("admin"), ruanganController.createRuangan)

// Mengeksport router agar dpt digunakan 
// di file lain (misal, di app.js)
// expor module
module.exports = router
