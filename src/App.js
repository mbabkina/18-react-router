import './App.css'

import { HashRouter as Router, Switch, Route, NavLink } from 'react-router-dom'

import Main from './components/Main'
import Publications from './components/Publications'
import ContactList from './components/ContactList'
import Photos from './components/Photos'
import ErrorPage from './components/ErrorPage'
import SingleContact from './components/SingleContact'

function App() {
  return (
    <div className='App'>
      <nav className='navbar'>
        <Router>
          <NavLink to='/main' className='navlink' activeClassName='active-link'>
            Home
          </NavLink>
          <NavLink
            to='/publications'
            className='navlink'
            activeClassName='active-link'
          >
            Publications
          </NavLink>
          <NavLink
            to='/photos'
            className='navlink'
            activeClassName='active-link'
          >
            Photos
          </NavLink>
          <NavLink
            to='/contacts'
            className='navlink'
            activeClassName='active-link'
          >
            Contacts
          </NavLink>

          <Switch>
            <Route path='/main' component={Main} />
            <Route path='/publications' component={Publications} />
            <Route path='/photos' component={Photos} />
            <Route path='/contacts' component={ContactList} />
            <Route path='/contacts/:id' component={SingleContact} />

            <Route path='/' component={ErrorPage} />
          </Switch>
        </Router>
      </nav>
    </div>
  )
}

export default App
