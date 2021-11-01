import React from 'react'
import {Images} from '../components/Images'
import  {sliderComponent}  from '../components/sliderComponent'
import Slider from 'react-slick'

export const Event = () => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false
      };
    return (
        <div className="event">
            <div className="event-content">
                <div className="container">
                    <div className="event-content--info">
                        <h2>Работа у нас</h2>
                        <b>Балтийский завод - опыт инновации</b>
                    </div>
                    <Slider {...settings}>
                        <div className="event-content--cover">
                            <div className="event-content--slider">
                                <div className="slider-image">
                                    <img src={Images[9].image} alt="" />
                                </div>
                                <div className="slider-text">
                                    <h4>Конкурсы профессионального мастерства</h4>
                                    <p>Блеснуть своими знаниями и посоревноваться можно на ежегодных конкурсах профессионального мастерства. Победители и призеры конкурса получают денежные призы, а также возможность повысить свой квалификационный разряд.</p>
                                </div>
                            </div>
                        </div>
                        <div className="event-content--cover">
                            <div className="event-content--slider">
                                <div className="slider-image">
                                    <img src={Images[9].image} alt="" />
                                </div>
                                <div className="slider-text">
                                    <h4>Конкурсы профессионального мастерства</h4>
                                    <p>Блеснуть своими знаниями и посоревноваться можно на ежегодных конкурсах профессионального мастерства. Победители и призеры конкурса получают денежные призы, а также возможность повысить свой квалификационный разряд.</p>
                                </div>
                            </div>
                        </div>
                        <div className="event-content--cover">
                            <div className="event-content--slider">
                                <div className="slider-image">
                                    <img src={Images[9].image} alt="" />
                                </div>
                                <div className="slider-text">
                                    <h4>Конкурсы профессионального мастерства</h4>
                                    <p>Блеснуть своими знаниями и посоревноваться можно на ежегодных конкурсах профессионального мастерства. Победители и призеры конкурса получают денежные призы, а также возможность повысить свой квалификационный разряд.</p>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    )
}
