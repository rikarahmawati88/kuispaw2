const index = (req,res) => {
  res.render('index', { title: 'Express', layout:'main' });
 // res.send ('hallo')
}
const about = (req,res) => {
  res.render('about', { title: 'About', layout:'main' });
}
const contact = (req,res) => {
  res.render('contact', { title: 'Contact', layout:'main' });
}
const prodi = (req,res) => {
     const data = [
        {kode: 24,nama: "Sistem Informasi", singkatan: "SI", fakultas:"Fakultas Ilmu Komputer dan Rekayasa"},
        {kode: 25,nama: "Informatika", singkatan: "IF", fakultas:"Fakultas Ilmu Komputer dan Rekayasa"},
        {kode: 11,nama: "Manajemen Informatika", singkatan: "MI", fakultas:"Fakultas Ilmu Komputer dan Rekayasa"},
        {kode: 27,nama: "Teknik Elektro", singkatan: "TE", fakultas:"Fakultas Ilmu Komputer dan Rekayasa"},
        {kode: 20,nama: "Akutansi", singkatan: "AK", fakultas:"Fakultas Ekonomi dan Bisnis"},
        {kode: 21,nama: "Manajemen", singkatan: "MJ", fakultas:"Fakultas Ekonomi dan Bisnis"},
    ];
    res.render('prodi',{data, title: "Program Studi",layout: "main"});
}
module.exports = {index, about,contact,prodi}