import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";
import SearchBar from './SearchBar';
import FilterNewsDroupDown from './FilterNewsDroupDown';

function RouterPath(params) {
    return (
        <Router>
            <Route path="/" Component={SearchBar} />
            <Route exact path="/filter" Component={FilterNewsDroupDown} />
        </Router>
    )
}
export default RouterPath;