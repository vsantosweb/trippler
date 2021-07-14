import React from 'react';
import useSession from './useSession';

const SessionContext = React.createContext();

const SessionProvider = ({ children }) => {

  const { rendering, authenticated, signIn, signOut, user, verifyEmail, startSession, authSession } = useSession();

  return (
    <SessionContext.Provider value={{ rendering, authenticated, signIn, signOut, user, verifyEmail, startSession }}>
      {children}
    </SessionContext.Provider>
  )
}


export { SessionContext, SessionProvider }