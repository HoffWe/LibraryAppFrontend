
import { Router } from 'express'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { AuthorHomePage } from '../Components/Author/AuthorHomePage'
import { SearchAuthorByName } from '../Components/Author/SearchAuthorByName'
import { Home } from '../Components/Home'
import { Navbar } from '../Components/Navbar/Navbar'

import { AddBook } from '../Components/Book/AddBook';
import {Login} from '../Components/Login/Login';
import { Library } from '../Components/Library/Library';
import { Register } from '../Components/Register/Register';
import {AllBooks} from "../Components/Book/AllBooks";
import {OtherBooks} from "../Components/Book/OtherBooks";


export const AppRouter = () => {
  return (

    <Routes>

        <Route path="/" element={<Navbar/>}>
        <Route index element={<Home />} />
            <Route path='/book' element={<AllBooks/>}> Książki</Route>
            <Route path='/otherBooks' element={<OtherBooks/>}></Route>
        <Route path='authorhomepage' element={<AuthorHomePage />}>Autor</Route>
        <Route path='login' element={<Login />}>Logowanie</Route>
        <Route path='register' element={<Register />}>Rejestracja</Route>             
        </Route>

    </Routes>
  )
}
