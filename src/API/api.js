const baseURL = `https://gallery-f57cc.appspot.com`;


export const API = {
    get: ( url ) =>{
        return fetch(`${baseURL}/${url}`)
    }
}