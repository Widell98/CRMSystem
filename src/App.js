import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './Pages/Dashboard'
import TicketPage from './Pages/TicketPage'


const App = () => {

  return (
    <div className="app">
<h1>hej</h1>
     <BrowserRouter>
     <Routes>
       <Route path='/' element={<Dashboard/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App

