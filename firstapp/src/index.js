import React, {Component} from 'react'
import ReactDOM from 'react-dom';

import Header from './components/header';
import JSON from './db.json';
import NewsList from './components/news_list'

class App extends Component{
    constructor(props){
        super(props);

        this.state ={
            news: JSON,
            filtered:JSON
        }
    }

    filteredNews(keywords){
        let outfiltered = this.state.news.filter((item) => {
            return item.title.indexOf(keywords) > -1
        })

        this.setState({filtered: outfiltered})
    }


    render(){
        return(
            <div>
                <Header newSearch={(data) => this.filteredNews(data)}></Header>
                <NewsList news={this.state.filtered}></NewsList>
            </div>
        )
    }
}


ReactDOM.render(<App/>, document.getElementById("root"))










/*
functional (stateless)
-Light weight but less function
class based(statefull)
-Heavy in weighr with more function


function add(a,b){
    return a+b
}
const add = (a,b) => {
    return a+b
}

JSX

const App = () => {
    return(
        <div>
            <Header></Header>
            <h1>This is my react app</h1>
            <h2>This is first app</h2>
        </div>
    )
}
*/