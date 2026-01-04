// impor model Ruangan
const ruanganSchema = require("../models/ruangan")

// fungsi untuk mengambil isi collection ruangan
const getAllRuangan = async (req, res) => {
    try {
        // GET collection ruangan
        const result = await ruanganSchema.find()
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json({ message: error })
    }
}

// fungsi untuk mengambil isi collection ruangan berdasarkan parameter id
const getRuanganById = async (req, res) => {
    try {
        // GET collection ruangan berdasarkan parameter id
        const result = await ruanganSchema.findById(req.params.id)
        if (!result) {
            // Jika data ruangan tidak ada pada MongoDB
            res.status(404).json({ message: "Ruangan tidak ditemukan" })
        } else {
            // Jika data ruangan ada
            res.status(200).json(result)
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

// fungsi untuk mengubah isi collection ruangan
const updateRuanganById = async (req, res) => {
    try {
        // GET collection ruangan berdasarkan parameter id
        const result = await ruanganSchema.findById(req.params.id)
        if (!result) {
            // Jika data ruangan tidak ada pada MongoDB
            res.status(404).json({ message: "Ruangan tidak ditemukan" })
        } else {
            // Jika data ruangan ada
            // Jika ada request perubahan nama ruangan
            if (req.body.nama_ruangan != null) {
                result.nama_ruangan = req.body.nama_ruangan
            }

            // Jika ada request perubahan lantai
            if (req.body.lantai != null) {
                result.lantai = req.body.lantai
            }

            // Jika ada request perubahan keterangan
            if (req.body.keterangan != null) {
                result.keterangan = req.body.keterangan
            }

            // update data ruangan
            const updateRuangan = await result.save()
            res.status(200).json(updateRuangan)
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

// fungsi menghapus isi collection ruangan
const deleteRuanganById = async (req, res) => {
    try {
        // GET collection ruangan berdasarkan parameter id
        const result = await ruanganSchema.findById(req.params.id)
        if (!result) {
            // jika data ruangan tidak ada di mongo DB
            res.status(404).json({ message: "Ruangan tidak ditemukan" })
        } else {
            // Jika data ruangan ada, maka hapus data ruangan berdasarkan id
            await result.deleteOne()
            res.status(200).json({ message: "Ruangan berhasil dihapus" })
        }
    } catch (error) {
        res.status(500).json({ message: error })
    }
}

// Membuat ruangan baru (POST)
const createRuangan = async (req, res) => {
    // Membuat instance ruangan baru
    const ruangan = new ruanganSchema({
        nama_ruangan: req.body.nama_ruangan,
        lantai: req.body.lantai,
        keterangan: req.body.keterangan
    })

    try {
        // Menyimpan ruangan baru ke database
        const hasil = await ruangan.save()
        // beri respon json HTTP_CREATED
        res.status(201).json(hasil)
    } catch (error) {
        res.status(400).json({ message: error })
    }
}

// export
module.exports = {
    getAllRuangan,
    getRuanganById,
    updateRuanganById,
    createRuangan,
    deleteRuanganById
}
