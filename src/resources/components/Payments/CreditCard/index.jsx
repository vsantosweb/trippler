import React from 'react'
import pagarme from "pagarme";
import Input from '../../_Elements/Input';
import { useForm, Controller } from 'react-hook-form';
import InputMask from 'react-input-mask';
import moment from 'moment';

export default function CreditCard({ order, validFields }) {

    const [installments, setInstallments] = React.useState([]);
    const [expirationSelect, setExpirationSelect] = React.useState({})
    const { control, register, watch, formState: { isValid } } = useForm({ mode: 'onChange' });

    validFields(isValid)
    React.useEffect(() => {
        let test = pagarme.client.connect({ api_key: 'ak_test_7ZdqNZE9QSlamtPbi5v030vmN1v1vj' }).then((client) =>
            client.transactions.calculateInstallmentsAmount({
                id: order.code,
                max_installments: 6,
                free_installments: 3,
                interest_rate: 10,
                amount: parseInt(order.total * 100),
            })).then((response, key) => {
                let items = [];
                for (let key in response.installments) {
                    items.push(response.installments[key]);
                }
                setInstallments(items);
            });

        let {
            card: {
                card_holder_name,
                card_number,
                card_expiration_date,
                card_cvv
            }
        } = pagarme.validate({ card: watch() });
        makeExpirationSelect()
    }, [watch]);

    const makeExpirationSelect = () => {

        let months = [];
        let years = [];
        for (let i = 1; i <= 12; i++) { months.push(i) }
        for (let i = new Date().getFullYear(); i <= new Date().getFullYear() + 20; i++) { years.push(i) }

        setExpirationSelect({ months, years })
    }

    console.log(expirationSelect, 'asokdsoa')
    // teste = years.call(() => moment().format('YYYY') + 1)

    return (
        <div >
            <Input {...register('card_holder_name', { required: true })} label={'Nome do titular'} />

            <Input {...register('card_number', { required: true })}
                label={'Número do Cartão'}
                inputMode={'numeric'}
                type={'tel'}
                placeholder={'0000 0000 0000 0000'} />

            {/* <Input {...register('card_expiration_date', { required: true })}
                label={'Expiração'}
                inputMode={'numeric'}
                type={'tel'}
                placeholder={'30/21'} /> */}
            <label>Data de expiração</label>
            <div style={{ display: 'flex' }}>
                <select> {expirationSelect?.months?.map(month => <option value={month}>{month}</option>)}</select>
                <select> {expirationSelect?.years?.map(year => <option value={year}>{year}</option>)}</select>
            </div>

            <Input {...register('card_cvv', { required: true })}
                label={'CVV'}
                type={'tel'}
                placeholder={'123'} />


            <select type={"text"} name={"installments"} className={"form-control"} onChange={'handleCreditCard'} defaultValue={1} >
                {installments?.map((item, key) => (
                    <option key={key} value={item.installment} defaultValue={1}>
                        {`${item.installment}x ${new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL", }).format((item.installment_amount / 100).toFixed(2))}`}
                    </option>
                ))}
            </select>
        </div>
    )
}

