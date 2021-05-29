import api from 'providers/api'

class Countries {
  async getCountry(country) {
    try {
      const response = await api.get(`/name/${country}`)
      return response.data[0]
    } catch (error) {
      console.log(error)
    }
  }

  async getCountries() {
    try {
      const response = await api.get('/all')
      return response.data
    } catch (error) {
      console.log('ERROR')
    }
  }
}

export default Countries
