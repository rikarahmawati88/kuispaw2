const jwt = require("jsonwebtoken");

//Middleware untuk menverifikasi JWT token
const authMiddleware = (req, res, next) => {
    const token = req.header("Authorization")?.split(" ")[1]; //Mendapatkan token dari header Authorization
    if (!token){
        //Jika token tidak ada
        return res.status(401).json({message: "No token, authorization denied"}); //Kirim respon tidak ada token
    }
    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET); //Verifikasi token dengan secret
        req.user = decoded;//Menyimpan payload token ke req.user
        next();
    }catch (error){
        res.status(401).json({message: "Token is not valid"}); //Kirim respon jika token tidak valid
    }
};
module.exports = authMiddleware;//Mengekpor middleware