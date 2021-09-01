import React from 'react';
import { GetServerSideProps  } from "next";
import { AuthContext } from "./providers/AuthProvider";
import useAuth from './providers/auth/useAuth';



export function session(context: GetServerSideProps){
    console.log(context)
}