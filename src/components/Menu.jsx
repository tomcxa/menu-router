import React from 'react'
import { NavLink } from 'react-router-dom'

const Menu = () => {
    return (
        <nav className="menu">
            <NavLink exact className="menu__item" activeClassName="menu__item-active" to="/">Главная</NavLink>
            <NavLink className="menu__item" activeClassName="menu__item-active" to="/drift">Дрифт-такси</NavLink>
            <NavLink className="menu__item" activeClassName="menu__item-active" to="/timeattack">Time Attack</NavLink>
            <NavLink className="menu__item" activeClassName="menu__item-active" to="/forza">Forza Karting</NavLink>
        </nav>
    )
}

export default Menu