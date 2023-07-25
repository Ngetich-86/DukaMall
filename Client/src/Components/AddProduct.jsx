import axios from "axios";
export const addProduct = async () =>{
    const res = await axios.post("http://localhost:8080/addProduct");
    return res;


}