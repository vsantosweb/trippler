import React from 'react'
import Result from '../../../resources/components/Result'
import Button from '../../../resources/components/_Elements/Button'
import withAuth from '../../../utils/withAuth'
import getOrder from '../../api/orders/[code]'


export async function getServerSideProps(ctx) {
    console.log(ctx.query, 'QUERY')

    const { data } = await getOrder(ctx.req, ctx.query.order);

    if (data.status !== 2) {
        const { res } = ctx

        res.writeHead(301, { Location: '/' })
        res.end()

        return true
    }

    return { props: { order: data } }

}
function PaymentSuccess({ layout, order }) {

    React.useEffect(() => layout('AppLayout'))
    return (
        <div style={{ height: '100%', display: 'flex', alignItems: 'center', padding: '.8em' }}>
            <Result
                title={'Tudo certo, Bora pra Trip! Reserva Nº ' + order.code}
                icon={<i  className={'las la-check'}></i>}
                subTitle={'Sua reserva foi feita com sucesso, em breve você reberá novas instruções.'}
                extra={[<Button key={0} href={'/account/orders'} color={'primary'}>Minhas Reservas</Button>, <Button key={1} variant={'outlined'} color={'secondary'}>Início</Button>]}
            />
        </div>
    )
}

export default withAuth(PaymentSuccess)