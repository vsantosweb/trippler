import React from 'react'
import pagarme from "pagarme";
import Input from '../../_Elements/Input';
import { useForm } from 'react-hook-form';
import moment from 'moment';
import IMask from 'imask';

export const useCreditCard = () => {

    let credCardData = {};

    const getData = (data) => {
        credCardData = data;
    }

    return { creditCardData }
}


export default function CreditCard({ order, validFields }) {

    const [installments, setInstallments] = React.useState([]);
    const [data, setData] = React.useState(null);

    const { register, getValues, watch, formState: { isValid } } = useForm({ mode: 'onChange' });

    React.useEffect(() => {

        pagarme.client.connect({ api_key: 'ak_test_7ZdqNZE9QSlamtPbi5v030vmN1v1vj' }).then((client) =>
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

    }, []);

    React.useEffect(() => {

        IMask(document.getElementById('card_number'), { mask: '0000 0000 0000 0000' });

        let monthPattern = watch('expiration_month').length === 1 && '0' + watch('expiration_month');

        let yearPattern = watch('expiration_year').split(0, 2)[1]

        let cardData = { ...watch(), card_expiration_date: monthPattern + yearPattern }

        let { card: { card_cvv, card_holder_name, card_number, card_expiration_date } } = pagarme.validate({ card: cardData });

        let creditCardIsValid = [card_cvv, card_holder_name, card_number, card_expiration_date].every(value => value);

        validFields(isValid && creditCardIsValid, { ...getValues() });

        if (isValid && creditCardIsValid) {
            pagarme.client
                .connect({ api_key: "ak_test_7ZdqNZE9QSlamtPbi5v030vmN1v1vj" })
                // .then((client) => client.cards.create(card))
                .then((card) => validFields(isValid && creditCardIsValid, { ...cardData }));
        }


    }, [watch()]);

    const makeExpirationSelect = () => {

        let months = [], years = [];
        for (let i = 1; i <= 12; i++) { months.push(i) }
        for (let i = new Date().getFullYear(); i <= new Date().getFullYear() + 20; i++) { years.push(i) }

        return { months, years }
    }


    return (
        <div >
            <Input placeholder={'Ex: João Pedro'} {...register('card_holder_name', { required: true })} label={'Nome do titular'} />

            <Input id={'card_number'} {...register('card_number', { required: true })}
                label={'Número do Cartão'}
                type={'tel'}
                placeholder={'0000 0000 0000 0000'} />

            <h4>Data de expiração</h4>
            <div style={{ display: 'flex', gap: '10px', width: '100%' }}>
                <label style={{  width: '100%' }}>Mês <select {...register('expiration_month', { required: true })}> {makeExpirationSelect()?.months?.map(month => <option key={month} value={month}>{month}</option>)}</select></label>
                <label style={{  width: '100%' }}>Ano <select {...register('expiration_year', { required: true })}> {makeExpirationSelect()?.years?.map(year => <option key={year} value={year}>{year}</option>)}</select></label>
            </div>
            <Input {...register('card_cvv', { required: true, maxLength: 3 })} label={'CVV'} type={'tel'} maxLength={3} placeholder={'123'} />
            <label>Parcelas</label>
            <select {...register('installments', { required: true, value: 1 })} >
                {installments?.map((item, key) => (
                    <option key={key} defaultValue={1} value={item.installment}>
                        {`${item.installment}x ${new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL", }).format((item.installment_amount / 100).toFixed(2))}`}
                    </option>
                ))}
            </select>
        </div>
    )
}

