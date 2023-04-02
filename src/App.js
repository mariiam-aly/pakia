import './App.css';
import SignIn from './screens/SignIn';
import SignUp from './screens/SignUp';
import Home from './screens/Home';
import Slots from './screens/Slots';
import Reserve from './screens/Reserve';
import Verify from './screens/Verify';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Files from './screens/Files';
function App() {
  return ( <div className="App">
    <BrowserRouter>
     <Routes>
    <Route exact path="/verify" element={<Verify/>}/>
    <Route exact path="/sign-in" element={<SignIn/>}/>
    <Route exact path="/" element={<Home/>}/>
    <Route exact path="/slots" element={<Slots/>}/>
    <Route exact path="/reserve" element={<Reserve/>}/>

    <Route exact path="/sign-up" element={<SignUp/>}/>
    <Route exact path="/files" element={<Files/>}/>

    </Routes>
   </BrowserRouter></div>
  );
}

export default App;
