import { Routes, Route, Navigate } from "react-router-dom"
import { Navbar } from "../../ui"
import { DcPages, HeroPage, MarvelPage, SearchPage } from "../pages"



export const HeroesRoutes = () => {
  return (
    <>
        <Navbar />

        <div className="container"> 
            <Routes>
                <Route path="Marvel" element={ <MarvelPage/> }/>
                <Route path="Dc" element= { <DcPages/>} />

                <Route path="search" element= { <SearchPage/>} />
                <Route path="hero/:id" element= { <HeroPage/>} />

                <Route path="/" element= { <Navigate to="Marvel"/>} />
            </Routes>
        </div>
    </>
  )
}
