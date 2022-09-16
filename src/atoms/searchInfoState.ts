import { atom } from "recoil"

const searchInfoState = atom({
    key: 'searchInfo',
	default: {category: "", filter: ""}
})
export default searchInfoState