import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Container from 'components/Container'
import Navbar from 'components/Navbar'

import Home from 'pages/Home'
import CountryDetails from 'pages/CountryDetails'

const PublicRoutes = () => (
  <BrowserRouter>
    <Navbar />
    <Container>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/country/:name' component={CountryDetails} />
      </Switch>
    </Container>
  </BrowserRouter>
)

export default PublicRoutes
