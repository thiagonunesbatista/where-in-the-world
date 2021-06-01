import styled from 'styled-components'
import PropTypes from 'prop-types'

import CountryCard from './CountryCard'

const ListCountriesCards = ({ countries }) => {
  return (
    <ListContainer>
      {countries?.map(country => (
        <CountryCard country={country} key={country.name} />
      ))}
    </ListContainer>
  )
}

ListCountriesCards.propTypes = {
  countries: PropTypes.array.isRequired
}

const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 240px);
  justify-items: center;
  gap: 63px 16px;
  justify-content: center;
  padding-bottom: 107px;

  @media (max-width: 480px) {
    gap: 16px 0;
    grid-template-columns: 100%;
  }

  @media (max-width: 768px) {
    padding-bottom: 58px;
  }
`

export default ListCountriesCards
