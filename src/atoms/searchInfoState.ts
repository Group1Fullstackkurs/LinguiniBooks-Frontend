import { atom } from "recoil"

const searchInfoState = atom({
    key: 'searchInfo',
	default: {books: [], filter: {title: "", author: "", language: "", publicationYear: "", price: ""}}
})
export default searchInfoState