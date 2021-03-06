import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { formatNumberWithDots } from 'helpers/formatters'

const CountryCard = ({ country }) => {
  return (
    <CountryCardContainer to={`/country/${country.name}`}>
      <img src={country.flag} alt={`${country.name} flag`} />
      <CountryDetails>
        <h4>{country.name}</h4>
        <ul>
          <li>
            <span>Population:</span> {formatNumberWithDots(country.population)}
          </li>
          <li>
            <span>Region:</span> {country.region}
          </li>
          <li>
            <span>Capital:</span> {country.capital}
          </li>
        </ul>
      </CountryDetails>
    </CountryCardContainer>
  )
}

CountryCard.propTypes = {
  country: PropTypes.object.isRequired
}

const CountryCardContainer = styled(Link)`
  height: 303px;
  width: 100%;
  border: 1px solid;
  transition: transform 0.1s linear;

  h4,
  p {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }

  &:hover {
    transform: scale(1.1);
  }

  ${({ theme: { border, secondaryBackground } }) => ({
    background: secondaryBackground,
    borderColor: border
  })}

  img {
    width: inherit;
    height: 153px;

    @media (max-width: 480px) {
      height: 200px;
    }
  }

  @media (max-width: 480px) {
    width: 100%;
    height: 352px;
  }
`

const CountryDetails = styled.div`
  padding: 24px;

  ${({ theme: { secondaryText } }) => ({
    color: secondaryText
  })}

  h4 {
    font-weight: 800;
    line-height: 24px;
    font-size: 16px;
  }

  ul {
    li {
      font-size: 12px;
      line-height: 18px;
      padding-top: 8px;
    }

    span {
      font-weight: 600;
    }
  }
`

export default CountryCard
