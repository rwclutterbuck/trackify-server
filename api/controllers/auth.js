const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const secret = process.env.SECRET;

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

async function login(req, res) {
  try {
    const user = await User.findByEmail(req.body.email);
    if (!user) new Error("Invalid login credentials");

    const checkUser = await bcrypt.compare(req.body.password, user.password);
    if (!checkUser) new Error("Invalid login credentials");

    const payload = {
      UserId: user.UserId,
      username: user.username,
      email: user.email,
    };

    function sendToken(err, token) {
      if (err) throw new Error("Error in token generation");
      res.status(200).json({
        success: true,
        token: `Bearer ${token}`,
      });
    }
    jwt.sign(payload, secret, { expiresIn: "30 days" }, sendToken);
  } catch (err) {
    console.log(`
##########################
Error authenticating user: ${req.body.email}
##########################
    `);
    res.status(401).json({ err });
  }
}

module.exports = {
  register,
  login,
};
