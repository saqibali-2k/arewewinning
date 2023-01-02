import React from "react";
import {useSession, signIn, signOut} from 'next-auth/react';

const Login = () => {
    const {data: session} = useSession()
    
    return (
        <>
            {
                session ?
                <div>
                    <p>Welcome, {session.user?.email}</p>
                    <button onClick={() =>
                        signOut()
                    }>Sign out</button>
                </div>
                :
                <div>
                    <p>Log in below.</p>
                    <button onClick={() =>
                        signIn()
                    }>Sign In</button>
                </div>
            }
        </>
    );
};

export default Login;