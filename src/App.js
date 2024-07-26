import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Register from './components/Register';
import SignIn from './components/SignIn';
import CreatePost from './components/CreatePost';
function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<SignIn/>}/>
    <Route path='/reg' element={<Register/>}/>
    <Route path='/post' element={<CreatePost/>}/>

   </Routes>
   </BrowserRouter>
  );
}

export default App;
