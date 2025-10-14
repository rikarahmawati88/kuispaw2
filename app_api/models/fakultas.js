const mongoose = require('mongoose') // import mongosee

// skema untuk collection fakultas
const fakultasSchema = new mongoose.Schema({
    nama: {
        type: String,
        required: true, // wajib isi
        trim: true
    },
    singkatan: {
        type: String,
        required: true,
        trim: true
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
})
// sertakan skema fakultas ke dalam model fakultas
const Fakultas = mongoose.model("Fakultas",fakultasSchema)
// expor model Fakultas
module.exports = Fakultas