import { atom } from "recoil"
import BookModel from "../Typescript/BookModel"

const pureBooksState = atom<Array<BookModel>>({
    key: 'bookListPure',
	default: [], 
})
export default pureBooksState