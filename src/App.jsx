import { BrowserRouter, Routes ,Route} from "react-router-dom";
import Frontpage from "./pages/Frontpage";

export default function App() {
  return (
        <div className="bg-gray-900 text-white h-screen">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Frontpage/>}/>
            </Routes>
          </BrowserRouter>
          </div>
  )
}