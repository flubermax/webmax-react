import { Header } from './components'
import { Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contacts from './pages/Contacts'
import Portfolio from './pages/Portfolio'
import Services from './pages/Services'

function App() {
  return (
    <div>
      <Header />
      <div className="content">
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} />
          <Route path="/contacts" component={Contacts} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/services" component={Services} />
        </Switch>
      </div>
    </div>
  )
}

export default App
