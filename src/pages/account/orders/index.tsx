import moment from 'moment';
import React from 'react'
import * as Styled from './styles';

import { GetServerSideProps, GetServerSidePropsContext } from 'next';

import order from '../../payment/order.json';
import OrderList from '../../../resources/components/OrderList';
import ApiServer from '../../api';
import { Layout } from '../../../resources/layouts';

type Props = {
    layout: (layout: 'AppLayout') => void;
    orders: Object[]
}

export async function getServerSideProps<GetServerSideProps>(ctx: GetServerSidePropsContext) {     
    const { data: { data } } = await ApiServer(ctx.req).get('/client/customer/orders');

    return {
        props: {
            orders: data
        }
    }
}

export default function Orders({ layout, orders }: Props) {

    React.useEffect(() => layout('AppLayout'), [])

    return (
        <OrderList orders={orders} />
    )
}