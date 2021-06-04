import React, { useEffect, useState } from 'react'

import { Carousel } from '../components/Carousel';
import { GlobalStyle } from "../styles/global"
import { Header } from '../components/Header';
import { TransactionsTable } from "../components/TransactionsTable"
import { api } from "../services/api"

export function Home() {
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        async function getTransactions() {
            try {
                api.get("/transactions")
                    .then(response => setTransactions(response.data))
            }
            catch (error) { console.log(error) }
        }
        getTransactions();
    }, [])

    return (
        <>
            <GlobalStyle />
            <Header />
            <Carousel />
            <TransactionsTable transactions={transactions} />
        </>

    );
}