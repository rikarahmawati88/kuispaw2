const bcrypt = require("bcryptjs"); // Untuk enkripsi/verifikasi password
const jwt = require("jsonwebtoken"); // Untuk membuat token JWT
const User = require("../models/user"); // Model User

// Fungsi untuk register pengguna baru
exports.register = async (req, res) => {
  const { name, password, role } = req.body;

  try {
    let user = await User.findOne({ name }); // Cek apakah user sudah ada
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }

    user = new User({ name, password, role }); // Buat user baru
    await user.save(); // Simpan ke database

    const payload = { userId: user.id, role: user.role };
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.json({ token }); // Kirim token sebagai respons
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Fungsi untuk login pengguna
exports.login = async (req, res) => {
  const { name, password } = req.body;

  try {
    const user = await User.findOne({ name });
    if (!user) {
      return res.status(400).json({ message: "Invalid name or password" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid name or password" });
    }

    const payload = { userId: user.id, role: user.role };
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.json({ token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};