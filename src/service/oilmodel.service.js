import axios from "axios";

const API_URL = 'https://daripodushki.ru/api/oil-model-calc/';


class OilModelService {
    async getModelDataFromApi(){
        return await axios.get(API_URL)
    }
}

export default new OilModelService();