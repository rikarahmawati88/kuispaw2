const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

//Membuat skema untuk pengguna 
const UserSchema = new mongoose.Schema({
    name:{
        type: String, //Tipe data nama = String
        required: true //Nama harus isi
    },
    password: {
        type: String, // Tipe data password = String
        required: true, // Password harus isi
    },
    role: {
        type: String, //Tipe data role = String
        enum: ["admin", "pegawai"], // Role hanya 'admin' atau 'pegawai'
        default: "pegawai", //Default rolenya 'pegawai'
    },
    date: {
        type: Date, // Tanggal
        default: Date.now // Waktu saat ini
    },
});

//Fungsi untuk mengenkripsi password sebelum menyimpan pengguna
UserSchema.pre("save", async function (next) {
    if(!this.isModified("password")){
        //Jika password tidak diubah, lanjutkan tanpa meng-enkripsi ulang
        return next();
    }
    const salt = await bcrypt.genSalt(10); // Membuat salt untuk enksipsi password
    this.password = await bcrypt.hash(this.password, salt);// Mengenkripsi password
    next(); //Melanjutkan ke proses berikutnya
})

module.exports = mongoose.model("User", UserSchema); // Mengekpor model User berdasarkan UserSchema