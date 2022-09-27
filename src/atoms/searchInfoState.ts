import { atom } from "recoil"

const searchInfoState = atom({
    key: 'searchInfo',
	default: {searchKey: "", category: ""}
})
export default searchInfoState