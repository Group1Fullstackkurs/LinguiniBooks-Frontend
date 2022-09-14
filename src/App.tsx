import './App.css'
import { useState, useEffect } from 'react'
import Header from './components/Header'
import Landingpage from './components/Landingpage'

function App() {
  const [bookData, setBookData] = useState([])
  const [bookList, setBookList] = useState([])
	//const url = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=1000'
  	//const url = 'https://linguinibooksapi20220912102408.azurewebsites.net/api/Book'
  	//const url = 'https://linguinibooksapi20220912102408.azurewebsites.net/WeatherForecast'
	const url = 'https://localhost:7269/api/Book'

  return (
    <div className="App">
        <Header/>
        <Landingpage/>
    </div>
  )
}

export default App
