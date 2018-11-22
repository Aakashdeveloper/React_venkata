import React from 'react'
import ReactDOM from 'react-dom';

import Header from './components/header';

const App = () => {
    return(
        <div>
            <Header></Header>
            <h1>This is my react app</h1>
            <h2>This is first app</h2>
        </div>
    )
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

*/