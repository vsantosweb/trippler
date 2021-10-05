import ApiServer from "..";

export default async function handler(req, res) {
    console.log(req.cookies,'AAAAAAAAAAAAAAAAAAAAAAAAAAA')
    // const { data } = await ApiServer(req).get('/client/customer/carts/' + query.session);
    return res.json(req.cookies);
}
