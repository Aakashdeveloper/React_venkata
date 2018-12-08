export function moviesList(){
    return{
        type:'MOVIES_LIST',
        payload: [
            {id:1, name:'Avengers'},
            {id:2, name:'Dead Race'},
            {id:3, name:'Mad Max'}
        ]
    }
}

export function ArtistList(){
    return{
        type:'ARTIST_LIST',
        payload: [
            
        ]
    }
}