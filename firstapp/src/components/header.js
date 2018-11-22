import React, { Component } from 'react';

class Header extends Component {
    constructor(props){
        super(props);

        this.state = {
            title:'React App',
            keyword:'user search'
        }
    }

    inputChange(event){
        console.log(event.target.value)
        this.setState({keyword:event.target.value})
    }

    render(){
        return(
                <header>
                    <div className="logo"
                    onClick = {() => { console.log("clicked")}}>
                    {this.state.title}
                    </div>
                    <center>
                        <input onChange={this.inputChange.bind(this)}/>
                        <h2>{this.state.keyword}</h2>
                    </center>  
                </header>
        )
    }
}


export default Header;





/*

state  = local variable

props = use to share the data


A          Props             B
state    =========>          state

const Header = () => {
    return(
        <div>
            <h1>Logo</h1>
        </div>
    )
}

const styles = {
            header:{
                background: 'orange'
            },
            logo:{
                color: '#fff',
                textAlign:'center',
                fontSize:'30px'
            }
        }

<header style={styles.header}>
                    <div style={styles.logo}>Logo</div>
                    <input />
                </header>
*/