import sql from "mssql";
import config from "../db/config.js";

//get all users
export const getData = async (req, res) => {
    try {
      let pool = await sql.connect(config.sql);
      const result = await pool.request().query("SELECT * FROM Users");
      res.status(200).json(result.recordset);
    } catch (error) {
      res.status(500).json({ message: error.message });
    } finally {
      sql.close();
    }
  };