'use client' 
import React from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';

const Login = () => {
    const { data: session } = useSession();

    if (session) {
        return (
            <>
                Signed in as {session?.user?.email} <br />
                <button onClick={() => signOut()}>Sign Out</button>
            </>
        );
    }

    return (
        <div>
         
            <button  color='success' onClick={() => signIn()}>Sign In</button>
        </div>
    );
};

export default Login;
