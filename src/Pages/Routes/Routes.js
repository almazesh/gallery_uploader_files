import { Redirect, Route, Switch } from "react-router-dom";
import Login from "../Login/Login";
import Main from "../Main/Main";
import Start from "../Start/Start";
import Table from "../Table/Table";

const Routes = ({user}) =>{


    return (
        <>
            {
                user ? (
                   <Switch>
                       <Route exact path='/' component={Main}/>
                       <Route exact  path='/start' component={Start} />
                       <Route path='/start/table' component={Table} />
                       <Redirect to='/' />
                   </Switch>
                ) : (
                   <Switch>
                       <Route path='/login' component={Login}/>
                       <Redirect to='/login'/>
                   </Switch>
                )   
            }
        </>
    )
}

export default Routes;