const mongoose = require('mongoose') // import mongosee

// skema untuk collection ruangan
const RuanganSchema = new mongoose.Schema({
    nama_ruangan: {
        type: String,
        required: true, // wajib isi
        trim: true
    },
    lantai: {
        type: String,
        required: true,
        trim: true
    },
    keterangan: {
        type: String,
        required: true,
        trim: true
    }
})
// sertakan skema ruangan ke dalam model ruangan
const Ruangan = mongoose.model("Ruangan",RuanganSchema)
// expor model Ruangan
module.exports = Ruangan