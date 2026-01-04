// impor model Daftar Pegawai
const daftarPegawaiSchema = require("../models/daftarPegawai")

// fungsi untuk mengambil isi collection daftar pegawai
const getAllDaftarPegawai = async (req, res) => {
    try {
        // GET collection daftar pegawai
        const result = await daftarPegawaiSchema.find().populate("id_ruangan")
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json({ message: error })
    }
}

// fungsi untuk mengambil isi collection daftar pegawai berdasarkan parameter id
const getDaftarPegawaiById = async (req, res) => {
    try {
        // GET collection daftar pegawai berdasarkan parameter id
        const result = await daftarPegawaiSchema
            .findById(req.params.id)
            .populate("id_ruangan")

        if (!result) {
            // Jika data daftar pegawai tidak ada pada MongoDB
            res.status(404).json({ message: "Daftar pegawai tidak ditemukan" })
        } else {
            // Jika data daftar pegawai ada
            res.status(200).json(result)
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

// fungsi untuk mengubah isi collection daftar pegawai
const updateDaftarPegawaiById = async (req, res) => {
    try {
        // GET collection daftar pegawai berdasarkan parameter id
        const result = await daftarPegawaiSchema.findById(req.params.id)

        if (!result) {
            // Jika data daftar pegawai tidak ada pada MongoDB
            res.status(404).json({ message: "Daftar pegawai tidak ditemukan" })
        } else {
            // Jika data daftar pegawai ada
            if (req.body.id_pegawai != null) {
                result.id_pegawai = req.body.id_pegawai
            }

            if (req.body.nama != null) {
                result.nama = req.body.nama
            }

            if (req.body.tanggal_lahir != null) {
                result.tanggal_lahir = req.body.tanggal_lahir
            }

            if (req.body.no_telpon != null) {
                result.no_telpon = req.body.no_telpon
            }

            if (req.body.jabatan != null) {
                result.jabatan = req.body.jabatan
            }

            if (req.body.id_ruangan != null) {
                result.id_ruangan = req.body.id_ruangan
            }

            // update data daftar pegawai
            const updateDaftarPegawai = await result.save()
            res.status(200).json(updateDaftarPegawai)
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

// fungsi menghapus isi collection daftar pegawai
const deleteDaftarPegawaiById = async (req, res) => {
    try {
        // GET collection daftar pegawai berdasarkan parameter id
        const result = await daftarPegawaiSchema.findById(req.params.id)

        if (!result) {
            // jika data daftar pegawai tidak ada di mongo DB
            res.status(404).json({ message: "Daftar pegawai tidak ditemukan" })
        } else {
            // Jika data daftar pegawai ada, maka hapus data berdasarkan id
            await result.deleteOne()
            res.status(200).json({ message: "Daftar pegawai berhasil dihapus" })
        }
    } catch (error) {
        res.status(500).json({ message: error })
    }
}

// Membuat daftar pegawai baru (POST)
const createDaftarPegawai = async (req, res) => {
    // Membuat instance daftar pegawai baru
    const daftarPegawai = new daftarPegawaiSchema({
        id_pegawai: req.body.id_pegawai,
        nama: req.body.nama,
        tanggal_lahir: req.body.tanggal_lahir,
        no_telpon: req.body.no_telpon,
        jabatan: req.body.jabatan,
        id_ruangan: req.body.id_ruangan
    })

    try {
        // Menyimpan daftar pegawai baru ke database
        const hasil = await daftarPegawai.save()
        // beri respon json HTTP_CREATED
        res.status(201).json(hasil)
    } catch (error) {
        res.status(400).json({ message: error })
    }
}

// export
module.exports = {
    getAllDaftarPegawai,
    getDaftarPegawaiById,
    updateDaftarPegawaiById,
    createDaftarPegawai,
    deleteDaftarPegawaiById
}
