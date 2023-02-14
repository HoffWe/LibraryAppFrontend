import { Router } from 'express'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { AuthorHomePage } from '../Components/Author/AuthorHomePage'
import { Home } from '../Components/Home'
import { Navbar } from '../Components/Navbar/Navbar'

export const AppRouter = () => {
  return (

    <Routes>
        <Route path="/" element={<Navbar/>}> // wszytkie miejsca, które mają mieć nav bar muszą być dziećmi 
            <Route index element={<Home/>}></Route>
            <Route path="/authorhomepage" element={<AuthorHomePage />}></Route>
        </Route>


    </Routes>
  )
}
