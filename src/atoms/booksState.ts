import { atom } from "recoil"
import { BookModel } from "../Typescript/BookModel"

const booksState = atom<Array<BookModel>>({
    key: 'bookList',
	default: [], 
})
export default booksState