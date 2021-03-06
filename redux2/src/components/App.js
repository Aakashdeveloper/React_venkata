import React, {Component} from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

import Header from './Header';
import Footer from './Footer'

import Home from '../containers/Home';
import News from '../containers/News'

class App extends Component {
    render(){
        return(
            <BrowserRouter>
                <div>
                    <Header/>
                    <Switch>
                        <Route path="/news/:id" component={News} />
                        <Route exact path="/" component={Home} />
                    </Switch>
                    <Footer/>
    
                </div>
            </BrowserRouter>
        )
    }
}

export default App;