import Navbar from "./components/navbar/Navbar"
import { Route, Routes } from "react-router-dom"
import Home from "./pages/home/Home"

function App() {

  return (
    <>
      <div className=' text-white'>
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<PlaceOrder />} />
        <Route path="/mobile_app" element={<Home />} />
        <Route path="/contact_us" element={<Home />} /> */}
      </Routes>
    </>
  )
}

export default App
