import styled from 'styled-components'
import PropTypes from 'prop-types'

const PageTitleStyle = styled.h2`
  font-family: 'Roboto', sans-serif;
  font-size: 40px;
  font-weight: bold;
  text-align: center;
  position: relative;
  margin-bottom: 55px;

  ::before {
    content: '';
    display: block;
    position: absolute;
    bottom: -25px;
    left: 50%;
    transform: translateX(-50%);
    border: none;
    border-radius: 5px;
    background-color: #ff8000;
    color: #ff8000;
    height: 10px;
    width: 120px;
  }

  @media (max-width: 767px) {
    font-size: 35px;
    margin-bottom: 45px;
    ::before {
      width: 100px;
      height: 8px;
      bottom: -20px;
    }
  }
  @media (max-width: 380px) {
    font-size: 30px;
    ::before {
      width: 80px;
      height: 5px;
    }
  }
`

const PageTitle = ({ text }) => {
  return <PageTitleStyle>{text}</PageTitleStyle>
}

PageTitle.propTypes = {
  text: PropTypes.string.isRequired,
}

PageTitle.defaultProps = {
  text: 'Заголовок',
}

export default PageTitle
