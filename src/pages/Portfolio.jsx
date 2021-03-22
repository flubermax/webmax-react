import React from 'react'

import { PageTitle, PortfolioItem } from '../components'

const Portfolio = () => {
  return (
    <div className="portf">
      <div className="container">
        <PageTitle text="Портфолио" />

        <div className="mywork__wrap">
          <PortfolioItem index="20" text="Адаптивная верстка по макету" folder="portfolio/white-lion/index.html" />

          <PortfolioItem index="19" text="Адаптивная верстка по макету" folder="portfolio/plitka-neo/index.html" />

          <PortfolioItem index="18" text="Адаптивная верстка по макету" folder="portfolio/olly-nails/index.html" />

          <PortfolioItem index="17" text="Адаптивная верстка по макету" folder="portfolio/service-exchange/index.html" />

          <PortfolioItem index="16" text="Адаптивная верстка по макету" folder="portfolio/beautysaloon/index.html" />

          <PortfolioItem index="15" text="Адаптивная верстка по макету" folder="portfolio/cavator/index.html" />

          <PortfolioItem index="14" text="Адаптивная верстка по макету" folder="portfolio/ask/index.html" />

          <PortfolioItem index="13" text="Адаптивная верстка по макету" folder="portfolio/tatkran/index.html" />

          <PortfolioItem index="12" text="Адаптивная верстка по макету" folder="portfolio/texo/index.html" />

          <PortfolioItem index="11" text="Адаптивная верстка по макету" folder="portfolio/pravotech/index.html" />

          <PortfolioItem index="10" text="Адаптивная верстка по макету" folder="portfolio/asanas/index.html" />

          <PortfolioItem index="9" text="Адаптивная верстка по макету" folder="portfolio/beauty-gun/index.html" />

          <PortfolioItem index="8" text="Адаптивная верстка, интеграция с WordPress" folder="portfolio/aer/index.html" />

          <PortfolioItem index="7" text="Адаптивная верстка, интеграция с WordPress" folder="https://proprizyv.ru/" />

          <PortfolioItem index="6" text="Адаптивная верстка, интеграция с WordPress" folder="portfolio/cmt58/index.html" />

          <PortfolioItem index="5" text="Сайт-каталог под ключ (интеграция с WordPress)" folder="https://xn-----blcoaca7bephbdhc7alg6qh2e.xn--p1ai/" />

          <PortfolioItem index="4" text="Адаптивная верстка по макету" folder="portfolio/disart/index.html" />

          <PortfolioItem index="3" text="Адаптивная верстка по макету" folder="portfolio/planeta-vaz/index.html" />

          <PortfolioItem index="2" text="Адаптивная верстка, интеграция с WordPress" folder="http://edgedsign.com/" />

          <PortfolioItem index="1" text="Адаптивная верстка главной страницы" folder="portfolio/north-design/index.html" />
        </div>
      </div>
    </div>
  )
}

export default Portfolio
