
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './Pages/Dashboard'
import TicketPage from './Pages/TicketPage'
import EmployeePage from './Pages/EmployeePage'
import Navbar from './Components/Nav'

const App = () => {

  return (
    <div className="app">
     <BrowserRouter>
     <Navbar/>
     <Routes>
       <Route path='/' element={<Dashboard/>}/>
       <Route path='/ticket' element={<TicketPage/>}/>
       <Route path='/EmployeePage' element={<EmployeePage/>}/>

     </Routes>
     </BrowserRouter>
    </div>
  )
}
export default App

