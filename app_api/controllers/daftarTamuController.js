// impor model Daftar Tamu
const daftarTamuSchema = require("../models/daftarTamu")

// fungsi untuk mengambil isi collection daftar tamu
const getAllDaftarTamu = async (req, res) => {
    try {
        // GET collection daftar tamu
        const result = await daftarTamuSchema
            .find()
            .populate("id_pegawai")

        res.status(200).json(result)
    } catch (error) {
        res.status(500).json({ message: error })
    }
}

// fungsi untuk mengambil isi collection daftar tamu berdasarkan parameter id
const getDaftarTamuById = async (req, res) => {
    try {
        // GET collection daftar tamu berdasarkan parameter id
        const result = await daftarTamuSchema
            .findById(req.params.id)
            .populate("id_pegawai")

        if (!result) {
            // Jika data daftar tamu tidak ada pada MongoDB
            res.status(404).json({ message: "Daftar tamu tidak ditemukan" })
        } else {
            // Jika data daftar tamu ada
            res.status(200).json(result)
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

// fungsi untuk mengubah isi collection daftar tamu
const updateDaftarTamuById = async (req, res) => {
    try {
        // GET collection daftar tamu berdasarkan parameter id
        const result = await daftarTamuSchema.findById(req.params.id)

        if (!result) {
            // Jika data daftar tamu tidak ada pada MongoDB
            res.status(404).json({ message: "Daftar tamu tidak ditemukan" })
        } else {
            // Jika data daftar tamu ada
            if (req.body.nama_tamu != null) {
                result.nama_tamu = req.body.nama_tamu
            }

            if (req.body.no_telepon != null) {
                result.no_telepon = req.body.no_telepon
            }

            if (req.body.keperluan != null) {
                result.keperluan = req.body.keperluan
            }

            if (req.body.waktu_kunjungan != null) {
                result.waktu_kunjungan = req.body.waktu_kunjungan
            }

            if (req.body.id_pegawai != null) {
                result.id_pegawai = req.body.id_pegawai
            }

            // update data daftar tamu
            const updateDaftarTamu = await result.save()
            res.status(200).json(updateDaftarTamu)
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

// fungsi menghapus isi collection daftar tamu
const deleteDaftarTamuById = async (req, res) => {
    try {
        // GET collection daftar tamu berdasarkan parameter id
        const result = await daftarTamuSchema.findById(req.params.id)

        if (!result) {
            // jika data daftar tamu tidak ada di mongo DB
            res.status(404).json({ message: "Daftar tamu tidak ditemukan" })
        } else {
            // Jika data daftar tamu ada, maka hapus data berdasarkan id
            await result.deleteOne()
            res.status(200).json({ message: "Daftar tamu berhasil dihapus" })
        }
    } catch (error) {
        res.status(500).json({ message: error })
    }
}

// Membuat daftar tamu baru (POST)
const createDaftarTamu = async (req, res) => {
    // Membuat instance daftar tamu baru
    const daftarTamu = new daftarTamuSchema({
        nama_tamu: req.body.nama_tamu,
        no_telepon: req.body.no_telepon,
        keperluan: req.body.keperluan,
        waktu_kunjungan: req.body.waktu_kunjungan,
        id_pegawai: req.body.id_pegawai,
    })

    try {
        // Menyimpan daftar tamu baru ke database
        const hasil = await daftarTamu.save()
        // beri respon json HTTP_CREATED
        res.status(201).json(hasil)
    } catch (error) {
        res.status(400).json({ message: error })
    }
}

// export
module.exports = {
    getAllDaftarTamu,
    getDaftarTamuById,
    updateDaftarTamuById,
    createDaftarTamu,
    deleteDaftarTamuById
}
