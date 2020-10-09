import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import css from './Modal.module.scss';
import Validator from 'Validator';
import Authenticate from '../../../api/Auth/Athenticate';
import { setUserProfile } from '../../../store/customer/customerAction';

export const ModalLogin = ({ visible, handleClose }) => {

    const [openModal, setOpenModal] = useState(false);
    const [test, setTest] = useState(false);
    const [formFeedBack, setFormFeedBack] = useState({});
    const [disableSubmit, setDisableSubmit] = useState(false);
    const [formData, setFormData] = useState({ email: 'john@doe.com', password: 'password' });

    const dispatch = useDispatch();

    const formRules = (formData) => (Validator.make(formData, { email: 'required', password: 'required' }));

    const handleInput = (e) => {

        let json = Object.assign({}, formData);
        json[e.target.name] = e.target.value;
        setFormData(json);

        let validator = formRules(json);
        if (validator.fails()) {
            console.log(validator.getErrors())
            setDisableSubmit(true);

            return setFormFeedBack({ [e.target.name]: validator.getErrors()[e.target.name] })
        }

        setDisableSubmit(false);
        setFormFeedBack(false);

    }
    const handleSubmit = (e) => {

        e.preventDefault();
        e.persist();

        let validator = formRules(formData);
        let fails = Object.assign({}, formFeedBack);

        if (validator.fails()) {

            const fieldErrors = Object.keys(validator.getErrors());

            for (let field of fieldErrors) {
                fails[field] = validator.getErrors()[field];
            }
            setFormFeedBack(fails);
            return;
        }
        Authenticate.signIn(formData).then((response) => {

            if (response.error) {

                setFormFeedBack({ invalidCredentails: response.message });
                return e.target.reset()
            }

            console.log(response, 'hahaha')

            Authenticate.logged().then(response => {
                handleClose()
                dispatch(setUserProfile(Authenticate.getUser()))
            })
        });

    }
    if (visible) {
        return (
            <div className={css.customModal}>
                <div className={css.modalWrapper}>
                    <div className={css.loginContainer}>
                        <h3>Login</h3>
                        <button onClick={handleClose}>X</button>
                        <form onSubmit={handleSubmit} className={css.modalLogin}>
                            <div className={'form-row'}>
                                <div className={'form-group col-md-12'}>
                                    <label>Email</label>
                                    <input defaultValue={formData.email} onChange={handleInput} name={'email'} type={'text'} className={'form-control'} />
                                    {formFeedBack ? <small>{formFeedBack.email}</small> : ''}
                                </div>
                                <div className={'form-group col-md-12'}>
                                    <label>Senha</label>
                                    <input defaultValue={formData.password} onChange={handleInput} name={'password'} type={'password'} className={'form-control'} />
                                    {formFeedBack.password ? <small>{formFeedBack.password}</small> : ''}
                                    {formFeedBack.invalidCredentails ? <small>{formFeedBack.invalidCredentails} </small> : ''}
                                </div>
                                <div className={'form-group col-md-12'}>
                                    <button disabled={disableSubmit} className={'btn btn-info btn-block'}>Acessar</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    } else {
        return ('')
    }

}

