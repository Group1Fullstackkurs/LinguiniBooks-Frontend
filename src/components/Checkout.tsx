import { useState } from "react";
import { useRecoilValue } from "recoil";
import cartState from "../atoms/cartState";
import pwdState from "../atoms/pwdState";
import userState from "../atoms/userState";
import totalCost from "../Typescript/Totalcost";
import "./Checkout.css"
import { useEffect } from "react";
import BookModel from "../Typescript/BookModel";

type Props = {
	isCheckout: boolean;
	setIsCheckout: (active: boolean) => void;
  };

const Checkout = ({isCheckout, setIsCheckout}: Props) =>{
	const [isComplete, setIsComplete] = useState(false);
	const user = useRecoilValue(userState);
	const cart = useRecoilValue(cartState);
	const pwd = useRecoilValue(pwdState);

	useEffect(() => {
		let bookList: Array<BookModel> = [];

		cart.forEach((item) => { 
			bookList = bookList.concat(item.book)
		})
		const updateBooks = async () => {
			await fetch("https://linguinibooksapi20220913132810.azurewebsites.net/api/User/BuyBook/" + user.id + "/" + pwd, {
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
					"Accept": "application/json",
				},
				body: JSON.stringify(bookList),
			});
		}

		if(isComplete){
			updateBooks();
		}

	}, [isCheckout]);

	if(isCheckout){
		return(
			<div className="checkout-container">
				<div className="checkout-header">
					<h2>Checkout</h2>
					<button onClick={(event: React.MouseEvent<HTMLElement>) =>
					setIsCheckout(false)}><p>x</p></button>
				</div>
				<div className="checkout-info">
					<h3>Delivery address</h3>
					<p>Name: {user.name}</p>
					<p>Mail: {user.mail}</p>
					<h3>Payment method</h3>
					<div className="payment">
						<label htmlFor="card">Card</label>
						<input type="radio" name="payment" id="card" value="card"></input>
						<label htmlFor="paypal">PayPal</label>
						<input type="radio" name="payment" id="paypal" value="paypal"></input>
					</div>
					<h3>Order Summary</h3>
					<div className="order">
						{cart.map((cartItem) => (
							<div className="checkout-item" key={cartItem.book.id}>
								<p>{cartItem.quantity}x</p>
								<p>{cartItem.book.title}</p>
								<p>{cartItem.book.price}</p>
							</div>
						))}
					</div>
					<p>Free shipping</p>
					<h2>Order total EUR€{totalCost(cart)}</h2>
					<button onClick={(event: React.MouseEvent<HTMLElement>) => setIsComplete(true)}><p>Complete Order</p></button>
				</div>
			</div>)
	} else return null
}
export default Checkout