const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../models/User");

async function register(req, res) {
  try {
    const salt = await bcrypt.genSalt();
    const hashed = await bcrypt.hash(req.body.password, salt);
    await User.create({ ...req.body, password_hash: hashed });
    res.status(201).json({ msg: "User created" });
  } catch (err) {
    res.status(500).json({ err });
  }
}

async function login() {
  try {
    const user = await User.findByEmail(req.body.email);
    if (!user) new Error("Invalid login credentials");

    const checkUser = bcrypt.compare(req.body.password, user.passwordDigest);
    if (!checkUser) new Error("Invalid login credentials");

    const payload = {
      uid: user._id,
      username: user.username,
      email: user.email,
    };

    jwt.sign(payload, process.env.SECRET, { expiresIn: "30 days" }, sendToken);
  } catch (err) {
    console.log(`
      ##########################
      Error authenticating user: ${req.body.email}
      ##########################
    `);
    res.status(401).json({ err });
  }
}

function sendToken(err, token) {
  if (err) throw new Error("Error in token generation");
  res.status(200).json({
    success: true,
    token: `Bearer ${token}`,
  });
}

module.exports = {
  register,
  login,
};
