import ApiServer from "..";

export default async function handleStore(req, res) {

    const { data: { data } } = await ApiServer(req).post('/client/customer/orders', req.body);

    res.json({ order: data.code })

}
