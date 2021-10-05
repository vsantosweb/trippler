import React from 'react'
import Result from '../../resources/components/Result'
import Button from '../../resources/components/_Elements/Button'
import withAuth from '../../utils/withAuth'

function PaymentSuccess({ layout }) {

    React.useEffect(() => layout('AppLayout'))
    return (
        <div style={{ height: '100%', display: 'flex', alignItems: 'center', padding: '.8em' }}>
            <Result
                title={'Tudo certo, Bora Viajar!'}
                icon={[<i className={'las la-check'}></i>]}
                subTitle={'Sua reserva foi feita com sucesso, em breve você reberá novas instruções'}
                extra={[<Button color={'primary'}>Minhas Reservas</Button>, <Button variant={'outlined'} color={'secondary'}>Início</Button>]}
            />
        </div>
    )
}

export default PaymentSuccess