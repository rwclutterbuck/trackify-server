const { Router } = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const auth = require("../controllers/Auth");

Router.post("/register", auth.register);

Router.post("/login", auth.login);
