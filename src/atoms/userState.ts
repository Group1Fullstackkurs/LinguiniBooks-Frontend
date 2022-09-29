import { atom } from "recoil"
import { UserModel } from "../Typescript/UserModel"

const userState= atom<UserModel>({
    key: 'userKey',
	default: {} as UserModel, 
})
export default userState