import sql from "mssql";
import config from "../db/config.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


//=========================================register Admin===================
export const registerAdmin = async (req, res) => {
  const { email, password } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 10);
  console.log(email, hashedPassword);
  try {
    //if user already exists
    let pool = await sql.connect(config.sql);
    let result = await pool
      .request()
      .input("email", sql.VarChar, email)
      .query(
        "SELECT * FROM Admin WHERE email = @email"
      );
    const admin = result.recordset[0];
    if (admin) {
      return res.status(409).json({ error: "Admin already exists" });
    } else {
      //if admin does not exist
      await pool
        .request()
        .input("email", sql.VarChar, email)
        .input("hashedPassword", sql.VarChar, hashedPassword)
        .query("INSERT INTO Admin (email, hashedPassword) VALUES (@email, @hashedPassword)");
      res.status(200).json({ message: "Admin created successfully" });
    }
  } catch (error) {
    res.status(409).json(error.message);
  } finally {
    sql.close();
  }
};




export const adminLogin = async (req, res) => {
    const { email, password } = req.body; //destructuring
    try {
      let pool = await sql.connect(config.sql);
      let result = await pool
        .request()
        .input("Email", sql.VarChar, email)
        .query("SELECT * FROM Admin WHERE email = @email");
      const admin = result.recordset[0];
      if (!admin) {
        return res.status(401).json({ message: "Admin does not exist" });
      } else {
        if (!bcrypt.compareSync(password, admin.hashedPassword)) {
          return res.status(401).json("Incorrect password");
        } else {
          //create token
          const token = `JWT ${jwt.sign(
            { email: admin.email,
              // admin_id: admin.admin_id,
              hashedPassword: admin.hashedPassword
             },
            config.jwt_secret,
            { expiresIn: "1h" }
          )}`;
          res.status(200).json({
            email: admin.email,
            // admin_id: admin.admin_id,
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
  






