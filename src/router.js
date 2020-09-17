import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import DefaultLayout from './layouts/DefaultLayout/DefaultLayout'
import LoginLayout from './layouts/LoginLayout/LoginLayout'
// import NotFound from './commom/NotFound/NotFound'

export default function CommonRouter(){
    return(
        <div>
            <Router>
                <Switch>
                    <Route path="/" component={LoginLayout} exact/>
                    <Route path="/home" component={DefaultLayout}/>
                </Switch>
            </Router>
        </div>
    )
}