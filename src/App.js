import { Routes, Route } from 'react-router-dom'
import Home from "./Routes/Home/home.component";
import Navigation from './Routes/Navigation/navigation.component';
import Authentication from './Routes/authentication/authentication.component';
import Shop from './Routes/shop/shop.component';



const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='/auth' element={<Authentication />} />
        <Route path='/shop' element={<Shop />} />
      </Route>
    </Routes>
  )
}

export default App;