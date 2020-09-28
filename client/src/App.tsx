import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { Navbar } from './components/Navbar/Navbar'
import { Cart } from './pages/Cart/Cart'
import { Main } from './pages/Main/Main'

export const App = () => {
    return (
        <div className="App">
            <Router>
                <Navbar />
                <Switch>
                    <Route path="/cart" component={Cart} />
                    <Route path="/" component={Main} exact />
                </Switch>
            </Router>
        </div>
    )
}
