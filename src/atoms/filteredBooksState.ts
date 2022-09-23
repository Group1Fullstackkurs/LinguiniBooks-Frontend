import { atom } from "recoil"
import { BookModel } from "../Typescript/BookModel"

const filteredBooksState = atom<Array<BookModel>>({
    key: 'filteredBooks',
	default: [], 
})
export default filteredBooksState