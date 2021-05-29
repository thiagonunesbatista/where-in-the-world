import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'

import CountriesClass from 'services/Countries'

const CountriesService = new CountriesClass()

const CountryDetails = () => {
  const [country, setCountry] = useState()

  const params = useParams()

  useEffect(() => {
    const loadData = async () => {
      const response = await CountriesService.getCountry(params.name)
      setCountry(response)
    }
    loadData()
  }, [params.name])

  console.log(country)

  return (
    <CountryDetailsContainer>
      <img src={country?.flag} alt={`${country?.name} flag`} />
    </CountryDetailsContainer>
  )
}

const CountryDetailsContainer = styled.div`
  img {
    width: 414px;
    height: 296px;
  }
`

export default CountryDetails
