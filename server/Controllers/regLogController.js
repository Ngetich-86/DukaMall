import sql from "mssql";
import config from "../db/config.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// loginRequired
export const loginRequired = (req, res, next) => {
  if (req.user) {
    next();
  } else {
    return res.status(401).json({ message: "Unauthorized user!" });
  }
};

// register user
export const registerUser = async (req, res) => {
  const { userName, email, password, fullName, phoneNumber, postalCode, city } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 10);
  console.log(userName, email, hashedPassword);
  try {
    // if user already exists
    let pool = await sql.connect(config.sql);
    let result = await pool
      .request()
      .input("userName", sql.VarChar, userName)
      .input("email", sql.VarChar, email)
      .query(
        "SELECT * FROM Users WHERE userName = @userName OR email = @email"
      );
    const user = result.recordset[0];
    if (user) {
      return res.status(409).json({ error: "User already exists" });
    } else {
      // if user does not exist
      await pool
        .request()
        .input("fullName", sql.VarChar, fullName)
        .input("userName", sql.VarChar, userName)
        .input("email", sql.VarChar, email)
        .input("phoneNumber", sql.VarChar, phoneNumber)
        .input("postalCode", sql.VarChar, postalCode)
        .input("city", sql.VarChar, city)
        .input("hashedPassword", sql.VarChar, hashedPassword)
        .query(
          "INSERT INTO users (fullName, userName, email, phoneNumber, postalCode, city, hashedPassword) VALUES (@fullName, @userName, @email, @phoneNumber, @postalCode, @city, @hashedPassword)"
        );
      res.status(200).json({ message: "User created successfully" });
    }
  } catch (error) {
    res.status(409).json(error.message);
  } finally {
    sql.close();
  }
};

// login user
export const loginUser = async (req, res) => {
  const { email, password } = req.body; // destructuring
  try {
    let pool = await sql.connect(config.sql);
    let result = await pool
      .request()
      .input("email", sql.VarChar, email)
      .query("SELECT * FROM Users WHERE email = @email");
    const user = result.recordset[0];
    if (!user) {
      return res.status(401).json({ message: "User does not exist" });
    } else {
      if (!bcrypt.compareSync(password, user.hashedPassword)) {
        return res.status(401).json("Incorrect password");
      } else {
        // create token
        const token = `JWT ${jwt.sign(
          {
            email: user.email,
            user_id: user.user_id,
            userName: user.userName,
          },
          config.jwt_secret,
          { expiresIn: "1h" }
        )}`;
        res.status(200).json({
          email: user.email,
          user_id: user.user_id,
          token: token,
        });
      }
    }
  } catch (error) {
    res.status(409).json(error.message);
  } finally {
    sql.close();
  }
};
