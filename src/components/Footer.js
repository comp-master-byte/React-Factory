import React from 'react'
import { Images } from './Images'
import { FooterData } from './FooterData'

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-content--image">
                        <img src={Images[12].image} alt="" />
                    </div>
                    <div className="footer-content--contacts">
                        {FooterData.map((item) => {
                            return (
                                <div key={item.id} className="footer-content--contacts__item">
                                    <b>{item.title}</b>
                                    <p>{item.info}</p>
                                </div>
                            )
                        })}

                    </div>
                </div>
                <div className="last-info">
                    <p>
                    © АО «Балтийский завод»
                    199106, Санкт-Петербург
                    Ул. Косая линия, 16
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer

{/* <div className="footer-content--contacts__item">
    <b>Судостроение</b>
    <p>Тел. 8 (812) 324-94-35</p>
</div>
<div className="footer-content--contacts__item">
    <b>Судостроение</b>
    <p>Тел. 8 (812) 324-94-35</p>
</div>
<div className="footer-content--contacts__item">
    <b>Судостроение</b>
    <p>Тел. 8 (812) 324-94-35</p>
</div> */}