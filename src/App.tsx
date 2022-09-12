import './App.css'
import { useState, useEffect } from 'react'
import Header from './components/Header'
import Landingpage from './components/Landingpage'

function App() {
  const [bookData, setBookData] = useState([])
	const [book, setBook] = useState([])
	const [pokeList, setPokeList] = useState([])
	//const url = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=1000'
  const url = 'https://linguinibooksapi20220912102408.azurewebsites.net/api/Book'
  //const url = 'https://linguinibooksapi20220912102408.azurewebsites.net/WeatherForecast'

  useEffect(() => { 
		const getBooks = async() => {
			const response = await fetch(url) 
			let data = await response.json()
      console.log(data)
			setBookData(data.results)
		}
		getBooks()

	}, [])

	// useEffect(() => {
	// 	if(bookData == null)
	// 		return
	// 	else{
	// 		const getBooks = async(response: any[]) => {		
	// 			response.map(async(book) =>{
	// 				const result = await fetch(book.url)
	// 				let data = await result.json()
	// 				setBook(data)
	// 			})
	// 		}
	// 		getBooks(bookData)
	// 	}

	// }, [bookData])

  return (
    <div className="App">
        <Header/>
        <Landingpage/>
    </div>
  )
}

export default App
