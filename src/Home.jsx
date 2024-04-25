import Navbar from './components/navbar/navbar';
import Login from './components/login/login';
import {BrowserRouter,Routes,Route,Outlet,Navigate} from 'react-router-dom';
import Intro from './components/Intro/intro';
import SignIn from './components/signin/signin';

const PrivateRouteBlog = ()=>{
    return localStorage.getItem("userId") ?
    <>
        <Outlet/>
    </>:
    <Navigate replace to="/intro"/>
}

const PrivateRoute = ()=>{
    return localStorage.getItem("userId") ?
    <Navigate replace to="/intro"/>
    :
    <>
        <Outlet/>
    </>
}   

const Home = ()=>{
    return (<>
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path='/intro' element={<Intro/>} />
                <Route element={<PrivateRoute/>} >
                    <Route path='/login' element={<Login/>} />
                    <Route path='/signin' element={<SignIn/>} />
                </Route>
                <Route path='*' element={<Navigate replace to="/intro"/>}  />
            </Routes>
        </BrowserRouter>
    </>)
}
export default Home;