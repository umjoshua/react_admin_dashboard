
import Home from './pages/home/Home';
import Trucks from './pages/trucks/Trucks';
import { Routes, Route, BrowserRouter } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route path="/">
          <Route index element={<Home/>}/>
          <Route path="trucks" element={<Trucks/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
