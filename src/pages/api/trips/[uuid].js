import Axios from "axios"
import api from "../../../api";

export  default async function ShowTrip(request, response) {
    const { data } = await api.get('/client/public/trip/schedule/'+ request.query.uuid);
    response.json(data);
}

