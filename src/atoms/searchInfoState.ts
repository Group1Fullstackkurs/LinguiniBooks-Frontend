import { atom } from "recoil"

const searchInfoState = atom({
    key: 'searchInfo',
	default: {title: "", author: "", publicationYear: "", price: "", category: ""}
})
export default searchInfoState