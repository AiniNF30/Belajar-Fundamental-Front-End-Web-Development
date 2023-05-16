import axios from "axios";

class DataSource {
    static searchFood(query) {
        return axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
    }

    static getAllCategories(){
        return axios.get("https://www.themealdb.com/api/json/v1/1/search.php?s=Beef")
    }
}


export default DataSource;
