import PropTypes from 'prop-types'
import { FaArrowLeft } from 'react-icons/fa'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'

const ArrowBack = ({ message = 'Back' }) => {
  const history = useHistory()

  const goBack = () => history.goBack()

  return (
    <ArrowBackContainer onClick={goBack}>
      <FaArrowLeft width='19' height='13' />
      <p>{message}</p>
    </ArrowBackContainer>
  )
}

ArrowBack.propTypes = {
  message: PropTypes.string
}

const ArrowBackContainer = styled.div`
  display: flex;
  cursor: pointer;
  align-items: center;
  color: ${({ theme }) => theme.secondaryColor};

  p {
    margin-left: 16px;
    line-height: 21.82px;
    font-size: 16px;
  }
`

export default ArrowBack
