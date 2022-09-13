const fetchAllBooks = ():JSON => {
    //const url = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=1000'
    //const url = 'https://linguinibooksapi20220912102408.azurewebsites.net/api/Book'
    //const url = 'https://linguinibooksapi20220912102408.azurewebsites.net/WeatherForecast'
    const url = 'https://localhost:7269/api/Book'
    let data: JSON = JSON;
    const getBooks = async () => {
        const response = await fetch(url)
        data = await response.json()
        console.log('hämtar data...')
        console.log(data)
    }
    getBooks();
    return data;
}

export default fetchAllBooks;