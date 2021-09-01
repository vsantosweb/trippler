import React from 'react'
import { useForm } from 'react-hook-form'
import { AuthContext } from '../../../providers/auth/AuthProvider'
import Button from '../../../resources/components/_Elements/Button'
import Input from '../../../resources/components/_Elements/Input'
import AuthLayout from '../../../resources/layouts/AuthLayout'
import withAuth from '../../../utils/withAuth';

function Login() {

    const { handleSubmit, register, formState: { isValid } } = useForm({ mode: onchange });
    const { signIn, _watch } = React.useContext(AuthContext);
    const [errorMessage, setErrorMessage] = React.useState(null);

    const submitCredentials = async (credentials) => {

        await signIn(credentials).then(response => {
            if (response.error) {
                setErrorMessage(response.message)
            }
        })
        _watch()

    }
    return (
        <AuthLayout>
            <form onSubmit={handleSubmit(submitCredentials)}>
                <Input label={'Email'} placeholder={'Email, nome ou telefone celular'}
                    {...register('email', { required: true })}
                />
                <Input label={'Senha'} placeholder={'Insira sua senha'} type={'password'}  {...register('password', { required: true })} />
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div> Lembrar de mim</div>
                    <div>Esqueci minha senha</div>
                </div>
                <p>
                    <small>
                        Ao registrar uma conta na tripler.com.br, confirmo que li e concordei com
                        <a href="https://pages.trip.com/service-guideline/terms-pt-br.html" target="_blank"> Termos e condições</a> e
                        <a href="https://pages.trip.com/service-guideline/privacy-policy-pt-br.html" target="_blank"> Declaração de Privacidade</a>
                        da tripler.com.br
                    </small>
                </p>
                <Button style={{ width: '100%' }} color={"primary"} icon>Entrar <i className={'las la-arrow-right'}></i></Button>
                <p style={{ color: 'red' }}>{errorMessage}</p>

                <p>Não tem uma conta na Tripler?</p>
                <Button style={{ width: '100%' }} color={"secondary"} icon>Registre-se <i className={'las la-arrow-right'}></i></Button>

            </form>
        </AuthLayout>
    )
}

export default withAuth(Login)