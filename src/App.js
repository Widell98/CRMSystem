import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './Pages/Dashboard'
import TicketPage from './Pages/TicketPage'
import Nav from '../src/components/Nav'

const App = () => {

  return (
    <div className="app">
<h1>hej</h1>
     <BrowserRouter>
     <Nav/>
     <Routes>
       <Route path='/' element={<Dashboard/>}/>
       <Route path='/ticket' element={<TicketPage/>}/>

     </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App

