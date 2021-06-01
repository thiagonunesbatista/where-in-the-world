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
      const response = await CountriesService.searchCountry(params.name)
      setCountry(response[0])
    }
    loadData()
  }, [params.name])

  if (!country) {
    return <h2>Country not found</h2>
  }

  return (
    <CountryDetailsContainer>
      <img src={country.flag} alt={`${country?.name} flag`} />

      <h2>{country.name}</h2>
      <div>
        <p>Native Name: {country.nativeName}</p>
        <p>Population: {country.population}</p>
        <p>Region: {country.region}</p>
        <p>Sub Region: {country.subregion}</p>
        <p>Capital: {country.capital}</p>
      </div>

      <div>
        <p>
          Top Love Domain:
          {country.topLevelDomain.map(currentDomain => currentDomain)}
        </p>
        <p>Currencies: {country.currencies.map(currency => currency.name)}</p>
        <p>
          Languages:{' '}
          {country.languages.map((language, index) => {
            if (index < country.languages.length - 1) {
              return `${language.name}, `
            }
            return `${language.name}.`
          })}
        </p>
      </div>

      <div>
        <p>
          Border Countries:{' '}
          {country.borders.map((border, index) => {
            if (index < country.borders.length - 1) {
              return `${border}, `
            }
            return `${border}.`
          })}
        </p>
      </div>
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
