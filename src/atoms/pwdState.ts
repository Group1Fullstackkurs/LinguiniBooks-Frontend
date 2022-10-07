import { atom } from "recoil"

const pwdState= atom({
    key: 'pwd',
	default: "", 
})
export default pwdState