import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link} from 'react-router-dom';

import Posts from './components/posts';
import Profile from './components/profile';


class App extends Component{
    render(){
        return(
            <div className="panel panel-success">
                <div className="panel-heading">Panel with Home class</div>
                <div className="panel-body">Home Content</div>
            </div>

        )
    }
}

ReactDOM.render(
    <BrowserRouter>
        <div>
            <header>
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                    <a className="navbar-brand" href="#">WebSiteName</a>
                    </div>
                    <ul className="nav navbar-nav">
                    <li className="active">
                        <Link to="/">Home</Link>
                    </li>
                    <li><Link to="/posts">Posts</Link></li>
                    <li> <Link to="/profile">Profile</Link></li>
                    </ul>
                </div>
            </nav>
            </header>
            <Route exact path="/" component={App}></Route>
            <Route path="/posts" component={Posts}></Route>
            <Route path="/profile" component={Profile}></Route>
        </div>
    </BrowserRouter>
    , document.querySelector('#root'))