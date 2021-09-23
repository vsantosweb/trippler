import React from 'react'
import { useForm } from 'react-hook-form'
import { AuthContext } from '../../../providers/auth/AuthProvider'
import Button from '../../../resources/components/_Elements/Button'
import Input from '../../../resources/components/_Elements/Input'
import AuthLayout from '../../../resources/layouts/AuthLayout'
import withAuth from '../../../utils/withAuth';
import GoogleLogin from 'react-google-login';

function Register() {

    const { handleSubmit, register, formState: { isValid } } = useForm({ mode: onchange });
    const { signIn, socialLogin, _watch, signUp } = React.useContext(AuthContext);
    const [errorMessage, setErrorMessage] = React.useState(null);

    const submitCredentials = async (credentials) => {

        await signIn(credentials).then(response => {

            if (response.error) {
                setErrorMessage(response.message)
            }
        })
        _watch()

    }

    const handleSubmitRegister = data => {
        console.log(data)
    }

    const sigInWithGoogle = async ({ profileObj }) => {

        await socialLogin({

            auth_provider: 'google',
            provider_id: profileObj.googleId,
            email: profileObj.email,
            name: profileObj.name,
            avatar: profileObj.imageUrl

        });

        _watch();

    }
    return (
        <AuthLayout>
            <form onSubmit={handleSubmit(handleSubmitRegister)}>
                <Input label={'Nome'} placeholder={'Digite seu nome'}
                    {...register('name', { required: true })}
                />

                <Input label={'Email'} placeholder={'Insira seu melhor email'}
                    {...register('email', { required: true })}
                />

                <Input label={'Senha'} placeholder={'Insira sua senha'} type={'password'}  {...register('password', { required: true })} />

                <p>
                    <small>
                        Ao registrar uma conta na tripler.com.br, confirmo que li e concordei com
                        <a href="https://pages.trip.com/service-guideline/terms-pt-br.html" target="_blank"> Termos e condições</a> e
                        <a href="https://pages.trip.com/service-guideline/privacy-policy-pt-br.html" target="_blank"> Declaração de Privacidade</a>
                        da tripler.com.br
                    </small>
                </p>
                <Button style={{ width: '100%' }} color={"secondary"} icon>Concordar e Registrar-se <i className={'las la-arrow-right'}></i></Button>
                <p style={{ color: 'red' }}>{errorMessage}</p>
            </form>
            <p>Não tem uma conta na Tripler?</p>

            <Button style={{ width: '100%' }} href={'/account/login'} color={"primary"} icon>Já possuo uma conta<i className={'las la-arrow-right'}></i></Button>

            <GoogleLogin
                className={'google-button'}
                clientId="645551867105-2j5hgd2nqi052pjud5lnpv3nhi3c6eot.apps.googleusercontent.com"
                buttonText="Sign in with Google"
                onSuccess={(response) => sigInWithGoogle(response)}
                onFailure={(response) => console.log(response)}
                cookiePolicy={'single_host_origin'}
            />
        </AuthLayout>
    )
}

export default Register