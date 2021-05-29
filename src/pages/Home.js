import { useEffect, useState } from 'react'

import Container from 'components/Container'
import { SearchInput } from 'components/forms'
import ListCountriesCards from 'components/ListCountriesCards'

import CountriesClass from 'services/Countries'

const CountriesService = new CountriesClass()

const Home = () => {
  const [countries, setCountries] = useState([])
  const [inputValue, setInputValue] = useState('')

  useEffect(() => {
    const loadData = async () => {
      const response = await CountriesService.getCountries()
      setCountries(response)
    }

    loadData()
  }, [])

  const handleInput = event => {
    setInputValue(event.target.value)
  }

  const handleSubmit = async () => {
    if (inputValue.length > 0) {
      const response = await CountriesService.searchCountry(inputValue)
      setCountries(response)
    }
  }

  return (
    <Container>
      <SearchInput
        placeholder='Search for a country...'
        handleSubmit={handleSubmit}
        handleInput={handleInput}
        value={inputValue}
      />
      {countries.length > 0 && <ListCountriesCards countries={countries} />}
    </Container>
  )
}

export default Home
