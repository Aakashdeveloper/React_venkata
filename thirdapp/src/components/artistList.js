import React, {Component} from 'react';
import { Link } from 'react-router-dom';

const ArtistList = (props) => {
    console.log(props)

    const list = ({allArtists}) => {
        if(allArtists){
            return allArtists.map((data) => {
                const style={
                    background:`url('/images/covers/${data.cover}.jpg')
                    no-repeat`
                }
                return(
                    <Link to={`/artist/${data.id}`}
                        className="artist_item"
                        style={style}>
                        <div>{data.name}</div>
                    </Link>
                )
            })
        }
        
    }

    return(
        <div className="artist_list">
            <h4>Browse The Artist</h4>
            {list(props)}
        </div>
    )
}

export default ArtistList;


/*
var a = 10
var b = "my age is "+ a

var b = `my age is ${a}`
*/
