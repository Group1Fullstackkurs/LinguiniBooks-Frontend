import { atom } from "recoil"
import { BookModel } from "../Typescript/BookModel"

const pureBookState = atom<Array<BookModel>>({
    key: 'bookListPure',
	default: [], 
})
export default pureBookState