import React, {Component} from 'react';

import Banner from '../components/banner';
import ArtistList from '../components/artistList';

const URL_Artists = 'http://localhost:8900/artists'

class Home extends Component{

    constructor(props){
        super(props);

        this.state = {
            artists:''
        }
    }

    componentDidMount(){
        fetch(URL_Artists,{
            method: 'GET'
        })
        .then(response => response.json())
        .then(json => {
            this.setState({
                artists: json
            })
        })
    }

    render(){
        return(
            <div>
                <Banner/>
                <ArtistList allArtists={this.state.artists}></ArtistList>
            </div>
        )
    }
}

export default Home;