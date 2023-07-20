import sql from "mssql";
import config from "../db/config.js";



export const addProduct = async (req, res) => {
    const { title,price,category, description, image} = req.body;

    try{
        let pool = await sql.connect(config.sql)

        //insert the product into the database
        const result = await pool.request()
            .input('title', sql.VarChar, title)
            .input('category', sql.Int, category)
            .input('description', sql.VarChar, description)
            .input('price', sql.VarChar, price)
            .input('image', sql.VarChar, image)
            // .output('errorMessage', sql.VarChar(100))
            
            .query('insert into products (title, category, description, price, image) values (@title,@description, @price, @image,@category)');
            result.output.errorMessage ? res.status(400).json({ message: result.output.errorMessage }) :
            res.status(200).json({ message: 'product added successfully' });
    } catch (error) {
        res.status(201).json({ error: error.message });
        console.log(error)
    }
    finally {
        sql.close(); 
    }
    }
    

//=================================get all products=================================
export const getProducts = async (req, res) => {
    try {
        let pool = await sql.connect(config.sql);
        const result = await pool.request().query("select * from products");
        res.status(200).json(result.recordset);
    } catch (error) {
        res.status(201).json({ error: error.message });
        console.log(error);
    } finally {
        sql.close();
    }
}


//============================delete product=================================
export const deleteProduct = async (req, res) => {
    const { id } = req.params;
    try {
        let pool = await sql.connect(config.sql);
        const result = await pool.request()
            .input('id', sql.Int, id)
            .query('delete from products where id = @id');
        res.status(200).json({ message: 'product deleted successfully' });
    } catch (error) {
        res.status(201).json({ error: error.message });
        console.log(error);
    } finally {
        sql.close();
    }
}