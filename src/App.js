import React from 'react'
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { RootRoutes } from './Router'
import './App.scss'
function App() {
  return (
    <>
      <Router>
      <Switch>
        {
          RootRoutes.map(item => {
            return <Route
              path={item.path}
              key={item.path}
              render={(routerProps) => {
                return <item.component {...routerProps}/>
              }}
            >
            </Route>
          })
        }
        <Redirect to='/plane' from='/' exact/>
        <Redirect to='/warring'/>
      </Switch>
    </Router>
    </>
  )
}

export default App
