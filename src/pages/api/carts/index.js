import api from "../../../api"

export async function createCart(request, res) {


    // const { data } = await ApiServer(req).post('/client/customer/carts', request);
    console.log(res, 'CARALHO!')
    return request;
}

import ApiServer from "..";

export async function getCart({ req, res, query }) {
    
    return await ApiServer(req).get('/client/customer/carts/' + query.session);

}
