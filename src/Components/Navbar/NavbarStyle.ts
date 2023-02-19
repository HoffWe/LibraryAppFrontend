import styled from "styled-components";

export const NavbarContainer= styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items:center;
background:linear-gradient(to left, rgba(5, 91, 152, 0.455), rgb(50, 85, 241));
width: 100%;
height: 50px;


`
export const NavbarLinks= styled.div`
display: flex;
flex-direction: row;
gap: 16px;
text-decoration: none;

`
export const NavbarLibrary= styled.div`
text-decoration: none;
    color: black;
    margin-left: 25px;
    font-weight: bold;
   
`
export const NavbarBook= styled.div`
text-decoration: none;
    color: black;
    margin-left: 25px;
    font-weight: bold;
   
`
export const NavbarAuthor= styled.div`
text-decoration: none;
    color: black;
    margin-left: 25px;
    font-weight: bold;
   
`
export const NavbarIcons= styled.div`
display: flex;
flex-direction: row;
gap: 16px;
margin-right: 25px;
`