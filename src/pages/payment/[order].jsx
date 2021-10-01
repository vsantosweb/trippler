import React from 'react'
import withAuth from '../../utils/withAuth'
import ApiServer from '../api';
import getOrder from '../api/orders/[code]'


export async function getServerSideProps({ req, query }) {


    const { data } = await getOrder(req, query.order);

    return { props: { order: data } }
}
function Payment({layout, order}) {
    console.log(order)
    React.useEffect(() => { layout('AppLayout') })
    return (
        'payment'
    )
}

export default withAuth(Payment);