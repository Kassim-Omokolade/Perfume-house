import Header from "./components/Header"
import Allperfumes from "./components/Allperfumes"
import Cart from "./components/Cart"

import { BrowserRouter,Routes,Route,Navigate } from "react-router-dom"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Error404 from "./pages/Error404"
import Home from "./pages/Home"

function App() {
  

      {
        
      }

  return (
    <>
      <BrowserRouter>
       
        <Routes>
          <Route>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<Error404/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
