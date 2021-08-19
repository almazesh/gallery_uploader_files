import './Login.scss'
import { fire  , googleProvider} from '../../Service/firebase';
const Login = () =>{

    const signIn = (e) =>{
        e.preventDefault()
        fire.auth().signInWithPopup(googleProvider)
        .then(r => console.log(r))
    }
 
    return(
        <>
            <div className='root'>
                <div className='card'>
                    <h2>Authorization</h2>
                    <img onClick={signIn} src='https://cdn.pixabay.com/photo/2015/12/11/11/43/google-1088004_960_720.png'/>
                </div>
            </div>
        </>

    )
}

export default Login;