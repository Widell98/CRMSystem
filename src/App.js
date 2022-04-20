import './App'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import OneNavBar from './Components/nav'
import React from 'react'
import TableInformation from './TableInfo.js'

const App = () => {
  return (
    <div>
      <OneNavBar />
      <TableInformation />
    </div>

  )

}

export default App;
