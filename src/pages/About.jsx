import React from 'react'

import { PageTitle } from '../components'
import myPhoto from '../assets/img/me.jpg'

const About = () => {
  return (
    <div className="about">
      <div className="container">
        <PageTitle text="Обо мне" />

        <div className="about__wrap">
          <div className="about__image">
            <img src={myPhoto} className="about__myphoto" alt="front-end разработчик" />
          </div>
          <div className="about__text">
            Привет. Меня зовут Максим, мне 29 лет. Я frontend-разработчик.
            <br />
            Мой коммерческий опыт на данный момент - 1.5 года. Есть опыт работы и на фрилансе, и в web-студии.
            <br />
            <br />
            Занимаюсь версткой по макетам, интеграцией верстки с CMS WordPress,
            <br />а так же правкой и доработкой сайтов.
            <br />
            <br />
            <b>Мои навыки/знания:</b>
            <ul>
              <li>HTML / CSS</li>
              <li>SCSS / styled-components / PostCSS</li>
              <li>JavaScript / jQuery</li>
              <li>ReactJS</li>
              <li>Redux, Redux Thunk</li>
              <li>Gulp</li>
              <li>Git</li>
              <li>WordPress</li>
              <li>Photoshop / Figma</li>
            </ul>
            <a href="https://github.com/flubermax" target="_blank" rel="noopener noreferrer">
              github.com/flubermax
            </a>{' '}
            - мой профиль на GitHub
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
