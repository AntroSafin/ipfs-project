import './App.css';
import  {Routes, Route} from 'react-router-dom';
import Login from './pages/login';
import Reg from './pages/reg'
import { createGlobalState } from 'react-hooks-global-state';
const initialState = { username: '' };
export const { useGlobalState } = createGlobalState(initialState);

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
