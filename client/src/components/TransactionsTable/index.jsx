import { Container } from './styles';
import React from 'react'

export function TransactionsTable({ transactions }) {
    return (
        <Container>
            <thead>
                <tr>
                    <th>Título</th>
                    <th>Valor</th>
                    <th>Categoria</th>
                    <th>Data</th>
                </tr>
            </thead>
            <tbody>
                {
                    transactions.map(e => (
                        <tr key={e._id}>

                            <td>{e.title}</td>

                            <td className={`${e.debit ? "out" : "in"}`}>
                                {
                                    new Intl.NumberFormat("pt-BR", {
                                        style: "currency",
                                        currency: "BRL"
                                    }).format(e.price)
                                }
                            </td>

                            <td>{e.tag}</td>

                            <td>
                                {
                                    new Intl.DateTimeFormat("pt-BR").format(
                                        new Date(e.date)
                                    )
                                }
                            </td>

                        </tr>
                    ))
                }
            </tbody>
        </Container>
    )
}
