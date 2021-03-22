import React from 'react'
import { NavLink } from 'react-router-dom'

import logo from '../assets/img/logo1.png'

const Header = () => {
  const [visibleMenu, setVisibleMenu] = React.useState(false)
  const menuRef = React.useRef()

  const toggleVisibleMenu = () => {
    setVisibleMenu(!visibleMenu)
  }

  const [burgerClicked, setBurgerClicked] = React.useState(false)
  const toggleBurgerClicked = () => {
    setBurgerClicked(!burgerClicked)
  }

  const handleOutsideClick = (e) => {
    if (!e.path.includes(menuRef.current)) {
      setVisibleMenu(false)
      setBurgerClicked(false)
    }
  }

  const menuItemClick = () => {
    setVisibleMenu(false)
    setBurgerClicked(false)
  }

  React.useEffect(() => {
    document.body.addEventListener('click', handleOutsideClick)
  }, [])

  return (
    <div ref={menuRef}>
      <header id="header">
        <nav className="navbar">
          <div className="navbar__logo">
            <NavLink to="/">
              <img src={logo} alt="logo" className="navbar__logo__image" />
            </NavLink>
          </div>
          <ul className={visibleMenu ? 'active navbar__menu' : 'navbar__menu'}>
            <li onClick={menuItemClick}>
              <NavLink to="/" exact={true}>
                <i className="fa fa-home"></i> <span className="navbar__menu__description">Главная</span>
              </NavLink>
            </li>
            <li onClick={menuItemClick}>
              <NavLink to="/services">
                <i className="fa fa-keyboard"></i> <span className="navbar__menu__description">Услуги</span>
              </NavLink>
            </li>
            <li onClick={menuItemClick}>
              <NavLink to="/about">
                <i className="fa fa-user"></i> <span className="navbar__menu__description">Обо мне</span>
              </NavLink>
            </li>
            <li onClick={menuItemClick}>
              <NavLink to="/portfolio">
                <i className="fa fa-folder"></i> <span className="navbar__menu__description">Портфолио</span>
              </NavLink>
            </li>
            <li onClick={menuItemClick}>
              <NavLink to="/contacts">
                <i className="fa fa-envelope"></i> <span className="navbar__menu__description">Контакты</span>
              </NavLink>
            </li>
          </ul>
          <div className="navbar__socials">
            <a href="https://vk.com/flubermax" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-vk"></i>
            </a>
            <a href="https://www.instagram.com/flubermax" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.linkedin.com/in/maksim-gorbachev-62b269184/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
          <div
            className={burgerClicked ? 'navbar__menu__btn clicked' : 'navbar__menu__btn'}
            onClick={() => {
              toggleVisibleMenu()
              toggleBurgerClicked()
            }}
          >
            <div></div>
            <div></div>
            <div></div>
          </div>
        </nav>
      </header>
    </div>
  )
}

export default Header
