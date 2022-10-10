import axios from 'axios'
import { plainToInstance } from 'class-transformer'
import BookModel from './BookModel'

const fetchAllBooks = async (): Promise<Array<BookModel>> => {
        let books!: Array<BookModel>
        let response = await axios.get("https://linguinibooksapi20221010110139.azurewebsites.net/api/Book")
        books = plainToInstance (BookModel, response.data as Array<BookModel>)
        return books
}
export default fetchAllBooks


