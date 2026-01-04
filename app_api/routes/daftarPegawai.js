const express = require("express")
const router = express.Router();

// impor daftarPegawaiController
const daftarPegawaiController = require("../controllers/daftarPegawaiController")
const authMiddleware = require("../middleware/authMiddleware")
const roleMiddleware = require("../middleware/roleMiddleware")

// route GET untuk mendapatkan semua data daftar pegawai
router.get("/", authMiddleware, daftarPegawaiController.getAllDaftarPegawai)

// route GET id menampilkan satu data daftar pegawai berdasarkan ID
router.get("/:id", authMiddleware, daftarPegawaiController.getDaftarPegawaiById)

// route PUT untuk memperbarui/mengubah/UPDATE daftar pegawai berdasarkan ID
router.put("/:id",authMiddleware, roleMiddleware("admin"), daftarPegawaiController.updateDaftarPegawaiById)

// route Delete untuk menghapus data daftar pegawai berdasarkan ID
router.delete("/:id", authMiddleware, roleMiddleware("admin"), daftarPegawaiController.deleteDaftarPegawaiById)

// route POST untuk membuat data daftar pegawai baru
router.post("/", authMiddleware, roleMiddleware("admin"), daftarPegawaiController.createDaftarPegawai)

// Mengeksport router agar dpt digunakan 
// di file lain (misal, di app.js)
// expor module
module.exports = router
