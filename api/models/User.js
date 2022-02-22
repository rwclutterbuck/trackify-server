const { init } = require("../initdb");
//const { ObjectId } = require("mongodb");

class User {
  constructor(data) {
    this.username = data.username;
    this.email = data.email;
    this.passwordHash = data.password_hash;
    this.lastLogin = data.time;
  }

  static get all() {
    return new Promise(async (res, rej) => {
      try {
        const db = await init();
        const allUsers = await db.collection("users").find().toArray();
        const users = allUsers.map((d) => new User(d));
        res(users);
      } catch (err) {
        console.log(err);
        rej("Error retrieving dogs");
      }
    });
  }

  static create({ username, email, password }) {
    return new Promise(async (res, rej) => {
      try {
        const db = await init();
        await db.collection("users").insertOne({
          username,
          email,
          password,
        });
        res("User created");
      } catch {
        rej("Error creating new User");
      }
    });
  }

  static findByEmail({ email }) {
    return new Promise(async (res, rej) => {
      try {
        const db = await init();
        const userData = await db
          .collection("users")
          .find({ email: email })
          .toArray();
        const user = new User(userData[0]);
        res(user);
      } catch {
        rej("User not found");
      }
    });
  }
}

module.exports = User;
