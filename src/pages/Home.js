import { useEffect, useState } from 'react'
import styled from 'styled-components'

import Container from 'components/Container'
import { Select, SearchInput } from 'components/forms'
import ListCountriesCards from 'components/ListCountriesCards'

import CountriesClass from 'services/Countries'

const CountriesService = new CountriesClass()

const selectOptions = [
  { label: 'Africa', value: 'Africa' },
  { label: 'Americas', value: 'Americas' },
  { label: 'Asia', value: 'Asia' },
  { label: 'Europe', value: 'Europe' },
  { label: 'Oceania', value: 'Oceania' }
]

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
      <FormContainer>
        <SearchInput
          placeholder='Search for a country...'
          handleSubmit={handleSubmit}
          handleInput={handleInput}
          value={inputValue}
        />

        <Select
          options={selectOptions}
          headerMessage='Search for a country...'
        />
      </FormContainer>

      {countries.length > 0 && <ListCountriesCards countries={countries} />}
    </Container>
  )
}

const FormContainer = styled.div`
  display: flex;
  justify-content: space-between;

  margin: 40px 0;

  @media (max-width: 768px) {
    margin: 40px auto;
    width: 343px;

    & > *:first-child {
      margin-bottom: 16px;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export default Home
