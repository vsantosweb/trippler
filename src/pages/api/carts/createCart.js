import ApiServer from "..";

export default async function createCart(req, res) {

    const { data } = await ApiServer(req).post('/client/customer/carts', req.body);

    res.json(data);

}
