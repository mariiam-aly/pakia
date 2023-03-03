import './App.css';
import SignIn from './screens/SignIn';
import SignUp from './screens/SignUp';
import Verify from './screens/Verify';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Files from './screens/Files';
function App() {
  return ( <div className="App">
    <BrowserRouter>
     <Routes>
    <Route exact path="/verify" element={<Verify/>}/>
    <Route exact path="/" element={<SignIn/>}/>
    <Route exact path="/sign-up" element={<SignUp/>}/>
    <Route exact path="/files" element={<Files/>}/>

    </Routes>
   </BrowserRouter></div>
  );
}

export default App;
