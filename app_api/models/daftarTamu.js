const mongoose = require('mongoose')// impor mongoose

// skema untuk collection daftar tamu
const daftarTamuSchema = new mongoose.Schema ({
    nama_tamu:{
        type: String,
        required: true, // wajib diisi
        trim: true
    },
    no_telepon:{
        type: String,
        required: true, // wajib diisi
        trim: true
    },
    keperluan:{
        type: String,
        required: true, // wajib diisi
        trim: true
    },
    waktu_kunjungan: {
        type: Date,
        required: true,
    },
    id_pegawai: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "DaftarPegawai",
        required: true
    },
})
// sertakan skema DaftarTamu ke dalam model DaftarTamu
const DaftarTamu = mongoose.model("DaftarTamu", daftarTamuSchema)
// expor model DaftarTamu
module.exports = DaftarTamu