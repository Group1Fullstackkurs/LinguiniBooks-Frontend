import "./Cartpage.css"
import { useRecoilState } from "recoil"
import cartState from "../atoms/cartState"

const Cartpage = () => {
	const [cart, setCart] = useRecoilState(cartState)
	

	let total = 0.0;
	for (let i = 0; i < cart.length; i++) {
		
		let price = cart[i].book.price.substring(1).replace(",", ".");	
		total += parseFloat(price)
	}

	return (
		<div className="cart-container">
			<p>Shopping Cart</p>
			
			{cart.map((book) => (
				<div className="cart-item">
					<p>{book.book.title}</p>
					<p>{book.book.price}</p>
					<p>Quantity: {book.quantity}</p>
				</div>
			))}
			
			<button>+1</button>
			<button>-1</button>
			<p>Total sum: €{total}</p>
			<div className="cart-btns">
				<button>Go to checkout</button>
				<button>Continue shopping</button>
			</div>
		</div>
	)
}
export default Cartpage;