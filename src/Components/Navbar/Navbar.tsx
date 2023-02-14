
import {Box, Button, ButtonGroup, Flex, Heading, LinkBox, Spacer } from '@chakra-ui/react'
import { Link, Outlet } from 'react-router-dom'
import LoginIcon from '../../icons/Login'

export const  Navbar = () => {
  return (
    <>
    <Flex bg='#1CDEFA' minWidth='max-content' alignItems='center' gap='2'>
  <Box>
        <Link to={'/'} >Home</Link>
        <Link to={'/authorhomepage'}>AuthorHomePage</Link>
  </Box>
  <Spacer /> 
  <Box>
   < LoginIcon />
  </Box>
</Flex>
    <Outlet/>
    </>
  )
}
