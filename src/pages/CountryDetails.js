import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'

import ArrowBack from 'components/ArrowBack'

import { formatNumberWithDots } from 'helpers/formatters'

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
      <ArrowBack />
      <div>
        <img src={country.flag} alt={`${country?.name} flag`} />

        <DetailsContainer>
          <h2>{country.name}</h2>
          <div>
            <div>
              <p>
                <span>Native Name:</span> {country.nativeName}
              </p>
              <p>
                <span>Population:</span>{' '}
                {formatNumberWithDots(country.population)}
              </p>
              <p>
                <span>Region:</span> {country.region}
              </p>
              <p>
                <span>Sub Region:</span> {country.subregion}
              </p>
              <p>
                <span>Capital:</span> {country.capital}
              </p>
            </div>

            <div>
              <p>
                <span>Top Level Domain:</span>
                {country.topLevelDomain.map(currentDomain => currentDomain)}
              </p>
              <p>
                <span>Currencies:</span>{' '}
                {country.currencies.map(currency => currency.name)}
              </p>
              <p>
                <span>Languages:</span>{' '}
                {country.languages.map((language, index) => {
                  if (index < country.languages.length - 1) {
                    return `${language.name}, `
                  }
                  return `${language.name}.`
                })}
              </p>
            </div>
          </div>

          {country.borders.length > 0 && (
            <BorderCountriesContainer>
              <p>Border Countries: </p>
              {country.borders.map((border, index) => (
                <span key={index}>{border}</span>
              ))}
            </BorderCountriesContainer>
          )}
        </DetailsContainer>
      </div>
    </CountryDetailsContainer>
  )
}

const CountryDetailsContainer = styled.div`
  & > div:nth-child(1) {
    margin-top: 40px;
  }

  h2 + div {
    display: flex;
    padding-bottom: 53px;

    @media (max-width: 1100px) {
      flex-direction: column;

      div:nth-child(2) {
        margin-top: 32px;
      }
    }

    div:first-child {
      width: 242px;
    }
  }

  & > div:nth-child(2) {
    padding-top: 40px;
    display: flex;
    justify-content: space-between;

    @media (max-width: 1100px) {
      flex-direction: column;
      margin-bottom: 32px;

      h2 {
        padding-top: 32px;
      }
    }
  }

  ${({ theme: { secondaryText } }) => ({
    color: secondaryText
  })}

  img {
    width: 414px;
    height: 296px;

    @media (max-width: 500px) {
      width: 100%;
    }

    @media (max-width: 500px) {
      position: relative;
      left: -16px;
      width: 100vw;
    }
  }

  h2 {
    line-height: 43px;
    font-size: 32px;
    font-weight: 800;
    margin-bottom: 24px;
  }

  p {
    line-height: 24px;
    font-size: 16px;

    span {
      font-weight: 600px;
    }
  }
`

const DetailsContainer = styled.div`
  span {
    font-weight: 600;
  }
`

const BorderCountriesContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  p {
    width: 155px;
    margin-right: 6px;
  }

  P,
  span {
    font-weight: 600;
  }

  span {
    border: 1px solid;
    padding: 4px 17px;
    height: 30px;
    ${({ theme: { secondaryText } }) => ({
      'border-color': secondaryText,
      color: secondaryText
    })};
    line-height: 21.82px;
    font-size: 16px;

    &:not(:last-child) {
      margin-right: 8px;
    }
  }

  @media (max-width: 1100px) {
    p {
      width: 100%;
      margin-bottom: 8px;
    }
  }
`

export default CountryDetails
