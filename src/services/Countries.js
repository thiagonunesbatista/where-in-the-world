import api from 'providers/api'

class Countries {
  async searchCountry(country) {
    try {
      const response = await api.get(`/name/${country}`)
      return response.data
    } catch (error) {
      return error
    }
  }

  async searchRegion(region) {
    try {
      const response = await api.get(`/region/${region}`)
      return response.data
    } catch (error) {
      return error
    }
  }

  async getCountries() {
    try {
      const response = await api.get('/all')
      return response.data
    } catch (error) {
      return error
    }
  }
}

export default Countries
