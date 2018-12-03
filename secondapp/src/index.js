import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link} from 'react-router-dom';

import Posts from './components/posts';
import Profile from './components/profile';
import PostsItem from './components/post_item'
import LifeCycle from './components/lifecycle';
 
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
                    <li> <Link to="/lifecycle">LifeCycle</Link></li>
                    </ul>
                </div>
            </nav>
            </header>
            <Route exact path="/" component={App}></Route>
            <Route exact path="/posts" component={Posts}></Route>
            <Route path="/profile" component={Profile}></Route>
            <Route path="/posts/:id" component={PostsItem}></Route>
            <Route path="/lifecycle" component={LifeCycle}></Route>
        </div>
    </BrowserRouter>
    , document.querySelector('#root'))