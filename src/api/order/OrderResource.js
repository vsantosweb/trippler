import api from "..";

export const createOrder = async (request) => {
   return await api.post('/client/customer/orders', request)
   .then(response => response.data)
   .catch(error => error.response);
}