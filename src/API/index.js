import {getImages} from './route'
import { API } from './api';

export const getFiles = ( ) =>{
    return API.get( getImages )
}