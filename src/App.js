import React from 'react'
import { Route, Switch, Link } from 'react-router-dom'
import { RootRoutes } from './Router'
function App() {
  return (
    <>
    <Link to='/p1'>P!</Link>
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
      </Switch>
    </>
  )
}

export default App
