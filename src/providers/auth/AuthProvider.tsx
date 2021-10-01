import React, { useState, createContext, useEffect } from 'react';
import api from '../../api';
import Cookie from 'js-cookie';

type User = {
    name: string,
    email: string
}

type SignInCredentials = {
    email: string;
    password: string;
}

type AuthContentType = {

    authenticated: boolean;
    user: User;
    _rendering: boolean;
    signIn: (data: SignInCredentials) => Promise<void>
    signOut: () => void
}

export const AuthContext = createContext({} as AuthContentType);


export function AuthProvier({ children }) {

    const [user, setUser] = useState<User | null>(null);

    const [_rendering, setRendering] = React.useState<boolean>(true);

    const authenticated = !!user;

    const [update, setUpdate] = React.useState<number>();

    useEffect(() => {
        (async () => {

            const token = await Cookie.get('token');

            if (token) {

                // api.defaults.headers.Authorization = `Bearer ${token}`

                await api.get('/client/customer/auth/logged')
                    .then(response => {
                        setUser(response.data.data)
                        setRendering(false);

                    })
                    .catch(error => {
                        setRendering(false)
                        setUser(null)
                    })
            }
            setRendering(false)

        })()
    }, [authenticated, update])

    const _watch = () => setUpdate(Math.random())

    async function signIn({ email, password }: SignInCredentials) {

        const { data } = await api.post('/client/customer/auth/login', { email, password })
            .then(response => response.data)
            .catch(error => error.response);

        if (data.error) return data

        Cookie.set('token', data);
        return data;

    }

    async function signOut({ email, password }: SignInCredentials) {

        const token = await Cookie.get('token');

        // return console.log(token, 'XARALAUS')
        api.defaults.headers.Authorization = `Bearer ${token}`

        await api.post('/client/customer/auth/logout')
            .then(response => response.data)
            .catch(error => error.response);

        await Cookie.remove('token');

        setUser(null)

    }

    async function signUp(signUpData: any) {

        const { data } = await api.post('/client/customer/auth/register', signUpData)
            .then(response => response.data)
            .catch(error => error.response);

        if (data.error) return data

        Cookie.set('token', data);

        return data;
    }

    async function socialLogin(credentials: any) {

        let signData = {
            email: credentials.email,
            auth_provider: credentials.auth_provider,
            provider_id: credentials.provider_id,
            name: credentials.name,
            avatar: credentials.avatar
        }

        const { data } = await api.post('/client/customer/auth/social-login', signData)
            .then(response => response.data)
            .catch(error => error.response);

        if (data.error) return data

        Cookie.set('token', data);

        return data;

    }

    return <AuthContext.Provider value={{
        authenticated,
        signIn,
        socialLogin,
        signOut,
        user,
        _rendering,
        signUp,
        _watch
    }}>
        {children}
    </AuthContext.Provider>
}