import { BrowserRouter, Routes ,Route} from "react-router-dom";
import Frontpage from "./pages/Frontpage";
import Navbar from "./pages/Navbar";

export default function App() {
  return (
        <div className="bg-gray-900 text-white h-screen">
          <BrowserRouter>
          <Navbar/>
            <Routes>
              <Route path="/" element={<Frontpage/>}/>
            </Routes>
          </BrowserRouter>
          </div>
  )
}