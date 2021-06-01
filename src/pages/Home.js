import { Fragment, useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import styled from 'styled-components'

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
  const [initialCountries, setInitialCountries] = useState([])
  const [countries, setCountries] = useState([])
  const [regionFilter, setRegionFilter] = useState()
  const [inputValue, setInputValue] = useState('')

  useEffect(() => {
    const loadData = async () => {
      const response = await CountriesService.getCountries()
      setCountries(response.slice(0, 8))
      setInitialCountries(response.slice(0, 8))
    }

    loadData()
  }, [])

  useEffect(() => {
    const loadRegionFilter = async () => {
      const response = await CountriesService.searchRegion(regionFilter.value)
      toast.success(`Successful search on region: ${regionFilter.label}.`)
      setCountries(response)
    }

    regionFilter && loadRegionFilter()
  }, [regionFilter])

  const handleClearValue = () => {
    setInputValue('')
    setRegionFilter()
    setCountries(initialCountries)
  }

  const handleSelect = value => {
    setRegionFilter(value)
  }

  const handleInput = event => {
    setInputValue(event.target.value)
  }

  const handleSubmit = async () => {
    if (inputValue.length > 0) {
      const response = await CountriesService.searchCountry(inputValue)
      if (response?.response?.status === 404) {
        return toast.error('Country not found!')
      }

      toast.success('Successful search!')
      setCountries(response)
    }
  }

  return (
    <Fragment>
      <FormContainer>
        <SearchInput
          placeholder='Search for a country...'
          handleClearValue={handleClearValue}
          handleSubmit={handleSubmit}
          handleInput={handleInput}
          value={inputValue}
          submitOnEnterKey={true}
        />

        <Select
          value={regionFilter}
          options={selectOptions}
          headerMessage='Filter by Region...'
          onChange={handleSelect}
        />
      </FormContainer>

      {countries.length > 0 && <ListCountriesCards countries={countries} />}
    </Fragment>
  )
}

const FormContainer = styled.div`
  display: flex;
  justify-content: space-between;

  margin: 40px 0;

  @media (max-width: 768px) {
    margin: 40px auto;
    max-width: 343px;
    width: 100%;

    & > *:first-child {
      margin-bottom: 16px;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export default Home
