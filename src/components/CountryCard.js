import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const CountryCard = ({ country }) => {
  return (
    <StyledCountryCard to={`/country/${country.name}`}>
      <img src={country.flag} alt={`${country.name} flag`} />
      <div>
        <h4>{country.name}</h4>
        <ul>
          <li>Population: {country.population}</li>
          <li>Region: {country.region}</li>
          <li>Capital: {country.capital}</li>
        </ul>
      </div>
    </StyledCountryCard>
  )
}

CountryCard.propTypes = {
  country: PropTypes.object.isRequired
}

const StyledCountryCard = styled(Link)`
  height: 393px;
  width: 240px;
  ${({ theme: { primaryText, secondaryBackground, secondaryText } }) => ({
    background: secondaryBackground,
    color: secondaryText,
    h1: {
      color: primaryText
    }
  })}
  img {
    width: inherit;
    height: 153px;
  }
`

export default CountryCard
