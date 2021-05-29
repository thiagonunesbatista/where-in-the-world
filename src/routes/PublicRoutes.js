import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Navbar from 'components/Navbar'

import Home from 'pages/Home'
import CountryDetails from 'pages/CountryDetails'

const PublicRoutes = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/country/:name' component={CountryDetails} />
    </Switch>
  </BrowserRouter>
)

export default PublicRoutes
