//Middleware untuk memeriksa peran pengguna
const roleMiddleware = (requiredRole) => {
    return (req, res, next) => {
        if(req.user && req.user.role === requiredRole){
            //Jika penggina memiliki role yang sesuai
            next();
        }else{
            //Jika tidak memiliki role yang sesuai
            res.status(403).json({message: "Access denied"}); //Kirim respon akses ditolak
        }
    };
};

module.exports = roleMiddleware; // Mengekspor middleware