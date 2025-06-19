import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./Pages/Home";
import Navigation from './Components/Navigation';

function App() {
  return (
    <BrowserRouter>
      <Navigation /> 
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
