var express = require('express');
var router = express.Router();

// import mainController
const mainController = require('../controllers/mainContrroller')

// GET home page
router.get('/', mainController.index);

// GET about page
 router.get('/about', mainController.about);

// GET contact page
  router.get('/contact', function(req, res, next) {
    res.render('contact',{title: "Contact us", layout: "main"});
});

//GET prodi page
  router.get('/prodi', function(req, res, next) {
    const data = [
        {kode: 24,nama: "Sistem Informasi", singkatan: "SI", fakultas:"Fakultas Ilmu Komputer dan Rekayasa"},
        {kode: 25,nama: "Informatika", singkatan: "IF", fakultas:"Fakultas Ilmu Komputer dan Rekayasa"},
        {kode: 11,nama: "Manajemen Informatika", singkatan: "MI", fakultas:"Fakultas Ilmu Komputer dan Rekayasa"},
        {kode: 27,nama: "Teknik Elektro", singkatan: "TE", fakultas:"Fakultas Ilmu Komputer dan Rekayasa"},
        {kode: 20,nama: "Akutansi", singkatan: "AK", fakultas:"Fakultas Ekonomi dan Bisnis"},
        {kode: 21,nama: "Manajemen", singkatan: "MJ", fakultas:"Fakultas Ekonomi dan Bisnis"},
    ]
    res.render('prodi',{data, title: "Program Studi",layout: "main"});
} )

module.exports = router;
