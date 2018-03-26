import React from 'react'
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import Home from '../pages/Home/Home'
import Page1 from '../pages/Page1/Page1'

const getRouter = () => (
    <Router>
        <div>
            <ul>
                <li><Link to="/">首页</Link></li>
                <li><Link></Link></li>
            </ul>
        </div>
    </Router>
);