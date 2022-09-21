import './App.css'
import Header from './components/Header'
import Bookpage from './components/Bookpage';
import Landingpage from './components/Landingpage'
import {useRecoilValue} from 'recoil';
import searchInfoState from "./atoms/searchInfoState";

function App() {
  const searchInfo = useRecoilValue(searchInfoState)
  return (
    
      <div className="App">
          <Header/>
          {(searchInfo.filter[0].length > 0) ? <Bookpage /> : <Landingpage/>}          
      </div>
  )
}
export default App
