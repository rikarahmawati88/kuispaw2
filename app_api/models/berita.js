const mongoose = require ("mongoose") // impor mongosee

//skema untuk collection 
const beritaSchema = new mongoose.Schema({
  judul: {
    type: String,
    required:  true, //wajib diisi
    trim: true
  },
  deskripsi:{
    type: String,
    require: true,
    trim: true
  },
  isi:{
    type: String,
    require: true,
    trim: true
  },
  tanggal: {
    type: Date,
    default: Date.now
  } 
})
// sertakan skema berita ke dalam model berita
const Berita = mongoose.model("Berita",beritaSchema)
// expor model berita
module.exports = Berita