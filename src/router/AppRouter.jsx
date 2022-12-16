import { Routes, Route, Navigate } from 'react-router-dom';
import { LoginPages } from '../auth';
import { DcPages, MarvelPage } from '../heroes';
import { Navbar } from '../ui';

export const AppRouter = () => {

  return (
    <>
        <Navbar/>

        <Routes>
            <Route path="Marvel" element={ <MarvelPage/> }/>
            <Route path="Dc" element= { <DcPages/>} />

            <Route path="Login" element= { <LoginPages/>} />
            <Route path="/" element= { <Navigate to="Marvel"/>} />
        </Routes>
    </>
  )
}
