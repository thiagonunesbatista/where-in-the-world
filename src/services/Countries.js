import api from 'providers/api'

class Countries {
  async searchCountry(country) {
    try {
      const response = await api.get(`/name/${country}`)
      return response.data
    } catch (error) {
      console.log(error)
    }
  }

  async searchRegion(region) {
    try {
      const response = await api.get(`/region/${region}`)
      return response.data
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
