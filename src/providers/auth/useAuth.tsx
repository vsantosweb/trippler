import React from 'react'

export default function useAuth(){
    
    const [user, setUser] = React.useState<object>();


    return { user };
}