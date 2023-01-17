import { Routes, Route } from 'react-router-dom'
import Home from "./Routes/Home/home.component";
import Navigation from './Routes/Navigation/navigation.component';
import Signin from './Routes/Sign-in/sign_in.component';



const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='/sign-in' element={<Signin />} />
      </Route>
    </Routes>
  )
}

export default App;