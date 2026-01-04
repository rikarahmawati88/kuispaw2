const express = require("express")
const router = express.Router();

// impor daftarTamuController
const daftarTamuController = require("../controllers/daftarTamuController")
const authMiddleware = require("../middleware/authMiddleware")
const roleMiddleware = require("../middleware/roleMiddleware")

// route GET untuk mendapatkan semua data daftar tamu
router.get("/", authMiddleware, daftarTamuController.getAllDaftarTamu)

// route GET id menampilkan satu data daftar tamu berdasarkan ID
router.get("/:id", authMiddleware, daftarTamuController.getDaftarTamuById)

// route PUT untuk memperbarui/mengubah/UPDATE daftar tamu berdasarkan ID
router.put("/:id", authMiddleware, roleMiddleware("admin"), daftarTamuController.updateDaftarTamuById)

// route Delete untuk menghapus data daftar tamu berdasarkan ID
router.delete("/:id", authMiddleware, roleMiddleware("admin"), daftarTamuController.deleteDaftarTamuById)

// route POST untuk membuat data daftar tamu baru
router.post("/", authMiddleware, roleMiddleware("admin"), daftarTamuController.createDaftarTamu)

// Mengeksport router agar dpt digunakan 
// di file lain (misal, di app.js)
// expor module
module.exports = router
