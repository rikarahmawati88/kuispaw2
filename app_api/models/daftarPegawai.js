const mongoose = require('mongoose') // impor mongoose

// skema untuk collection daftar pegawai
const daftarPegawaiSchema = new mongoose.Schema({
    id_pegawai: {
        type: String,
        required: true, //wajib diisi
        trim: true
    },
    nama: {
        type: String,
        required: true,
        trim: true
    },
    tanggal_lahir: {
        type: Date,
        required: true,
        
    },
    no_telpon: {
        type: String,
        required: true,
    },
    jabatan: {
        type: String,
        required: true,
    },
    id_ruangan: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Ruangan",
            required: true
        }
})
            
//sertakan skema prodi ke dalam model Prodi
const DaftarPegawai = mongoose.model("DaftarPegawai", daftarPegawaiSchema)
// expor model daftar pegawai
module.exports = DaftarPegawai