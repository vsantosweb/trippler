import React from 'react'
import { useForm } from 'react-hook-form'
import { AuthContext } from '../../../providers/auth/AuthProvider'
import Button from '../../../resources/components/_Elements/Button'
import Input from '../../../resources/components/_Elements/Input'
import withAuth from '../../../utils/withAuth';
import GoogleLogin from 'react-google-login';

function Login({ layout }) {

    const { handleSubmit, register, formState: { isValid } } = useForm({ mode: onchange });
    const { signIn, socialLogin, _watch } = React.useContext(AuthContext);
    const [errorMessage, setErrorMessage] = React.useState(null);

    React.useEffect(() => layout('AuthLayout'));
    
    const submitCredentials = async (credentials) => {

        await signIn(credentials).then(response => {

            if (response.error) {
                setErrorMessage(response.message)
            }
        })
        _watch()

    }

    const responseGoogle = (e) => console.log(e, 'DEU RUIM')

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
                        Ao entrar, confirmo que li e concordei com
                        <a href="https://pages.trip.com/service-guideline/terms-pt-br.html" target="_blank"> Termos e condições</a> e
                        <a href="https://pages.trip.com/service-guideline/privacy-policy-pt-br.html" target="_blank"> Declaração de Privacidade</a>
                        da tripler.com.br
                    </small>
                </p>
                <Button style={{ width: '100%' }} color={"primary"} icon>Entrar <i className={'las la-arrow-right'}></i></Button>
                <p style={{ color: 'red' }}>{errorMessage}</p>

                <p>Não tem uma conta na Tripler?</p>
                <Button style={{ width: '100%' }} href={'/account/register'} color={"secondary"} icon>Registre-se <i className={'las la-arrow-right'}></i></Button>

                <GoogleLogin
                    className={'google-button'}
                    clientId="645551867105-2j5hgd2nqi052pjud5lnpv3nhi3c6eot.apps.googleusercontent.com"
                    buttonText="Sign in with Google"
                    onSuccess={(response) => sigInWithGoogle(response)}
                    onFailure={responseGoogle}
                    cookiePolicy={'single_host_origin'}
                />

            </form>
    )
}

export default withAuth(Login)