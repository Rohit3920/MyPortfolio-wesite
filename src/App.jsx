import './App.css'
import data from "./assets/Data.json"
import Navbar from './component/Navbar'
import Profile from './pages/profile/Profile'
import {Socialicons} from './component/social_icon/Social_Icon'


function App() {

  return (
    <>
    <Navbar />
    <Profile ProfileData={data}  />
      <Socialicons  socialprofils={data.socialprofils}/>
    </>
  )
}

export default App
