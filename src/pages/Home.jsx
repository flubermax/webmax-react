import React from 'react'
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <div className="firstScreen__wrap">
      <h1>
        Сайт-портфолио
        <br />
        frontend-разработчика
      </h1>
      <p>Верстка и доработка сайтов / интеграция с WordPress</p>
      <NavLink to="/portfolio">
        <div className="firstScreen__button">
          <span className="firstScreen__buttonText">Смотреть работы</span>
          <span className="firstScreen__buttonWaves"></span>
        </div>
      </NavLink>

      <div className="cube__wrap">
        <div className="cube">
          <div className="cube__side front">WordPress</div>
          <div className="cube__side back">jQuery</div>
          <div className="cube__side right">SCSS</div>
          <div className="cube__side left">JavaScript</div>
          <div className="cube__side top">ReactJS</div>
          <div className="cube__side bottom">Redux</div>
        </div>
      </div>
    </div>
  )
}

export default Home
