import { atom } from "recoil"
import { BookModel } from "../Typescript/BookModel"

const filteredBooksState = atom<Array<BookModel>>({
    key: 'filterdBooks',
	default: [], 
})
export default filteredBooksState