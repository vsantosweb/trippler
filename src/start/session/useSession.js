import React from 'react';
import api from '../../api';
import Cookie from 'js-cookie';
import auth from '../../config/auth';
import { trackPromise } from 'react-promise-tracker';


export default function useSession() {

  const [authenticated, setAuthenticated] = React.useState(false);
  const [rendering, setRendering] = React.useState(true);
  const [verifyEmail, setVerifyEmail] = React.useState(false);
  const [user, setUser] = React.useState({});
  const [authSession, setAuthSession] = React.useState(false);

  React.useEffect(() => {

    const token = Cookie.get('token');

    token ? (async () => {


      api.defaults.headers.Authorization = `Bearer ${token}`

      await api.get(auth.authenticatedUrl).then(response => {

        setUser(response.data.data);
        setAuthenticated(true)
        setRendering(false)

      }).catch(error => {

        if (error.response.data.error && error.response.data.type === 'MAIL_VERIFY') {

          setAuthenticated(true)
          setVerifyEmail(true)
          setRendering(false)
          return false;

        }
      });

    })()
      : setRendering(false)

  }, [authenticated, authSession])


  const startSession = async (token) => {

    api.defaults.headers.Authorization = `Bearer ${token}`

    api.get(auth.authenticatedUrl).then(response => {

      setUser(response.data.data);
      Cookie.set('token', token);

    }).catch(error => {

      if (error.response.data.error && error.response.data.type === 'MAIL_VERIFY') {
        return setVerifyEmail(true)
      }

    });

  }

  const signIn = (credentials) => {

    const data = api.post(auth.authURL, credentials)
      .then((response) => {
        Cookie.set('token', response.data.data);
        setAuthenticated(true)
        return response.data

      }).catch(error => error.response)
    trackPromise(data, 'signIn')
    return data;

  }
  const signOut = () => {
    setAuthenticated(false);
    Cookie.remove('token');
    api.defaults.headers.Authorization = undefined;
    
  }

  return { rendering, authenticated, signIn, signOut, user, verifyEmail, startSession };
}