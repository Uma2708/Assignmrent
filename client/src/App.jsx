import {BrowserRouter, Routes, Route} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import Users from './Components/Users'
import CreateUser from './Components/CreateUser'
import UpdateUser from './components/UpdateUser'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Users/>}></Route>
        <Route path='/createUser' element={<CreateUser/>}></Route>
        <Route path='/updateUser/:id' element={<UpdateUser/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
