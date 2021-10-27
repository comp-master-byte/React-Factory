import React, { useEffect } from 'react'
import {Links} from './Links'
import { Images } from './Images'

export const Navigation = () => {

    function showNavigation() {
        document.querySelector('.header-content--navigation').classList.toggle('show')
        document.querySelector('body').classList.toggle('body')
    }

    function removeToggle() {
        document.querySelector('.header-content--navigation').classList.remove('show')
        document.querySelector('body').classList.remove('body')
    }
    
    function scrollTo(element) {
        window.scroll({
            left: 0,
            top: element.offsetTop,
            behavior: 'smooth'
        })
    }
    
    
    useEffect(() => {
        const refScroll2 = document.querySelector('.link2')
        const refScroll3 = document.querySelector('.link3')

        const firstPage = document.querySelector('.about')
        const secondPage = document.querySelector('.worker')

        refScroll2.addEventListener('click', function() {
            scrollTo(firstPage)
        })

        refScroll3.addEventListener('click', function() {
            scrollTo(secondPage)
        })
    }, [])

    return (
        <header className="header">
            <div className="container">
                <div className="header-content">
                    <div className="header-content--image">
                        <img src={Images[0].image} alt="" />
                    </div>
                    <div className="burger" onClick={showNavigation}>
                        <span className="burger-line"></span>
                        <span className="burger-line"></span>
                        <span className="burger-line"></span>
                    </div>
                    <nav className="header-content--navigation">
                        {Links.map((item, index) => {
                            return (
                                <li onClick={removeToggle} key={index} className="header-content--navigation__item">
                                    <a className={item.className} href="#">{item.link}</a>
                                </li>
                            )
                        })}
                    </nav>
                </div>
            </div>
        </header>
    )
}