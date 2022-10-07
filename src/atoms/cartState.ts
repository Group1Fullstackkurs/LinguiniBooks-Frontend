import { atom } from "recoil"
import CartModel from "../Typescript/CartModel"

const cartState = atom<Array<CartModel>>({
    key: 'cartList',
	default: [], 
})
export default cartState