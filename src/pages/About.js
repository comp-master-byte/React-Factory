import React from 'react'
import Slider from 'react-slick'
import { Images } from '../components/Images'
import { SliderItem } from '../components/SliderItem'

const About = () => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2,
        arrows: false,
        responsive: [
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              }, 
                breakpoint: 500,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
              }
            }
          ]
      };
    return (
        <div className="about">
            <div className="container">
                <div className="about-content">
                    <div className="about-content--title">
                        <div className="about-content--title__image">
                            <img src={Images[0].image} alt="" />
                        </div>
                        <div className="about-content--title__text">
                        Акционерное общество — судостроительное предприятие в Санкт-Петербурге. Является частью Объединённой судостроительной корпорации. Завод был основан 1 мая 1856 года петербургским купцом Матвеем Карром и инженером-механиком императорской яхты «Невка» Марком Макферсоном.
                        </div>
                    </div>
                    <div className="about-content--info">
                        <h2>Новости компании</h2>
                        <div className="about-content--info_box">
                            <Slider {...settings}>
                                {SliderItem.map((item, index) => {
                                    return (
                                        <div key={index} className="slider-item">
                                            <div className="slider-item__image">
                                                <img src={item.image} alt="" />
                                            </div>
                                            <div className="slider-item__text">
                                                <label>{item.date}</label>
                                                <p>{item.description}</p>
                                            </div>
                                        </div> 
                                    )
                                })}
                                {SliderItem.map((item, index) => {
                                    return (
                                        <div key={index} className="slider-item">
                                            <div className="slider-item__image">
                                                <img src={item.image} alt="" />
                                            </div>
                                            <div className="slider-item__text">
                                                <label>{item.date}</label>
                                                <p>{item.description}</p>
                                            </div>
                                        </div> 
                                    )
                                })}
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About

{/* */}