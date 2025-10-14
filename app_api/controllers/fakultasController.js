// import model Fakultas
const fakultas = require("../models/fakultas")

// fungsi untuk mengambil isi collection fakultas
const getAllFakultas = async (req, res) => {
    try {
        // GET Collection fakultas
        const result = await fakultas.find()
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json({message:error})
        
    }
}
 
// export
module.exports = {getAllFakultas}