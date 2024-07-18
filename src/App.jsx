import './App.css'
import { Route, Routes} from 'react-router-dom';
import Home from './Pages/Home';
import LandingPage from './komponen/LandingPage';
import Landing from './Pages/Landing';
import State from './Pages/State';
import EventHandling from './Pages/EventHandling';
import UseEffect from './Pages/UseEffect';
import Animasi from './Pages/animasi';
import FetchApi from './Pages/fetch';
import ReactContext from './Pages/ReactContext';
import GetMahasiswa from './komponen/admin/GetMahasiswa';


function App () {
  return (
    <>
      <Routes>
        <Route path="/" Component={Home}/>
        <Route path="/landingpage" Component={Landing}/>
        <Route path="/state" Component={State}/>
        <Route path="/eventhandling" Component={EventHandling}/>
        <Route path="/useeffect" Component={UseEffect}/>
        <Route path="/animasi" Component={Animasi}/>
        <Route path="/fetch" Component={FetchApi}/>
        <Route path="/reactcontext" Component={ReactContext}/>
        <Route path="/GetMahasiswa" Component={GetMahasiswa}/>

        

       </Routes>
    </>
  )
}

export default App