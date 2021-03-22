import React from 'react'
import PropTypes from 'prop-types'

const PortfolioItem = ({ index, text, folder }) => {
  return (
    <div className={`mywork myworkItem${index}`}>
      <div className="myworkHidden">
        <p>{text}</p>
        <a href={folder} target="_blank" rel="noopener noreferrer" className="portfBtn">
          Посмотреть работу
        </a>
      </div>
    </div>
  )
}

PortfolioItem.propTypes = {
  index: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  folder: PropTypes.string.isRequired,
}

PortfolioItem.defaultProps = {
  text: 'Описание проекта',
}

export default PortfolioItem
