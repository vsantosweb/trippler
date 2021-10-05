import ApiServer from "..";

export default async function getOrder(req, response) {

    const { data } = await ApiServer(req).get('/client/customer/orders/' + response);
    
    return data;

}
