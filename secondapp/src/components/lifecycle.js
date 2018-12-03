// Get Default State
// SET INITIAL STATE
// Before Get created
// Render JSX
// AFter a component is mounted

import React, {Component} from 'react';

class LifeCycle extends Component{
    // GET DEFAULT STATE
    constructor(props){
        super(props)

        // SET INITIAL STATE
        this.state= {
            title :'Lifecycle'
        }
    }

    // Before Get created
    componentWillMount(){
        console.log('Before it created')
       
    }

    componentWillUpdate(){
        console.log('Before Update')
    }

    componentDidUpdate(){
        console.log('After Update')
    }


    shouldComponentUpdate(nextProps, nextState){
        console.log(this.state.title);
        console.log(nextState.title)
        if(nextState.title === this.state.title){
            return false
        }
        return true
    }

    // Render JSX
    render(){
        return(
            <div>
                <h1>{this.state.title}</h1>
                <div>Lifecycle</div>
                <div onClick={() => this.setState({title:'Lifecycle'})}>Click to change</div>
            </div>
        )
    }

    // AFter a component is mounted
    componentDidMount(){
        console.log('After it created')
        document.querySelector('h1').style.color='green'
    }

    componentWillUnmount(){
        alert("do you want to leave")
    }
    

}

export default LifeCycle;