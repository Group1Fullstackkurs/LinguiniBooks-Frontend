import { atom } from "recoil"

const searchInfoState = atom({
    key: 'searchInfo',
	default: {filter: {title: "", author: "", language: "", publicationYear: "", price: ""}}
})
export default searchInfoState