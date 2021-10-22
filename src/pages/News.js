import React from 'react'
import { Images } from '../components/Images'

console.log(Images[1].image)

export const News = () => {
    return (
        <div className='news'>
            <div className="news-content">
                <div className="news-content--text">
                    <div className="container-special">
                        <div className="flex">
                            <h2>500</h2>
                            <p>Кораблей и судов</p>
                        </div>
                        <h3>Мы построили</h3>
                    </div>
                </div>
                <div className="news-content--image">
                    <img src={Images[2].image} alt="" />
                    <img src={Images[1].image} alt="" />
                </div>
            </div>
        </div>
    )
}
