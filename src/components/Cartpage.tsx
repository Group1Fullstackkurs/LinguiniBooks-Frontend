import "./Cartpage.css"
import { useRecoilState } from "recoil"
import cartState from "../atoms/cartState"
import { Link } from "react-router-dom";
import CartModel from "../Typescript/CartModel"
import Book from "./BookPage/Book";

const Cartpage = () => {
	const [cart, setCart] = useRecoilState(cartState)
	
	const handlePlus = (cartItem: CartModel) => {
		let newCart: Array<CartModel> = JSON.parse(JSON.stringify(cart))
		newCart.map((item, i) => {
			if (item.book.id === cartItem.book.id && (cartItem.book.stock > item.quantity)) {
				newCart[i].quantity++;
				return;
			}
		});
		setCart(newCart);
	}

	const handleMinus = (cartItem: CartModel) => {
		let newCart: Array<CartModel> = JSON.parse(JSON.stringify(cart))
		newCart.map((item, i) => {
			if (item.book.id === cartItem.book.id) {
				if(cartItem.quantity != 0) {
					newCart[i].quantity--;
				} else {
					newCart.splice(i, 1);
				}
				return;
			}
		});
		setCart(newCart);
	}

	let total = 0.0;
	for (let i = 0; i < cart.length; i++) {
		let bookPrice = cart[i].book.price.substring(1).replace(",", ".");
		let booksPrice = parseFloat(bookPrice) * cart[i].quantity;	
		total += booksPrice;
	}

	return (
		<div className="cart-container">
			<p>Shopping Cart</p>
			
			{cart.map((cartItem) => (
				<div className="cart-item" key={cartItem.book.id}>
					<div className="item-btns">
						<button onClick={(event: React.MouseEvent<HTMLElement>) => handleMinus(cartItem)}>-</button>
						<button onClick={(event: React.MouseEvent<HTMLElement>) => handlePlus(cartItem)}>+</button>
					</div>
					<p>{cartItem.book.title}</p>
					<p>{cartItem.book.price}</p>
					<p>Quantity: {cartItem.quantity}</p>
				</div>
			))}
			

			<p>Total sum: €{total}</p>
			<div className="cart-btns">
				<button>Go to checkout</button>
				<Link to="/">
				<button>Continue shopping</button>
				</Link>
				
			</div>
		</div>
	)
}
export default Cartpage;