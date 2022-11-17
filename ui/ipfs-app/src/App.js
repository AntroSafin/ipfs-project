import './App.css';
import {Routes, Route} from 'react-router-dom'
import Login from './pages/login'
import Reg from './pages/Reg'
function App() {
  return (<>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/reg" element={<Reg/>}/>
    </Routes>
    </>
  );
}

export default App;
