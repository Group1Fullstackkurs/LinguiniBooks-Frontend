import { atom } from "recoil"
import filterType from "../Typescript/EnumFilterType"

const activeSearchTypeState = atom({
    key: 'activeSearchType',
	default: filterType, 
})
export default activeSearchTypeState