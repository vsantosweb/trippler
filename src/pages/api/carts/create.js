import ApiServer from "..";

export default async function handler(req, res) {

    console.log(req.cookies)
    const { data } = await ApiServer(req).post('/client/customer/carts', req.body);

    res.json(data);

}
