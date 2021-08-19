import Routes from "./Pages/Routes/Routes"
import { useAuthState } from 'react-firebase-hooks/auth';
import { fire } from "./Service/firebase";
import Loader from "./Components/Loader/Loader";
import './App.scss'
import { useEffect } from "react";
import { getFiles } from './API/index';
const App = () =>{

    const [user , loading] = useAuthState(fire.auth())

    

    if(loading){
        return(
            <div className='centerLoader'>
                <Loader />
            </div>
        )
    }else{
        return (
            <>
                <Routes  user={user} />
            </>
        )
    }


    
}

export default App