import Head from 'next/head'
import Image from 'next/image'
import {Inter} from 'next/font/google'
import React, {useEffect} from "react";
import Router from "next/router";

const inter = Inter({subsets: ['latin']})

export default function Home() {
    useEffect(() => {
        Router.push("/Home");
    }, []);
    return (
        <>
        </>
    )
}
