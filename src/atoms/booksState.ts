import { atom } from "recoil"
import { BookModel } from "../Typescript/BookModel"
import { IBookModel } from "../Typescript/IBookModel";
const booksState = atom({
    key: 'bookList',
	default: Array<BookModel>,
})
export default booksState