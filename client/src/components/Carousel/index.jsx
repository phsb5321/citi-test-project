import { BoxFinance } from '../BoxFinance';
import { Container } from './styles';
import React from 'react'
import Slider from 'react-slick';
import income from '../../assets/income.svg';
import outcome from '../../assets/outcome.svg';
import total from '../../assets/total.svg';

export function Carousel({ transactions }) {

    const settingsCarousel = {
        dots: false,
        infinite: true,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    const finances = transactions.reduce((acc, transaction) => {
        if (transaction.debit) {
            acc.outcome += transaction.price
            acc.total -= transaction.price
        }
        else {
            acc.income += transaction.price
            acc.total += transaction.price
        }

        return acc
    }, { income: 0, outcome: 0, total: 0 })

    console.log(finances.total)

    return (
        <Container>

            <Slider {...settingsCarousel}>
                <div>
                    <BoxFinance
                        title="Entradas"
                        icon={income}
                        value={finances.income} />
                </div>

                <div>
                    <BoxFinance
                        title="Saídas"
                        icon={outcome}
                        value={finances.outcome} />
                </div>

                <div>
                    <BoxFinance
                        title="Total"
                        icon={total}
                        value={finances.total}
                        isHightlight={true} />
                </div>

            </Slider>

        </Container>
    );
}