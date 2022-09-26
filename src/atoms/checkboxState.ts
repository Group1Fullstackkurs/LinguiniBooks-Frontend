import { atom } from "recoil"

const checkboxState = atom({
    key: 'checkboxState',
	default: {az: false, author: false, year: false}, 
})
export default checkboxState