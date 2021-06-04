import React from 'react'
import { Container } from './styles';
import Slider from 'react-slick';
import { BoxFinance } from '../BoxFinance';

import income from '../../assets/income.svg';
import outcome from '../../assets/outcome.svg';
import total from '../../assets/total.svg';


export function Carousel() {

    const settingsCarousel = {
        dots: false,
        infinite: true,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <Container>

            <Slider {...settingsCarousel}>
                <div>
                    <BoxFinance title="Entradas" icon={income} value="17.400" />
                </div>

                <div>
                    <BoxFinance title="Saídas" icon={outcome} value="1.259" />
                </div>

                <div>
                    <BoxFinance title="Total" icon={total} value="16.141" isHightlight={true} />
                </div>

            </Slider>

        </Container>
    );
}