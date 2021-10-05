import ApiServer from "..";

export default async function handler(req, res) {

    const { data } = await ApiServer(req).get('/client/public/trip/schedule/' + req.query.uuid)

    return res.json(data);
}