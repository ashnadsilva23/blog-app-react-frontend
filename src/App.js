import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Register from './components/Register';
import SignIn from './components/SignIn';
import CreatePost from './components/CreatePost';
import ViewAll from './components/ViewAll';
import ViewmyPost from './components/ViewmyPost';
function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<SignIn/>}/>
    <Route path='/reg' element={<Register/>}/>
    <Route path='/post' element={<CreatePost/>}/>
    <Route path='/view' element={<ViewAll/>}/>
    <Route path='/viewmy' element={<ViewmyPost/>}/>


   </Routes>
   </BrowserRouter>
  );
}

export default App;
