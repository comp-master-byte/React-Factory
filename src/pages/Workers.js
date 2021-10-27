import React from 'react'
import { Images } from '../components/Images'
import Slider from 'react-slick'
import { WorkerItem } from '../components/WorkerItem'

const Workers = () => {
    const settings = {
        dots: false,
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
        <div className="worker">
            <div className="worker-content">
                <div className="container">
                    <h2>Сотрудники о заводе</h2>
                </div>
                <div className="worker-content--element">
                    <Slider {...settings}>
                        {WorkerItem.map((item) => {
                            return (
                                <div key={item.id} className="slider-worker">
                                    <div className="slider-worker--image">
                                        <img src={item.image} alt="" />
                                    </div>
                                    <div className="slider-worker--text">
                                        <h4>{item.name}</h4>
                                        <p>{item.firstInfo}</p>
                                        <p>{item.lastInfo}</p>
                                    </div>
                                </div>
                            )
                        })}
                        {WorkerItem.map((item) => {
                            return (
                                <div key={item.id} className="slider-worker">
                                    <div className="slider-worker--image">
                                        <img src={item.image} alt="" />
                                    </div>
                                    <div className="slider-worker--text">
                                        <h4>{item.name}</h4>
                                        <p>{item.firstInfo}</p>
                                        <p>{item.lastInfo}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default Workers
