// import model berita
const berita = require("../models/berita")

// fungsi untuk mengambil isi collection berita
const getAllBerita = async (req, res) => {
    try {
        // GET Collection berita
        const result = await berita.find()
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json({message:error})
        
    }
}
 
// export
module.exports = {getAllBerita}
