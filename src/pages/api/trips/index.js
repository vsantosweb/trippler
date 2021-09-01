import Axios from "axios"
import api from "../../../api";

export  default async function Trips(request, response) {
    const { data } = await api.get('/client/public/trip/schedule/categories');
    response.json(data);
}

