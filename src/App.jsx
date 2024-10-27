import Header from "./components/Header"
import Allperfumes from "./components/Allperfumes"
import Cart from "./components/Cart"

function App() {
  

  return (
    <>
    <Header/>
    <div className="container my-4">
      <div className="row">
        <div className="col-lg-8">
          <Allperfumes/>
        </div>
        <div className="col-lg-4">
          <Cart/>
        </div>
      </div>

    </div>
      
    </>
  )
}

export default App
