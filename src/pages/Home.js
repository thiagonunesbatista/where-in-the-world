import { useEffect, useState } from 'react'

import Container from 'components/Container'
import Input from 'components/Input'
import ListCountriesCards from 'components/ListCountriesCards'

import CountriesClass from 'services/Countries'

const CountriesService = new CountriesClass()

const Home = () => {
  const [countries, setCountries] = useState([])

  useEffect(() => {
    const loadData = async () => {
      const response = await CountriesService.getCountries()
      setCountries(response)
    }

    loadData()
  }, [])

  return (
    <Container>
      <Input placeholder='Search for a country...' />
      {countries.length > 0 && <ListCountriesCards countries={countries} />}
    </Container>
  )
}

export default Home
