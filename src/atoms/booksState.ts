import { atom } from "recoil"
import { BookModel } from "../Typescript/BookModel"

const filterdBooksState = atom<Array<BookModel>>({
    key: 'filterdBooks',
	default: [], 
})
export default filterdBooksState