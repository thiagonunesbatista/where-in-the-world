import styled from 'styled-components'
import PropTypes from 'prop-types'

import CountryCard from './CountryCard'

const ListCountriesCards = ({ countries }) => {
  console.log(countries)
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
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  gap: 100px;
`

export default ListCountriesCards
