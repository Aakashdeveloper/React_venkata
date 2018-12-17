import { baseUrl } from '../constants/apiurl';

export function latestNews(){
    const request = fetch(`${baseUrl}/articles?_order=desc&_end=3`,
                    {method:'GET'})
                    .then(response => response.json())

        return{
            type:'GET_LATEST',
            payload: request
        }
}

export function otherNews(){
    const request = fetch(`${baseUrl}/articles?_order=desc&_start=3&_end=10`,
                    {method:'GET'})
                    .then(response => response.json())

        return{
            type:'GET_OTHER',
            payload: request
        }
}

export function latestGallery(){
    const request = fetch(`${baseUrl}/galleries?_order=desc&_limit=2`,
                    {method:'GET'})
                    .then(response => response.json())

        return{
            type:'GET_GALLERY',
            payload: request
        }
}

export function selctedNews(id){
    const request = fetch(`${baseUrl}/articles?id=${id}`,
                    {method:'GET'})
                    .then(response => response.json())

        return{
            type:'GET_SELECTED_NEWS',
            payload: request
        }
}

export function clearSelectedNews(){
        return{
            type:'CLEAR_SELECTED_NEWS',
            payload: []
        }
}