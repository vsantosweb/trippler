import Axios from "axios";
import ApiServer from "..";
import api from "../../../api";

export default async function getOrder(req, response) {

    const { data } = await ApiServer(req).get('/client/customer/orders/' + response);
    
    return data;

}
