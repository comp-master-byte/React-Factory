import React from 'react'
import { Data } from '../components/Data'
import map from '../images/map.png'

export const Stata = () => {
    return (
        <div className='stata'>
            <div className="container">
                <h2 id="first">Цифры и факты</h2>
                <div className="stata-grid">
                {Data.map((item, index) => {
                    return (
                    <div key={index} className="stata-grid--item">
                        <h2>{item.number} <span id="size">{item.size?.length && item.size}</span></h2>
                        <b>{item.title}</b> 
                        <p>{item.info}</p>
                    </div>
                    )
                })}
                    <div className="stata-grid--image">
                        <img src={map} alt="" />
                    </div>
                    <div className="stata-grid--delivery">
                        <hr />
                        <h3>Мы поставляем
                            свою продукцию
                            более чем в</h3>
                        <b>40</b>
                        <p>стран мира</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
