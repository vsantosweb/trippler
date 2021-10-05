import ApiServer from "..";

export  default async function Trips(request, response) {
    const { data } = await ApiServer(request).get('/client/public/trip/schedule/categories');
    response.json(data);
}

