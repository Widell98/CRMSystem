import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import Dashboard from './Pages/Dashboard'
import TicketPage from './Pages/TicketPage'
import EmployeePage from './Pages/EmployeePage'
import Navbar from './Components/Navbar'
import CalenderPage from './Pages/Calender'
import CategoriesContext from './context'
import LoginPage from './Pages/Login'
import AdminPage from './Pages/AdminPage'

const App = () => {
  const [categories, setCategories] = useState(null)
  const value = { categories, setCategories }

  return (
    
    <div className="app">
      <CategoriesContext.Provider value={value}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<LoginPage />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/clients' element={<TicketPage />} />
            <Route path='/clients/:id' element={<TicketPage editMode={true} />} />
            <Route path='/employees' element={<EmployeePage />} />
            <Route path='/Adminpage:id' element={<AdminPage editMode={true}/>} />

            <Route path='/CalenderPage' element={<CalenderPage />} />
            <Route path='/LoginPage' element={<LoginPage />} />
            <Route path='/AdminPage' element={<AdminPage />} />

          </Routes>
        </BrowserRouter>
      </CategoriesContext.Provider>
    </div>
  )
}
export default App

