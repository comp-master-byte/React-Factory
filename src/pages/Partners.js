import React, { useEffect } from 'react'


export const Partners = () => {
    return (
        <div className="partners">
            <div className="container">
                <div className="partners-content">
                    <div className="partners-content--suggest">
                        Если вы желаете стать нашим партнёром, пожалуйста, заполните форму для связи
                    </div>
                    <form className="partners-content--form">
                        <input type="text" placeholder='Ваше имя'/>
                        <input type="text" placeholder='Ваша фамилия'/>
                        <input type="text" placeholder='Ваш E-mail'/> 
                        <button id="btn" type="submit">Отправить</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
