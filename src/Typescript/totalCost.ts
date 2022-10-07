import CartModel from "./CartModel";

const totalCost = (cart: CartModel[]) =>{
	let total = 0.0;
	for (let i = 0; i < cart.length; i++) {
		let bookPrice = cart[i].book.price.substring(1).replace(",", ".");
		let booksPrice = parseFloat(bookPrice) * cart[i].quantity;	
		total += booksPrice; 
		total = +total.toFixed(2); // + is used to convert string to number
	}
	return total;
}
export default totalCost