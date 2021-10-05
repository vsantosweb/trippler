import Axios from "axios"
import ApiServer from "..";
import api from "../../../api";

export  default async function ShowTrip(request, response) {
    const { data } = await ApiServer(request).get('/client/public/trip/schedule/'+ request);
    response.json(data);
}

